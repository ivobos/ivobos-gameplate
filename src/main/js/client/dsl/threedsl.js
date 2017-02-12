import * as THREE from 'three';

var antlr4 = require("antlr4/index");

// fix bug in antlr4 visitor
antlr4.tree.ParseTreeVisitor.prototype.visit = function(ctx) {
    if (Array.isArray(ctx)) {
        return ctx.map(function(child) {
            return child.accept(this);
        }, this);
    } else {
        return ctx.accept(this);
    }
};

var entitiesLexer = require('./entitiesLexer').entitiesLexer;
var entitiesParser = require('./entitiesParser').entitiesParser;
var entitiesVisitor = require('./entitiesVisitor').entitiesVisitor;

var ProgramVisitor = function() {
    entitiesVisitor.call(this); // inherit default visitor
    this.objects3d = [];
    return this;
};
ProgramVisitor.prototype = Object.create(entitiesVisitor.prototype);
ProgramVisitor.prototype.constructor = ProgramVisitor;

ProgramVisitor.prototype.visitDefaultGeometry = function(ctx) {
    this.defaultGeometry = this.visit(ctx.geometry());
};

ProgramVisitor.prototype.visitDefaultMaterial = function(ctx) {
    this.defaultMaterial = this.visit(ctx.material());
};

ProgramVisitor.prototype.visitDefaultColor = function(ctx) {
    this.defaultColor = this.visit(ctx.color());
};

ProgramVisitor.prototype.visitAddObject3d = function(ctx) {
    var object3d = this.visit(ctx.object3d());
    this.objects3d.push(object3d);
};

ProgramVisitor.prototype.visitGroup = function(ctx) {
    var group = new THREE.Group();
    var i = 0;
    while (ctx.object3d(i)) {
        var object3d = this.visit(ctx.object3d(i));
        group.add(object3d);
        i++;
    }
    return group;
};

ProgramVisitor.prototype.visitMesh = function(ctx) {
    var geometry = this.visit(ctx.geometry());
    var materialCtx = ctx.material();
    var material;
    if (materialCtx) {
        material = this.visit(materialCtx);
    } else {
        material = this.defaultMaterial;
    }
    return new THREE.Mesh(geometry, material);
};

ProgramVisitor.prototype.visitTranslate = function(ctx) {
    var object3d = this.visit(ctx.object3d());
    var vector3 = this.visit(ctx.vector3());
    object3d.position.add(vector3);
    return object3d;
};

ProgramVisitor.prototype.visitBox = function(ctx) {
    return new THREE.BoxGeometry(1,1,1);
};

ProgramVisitor.prototype.visitSphere = function(ctx) {
    var radius = this.visit(ctx.radius());
    if (!radius) radius = 5;
    return new THREE.SphereBufferGeometry(radius, 16, 12);
};

ProgramVisitor.prototype.visitRadius = function(ctx) {
    return parseInt(ctx.SIGNED_INT().getText());
};

ProgramVisitor.prototype.visitLambert = function(ctx) {
    var color = this.visit(ctx.color());
    if (!color) color = this.defaultColor;
    return new THREE.MeshLambertMaterial({ color: color});
};

ProgramVisitor.prototype.visitToon = function(ctx) {
    var color = ctx.color() ? this.visit(ctx.color()) : this.defaultColor;
    return new THREE.MeshToonMaterial({ color: color});
};

ProgramVisitor.prototype.visitColor = function(ctx) {
    var color = this.visit(ctx.colorValue());
    return new THREE.Color(color);
};

ProgramVisitor.prototype.visitHexTripletColor = function(ctx) {
    var c = undefined;
    if (ctx.SHORT_HEX_TRIPLET()) c = ctx.SHORT_HEX_TRIPLET().getText();
    return new THREE.Color(c);
};

ProgramVisitor.prototype.visitVector3 = function(ctx) {
    var x = parseInt(ctx.SIGNED_INT(0).getText());
    var y = parseInt(ctx.SIGNED_INT(1).getText());
    var z = parseInt(ctx.SIGNED_INT(2).getText());
    return new THREE.Vector3(x,y,z);
};

export function parseAndExecute(script) {
    var chars = new antlr4.InputStream(script);
    var lexer = new entitiesLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new entitiesParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.program();
    var visitor = new ProgramVisitor();
    visitor.visit(tree);
    if (visitor.objects3d.length == 1) return visitor.objects3d[0];
    if (visitor.objects3d.length == 0) return undefined;
    return visitor.objects3d;
}



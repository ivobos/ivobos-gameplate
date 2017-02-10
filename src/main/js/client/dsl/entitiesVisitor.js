// Generated from /Users/ibosticky/src/ivobos-gameplate/src/main/js/client/dsl/entities.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by entitiesParser.

function entitiesVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

entitiesVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
entitiesVisitor.prototype.constructor = entitiesVisitor;

// Visit a parse tree produced by entitiesParser#program.
entitiesVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#defaultGeometry.
entitiesVisitor.prototype.visitDefaultGeometry = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#defaultMaterial.
entitiesVisitor.prototype.visitDefaultMaterial = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#defaultColor.
entitiesVisitor.prototype.visitDefaultColor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#addObject3d.
entitiesVisitor.prototype.visitAddObject3d = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#mesh.
entitiesVisitor.prototype.visitMesh = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#translate.
entitiesVisitor.prototype.visitTranslate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#group.
entitiesVisitor.prototype.visitGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#box.
entitiesVisitor.prototype.visitBox = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#sphere.
entitiesVisitor.prototype.visitSphere = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#radius.
entitiesVisitor.prototype.visitRadius = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#lambert.
entitiesVisitor.prototype.visitLambert = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#toon.
entitiesVisitor.prototype.visitToon = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#color.
entitiesVisitor.prototype.visitColor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#hexColor.
entitiesVisitor.prototype.visitHexColor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#intColor.
entitiesVisitor.prototype.visitIntColor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#rgbColor.
entitiesVisitor.prototype.visitRgbColor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#hexTripletColor.
entitiesVisitor.prototype.visitHexTripletColor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#rgb.
entitiesVisitor.prototype.visitRgb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by entitiesParser#vector3d.
entitiesVisitor.prototype.visitVector3d = function(ctx) {
  return this.visitChildren(ctx);
};



exports.entitiesVisitor = entitiesVisitor;
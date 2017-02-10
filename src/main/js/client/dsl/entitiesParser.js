// Generated from /Users/ibosticky/src/ivobos-gameplate/src/main/js/client/dsl/entities.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var entitiesListener = require('./entitiesListener').entitiesListener;
var entitiesVisitor = require('./entitiesVisitor').entitiesVisitor;

var grammarFileName = "entities.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0014l\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0007",
    "\u0002\u0018\n\u0002\f\u0002\u000e\u0002\u001b\u000b\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003$\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0006\u0004",
    ")\n\u0004\r\u0004\u000e\u0004*\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u00040\n\u0004\u0005\u00042\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0007\u00047\n\u0004\f\u0004\u000e\u0004:\u000b\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005?\n\u0005\u0005\u0005A\n\u0005\u0003\u0006",
    "\u0003\u0006\u0005\u0006E\n\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0005\u0007K\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007",
    "O\n\u0007\u0005\u0007Q\n\u0007\u0003\b\u0003\b\u0005\bU\n\b\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t^\n\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0002\u0003\u0006",
    "\f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002\u0002t\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0004#\u0003\u0002\u0002\u0002\u0006",
    "1\u0003\u0002\u0002\u0002\b@\u0003\u0002\u0002\u0002\nB\u0003\u0002",
    "\u0002\u0002\fP\u0003\u0002\u0002\u0002\u000eR\u0003\u0002\u0002\u0002",
    "\u0010]\u0003\u0002\u0002\u0002\u0012_\u0003\u0002\u0002\u0002\u0014",
    "e\u0003\u0002\u0002\u0002\u0016\u0018\u0005\u0004\u0003\u0002\u0017",
    "\u0016\u0003\u0002\u0002\u0002\u0018\u001b\u0003\u0002\u0002\u0002\u0019",
    "\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a",
    "\u0003\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001c",
    "\u001d\u0007\u0003\u0002\u0002\u001d$\u0005\b\u0005\u0002\u001e\u001f",
    "\u0007\u0003\u0002\u0002\u001f$\u0005\f\u0007\u0002 !\u0007\u0003\u0002",
    "\u0002!$\u0005\u000e\b\u0002\"$\u0005\u0006\u0004\u0002#\u001c\u0003",
    "\u0002\u0002\u0002#\u001e\u0003\u0002\u0002\u0002# \u0003\u0002\u0002",
    "\u0002#\"\u0003\u0002\u0002\u0002$\u0005\u0003\u0002\u0002\u0002%&\b",
    "\u0004\u0001\u0002&(\u0007\u0004\u0002\u0002\')\u0005\u0006\u0004\u0002",
    "(\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*(\u0003\u0002",
    "\u0002\u0002*+\u0003\u0002\u0002\u0002+2\u0003\u0002\u0002\u0002,-\u0007",
    "\u0005\u0002\u0002-/\u0005\b\u0005\u0002.0\u0005\f\u0007\u0002/.\u0003",
    "\u0002\u0002\u0002/0\u0003\u0002\u0002\u000202\u0003\u0002\u0002\u0002",
    "1%\u0003\u0002\u0002\u00021,\u0003\u0002\u0002\u000228\u0003\u0002\u0002",
    "\u000234\f\u0003\u0002\u000245\u0007\u0006\u0002\u000257\u0005\u0014",
    "\u000b\u000263\u0003\u0002\u0002\u00027:\u0003\u0002\u0002\u000286\u0003",
    "\u0002\u0002\u000289\u0003\u0002\u0002\u00029\u0007\u0003\u0002\u0002",
    "\u0002:8\u0003\u0002\u0002\u0002;A\u0007\u0007\u0002\u0002<>\u0007\b",
    "\u0002\u0002=?\u0005\n\u0006\u0002>=\u0003\u0002\u0002\u0002>?\u0003",
    "\u0002\u0002\u0002?A\u0003\u0002\u0002\u0002@;\u0003\u0002\u0002\u0002",
    "@<\u0003\u0002\u0002\u0002A\t\u0003\u0002\u0002\u0002BD\u0007\t\u0002",
    "\u0002CE\u0007\n\u0002\u0002DC\u0003\u0002\u0002\u0002DE\u0003\u0002",
    "\u0002\u0002EF\u0003\u0002\u0002\u0002FG\u0007\u0012\u0002\u0002G\u000b",
    "\u0003\u0002\u0002\u0002HJ\u0007\u000b\u0002\u0002IK\u0005\u000e\b\u0002",
    "JI\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KQ\u0003\u0002\u0002",
    "\u0002LN\u0007\f\u0002\u0002MO\u0005\u000e\b\u0002NM\u0003\u0002\u0002",
    "\u0002NO\u0003\u0002\u0002\u0002OQ\u0003\u0002\u0002\u0002PH\u0003\u0002",
    "\u0002\u0002PL\u0003\u0002\u0002\u0002Q\r\u0003\u0002\u0002\u0002RT",
    "\u0007\r\u0002\u0002SU\u0007\n\u0002\u0002TS\u0003\u0002\u0002\u0002",
    "TU\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VW\u0005\u0010\t",
    "\u0002W\u000f\u0003\u0002\u0002\u0002X^\u0007\u0011\u0002\u0002Y^\u0007",
    "\u0013\u0002\u0002Z^\u0005\u0012\n\u0002[^\u0007\u000f\u0002\u0002\\",
    "^\u0007\u0010\u0002\u0002]X\u0003\u0002\u0002\u0002]Y\u0003\u0002\u0002",
    "\u0002]Z\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002]\\\u0003",
    "\u0002\u0002\u0002^\u0011\u0003\u0002\u0002\u0002_`\u0007\u0013\u0002",
    "\u0002`a\u0007\u000e\u0002\u0002ab\u0007\u0013\u0002\u0002bc\u0007\u000e",
    "\u0002\u0002cd\u0007\u0013\u0002\u0002d\u0013\u0003\u0002\u0002\u0002",
    "ef\u0007\u0012\u0002\u0002fg\u0007\u000e\u0002\u0002gh\u0007\u0012\u0002",
    "\u0002hi\u0007\u000e\u0002\u0002ij\u0007\u0012\u0002\u0002j\u0015\u0003",
    "\u0002\u0002\u0002\u0010\u0019#*/18>@DJNPT]"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'default'", "'Group'", "'Mesh'", "'translate'", 
                     "'Box'", "'Sphere'", "'radius'", "'='", "'Lambert'", 
                     "'Toon'", "'Color'", "','" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "SHORT_HEX_TRIPLET", "LONG_HEX_TRIPLET", 
                      "HEX", "SIGNED_INT", "INT", "WS" ];

var ruleNames =  [ "program", "statement", "object3d", "geometry", "radius", 
                   "material", "color", "colorValue", "rgb", "vector3d" ];

function entitiesParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

entitiesParser.prototype = Object.create(antlr4.Parser.prototype);
entitiesParser.prototype.constructor = entitiesParser;

Object.defineProperty(entitiesParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

entitiesParser.EOF = antlr4.Token.EOF;
entitiesParser.T__0 = 1;
entitiesParser.T__1 = 2;
entitiesParser.T__2 = 3;
entitiesParser.T__3 = 4;
entitiesParser.T__4 = 5;
entitiesParser.T__5 = 6;
entitiesParser.T__6 = 7;
entitiesParser.T__7 = 8;
entitiesParser.T__8 = 9;
entitiesParser.T__9 = 10;
entitiesParser.T__10 = 11;
entitiesParser.T__11 = 12;
entitiesParser.SHORT_HEX_TRIPLET = 13;
entitiesParser.LONG_HEX_TRIPLET = 14;
entitiesParser.HEX = 15;
entitiesParser.SIGNED_INT = 16;
entitiesParser.INT = 17;
entitiesParser.WS = 18;

entitiesParser.RULE_program = 0;
entitiesParser.RULE_statement = 1;
entitiesParser.RULE_object3d = 2;
entitiesParser.RULE_geometry = 3;
entitiesParser.RULE_radius = 4;
entitiesParser.RULE_material = 5;
entitiesParser.RULE_color = 6;
entitiesParser.RULE_colorValue = 7;
entitiesParser.RULE_rgb = 8;
entitiesParser.RULE_vector3d = 9;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = entitiesParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




entitiesParser.ProgramContext = ProgramContext;

entitiesParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, entitiesParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << entitiesParser.T__0) | (1 << entitiesParser.T__1) | (1 << entitiesParser.T__2))) !== 0)) {
            this.state = 20;
            this.statement();
            this.state = 25;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = entitiesParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;


 
StatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DefaultGeometryContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DefaultGeometryContext.prototype = Object.create(StatementContext.prototype);
DefaultGeometryContext.prototype.constructor = DefaultGeometryContext;

entitiesParser.DefaultGeometryContext = DefaultGeometryContext;

DefaultGeometryContext.prototype.geometry = function() {
    return this.getTypedRuleContext(GeometryContext,0);
};
DefaultGeometryContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterDefaultGeometry(this);
	}
};

DefaultGeometryContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitDefaultGeometry(this);
	}
};

DefaultGeometryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitDefaultGeometry(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DefaultMaterialContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DefaultMaterialContext.prototype = Object.create(StatementContext.prototype);
DefaultMaterialContext.prototype.constructor = DefaultMaterialContext;

entitiesParser.DefaultMaterialContext = DefaultMaterialContext;

DefaultMaterialContext.prototype.material = function() {
    return this.getTypedRuleContext(MaterialContext,0);
};
DefaultMaterialContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterDefaultMaterial(this);
	}
};

DefaultMaterialContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitDefaultMaterial(this);
	}
};

DefaultMaterialContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitDefaultMaterial(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DefaultColorContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DefaultColorContext.prototype = Object.create(StatementContext.prototype);
DefaultColorContext.prototype.constructor = DefaultColorContext;

entitiesParser.DefaultColorContext = DefaultColorContext;

DefaultColorContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};
DefaultColorContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterDefaultColor(this);
	}
};

DefaultColorContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitDefaultColor(this);
	}
};

DefaultColorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitDefaultColor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddObject3dContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddObject3dContext.prototype = Object.create(StatementContext.prototype);
AddObject3dContext.prototype.constructor = AddObject3dContext;

entitiesParser.AddObject3dContext = AddObject3dContext;

AddObject3dContext.prototype.object3d = function() {
    return this.getTypedRuleContext(Object3dContext,0);
};
AddObject3dContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterAddObject3d(this);
	}
};

AddObject3dContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitAddObject3d(this);
	}
};

AddObject3dContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitAddObject3d(this);
    } else {
        return visitor.visitChildren(this);
    }
};



entitiesParser.StatementContext = StatementContext;

entitiesParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, entitiesParser.RULE_statement);
    try {
        this.state = 33;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            localctx = new DefaultGeometryContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 26;
            this.match(entitiesParser.T__0);
            this.state = 27;
            this.geometry();
            break;

        case 2:
            localctx = new DefaultMaterialContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 28;
            this.match(entitiesParser.T__0);
            this.state = 29;
            this.material();
            break;

        case 3:
            localctx = new DefaultColorContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 30;
            this.match(entitiesParser.T__0);
            this.state = 31;
            this.color();
            break;

        case 4:
            localctx = new AddObject3dContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 32;
            this.object3d(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Object3dContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = entitiesParser.RULE_object3d;
    return this;
}

Object3dContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Object3dContext.prototype.constructor = Object3dContext;


 
Object3dContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function MeshContext(parser, ctx) {
	Object3dContext.call(this, parser);
    Object3dContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MeshContext.prototype = Object.create(Object3dContext.prototype);
MeshContext.prototype.constructor = MeshContext;

entitiesParser.MeshContext = MeshContext;

MeshContext.prototype.geometry = function() {
    return this.getTypedRuleContext(GeometryContext,0);
};

MeshContext.prototype.material = function() {
    return this.getTypedRuleContext(MaterialContext,0);
};
MeshContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterMesh(this);
	}
};

MeshContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitMesh(this);
	}
};

MeshContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitMesh(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TranslateContext(parser, ctx) {
	Object3dContext.call(this, parser);
    Object3dContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TranslateContext.prototype = Object.create(Object3dContext.prototype);
TranslateContext.prototype.constructor = TranslateContext;

entitiesParser.TranslateContext = TranslateContext;

TranslateContext.prototype.object3d = function() {
    return this.getTypedRuleContext(Object3dContext,0);
};

TranslateContext.prototype.vector3d = function() {
    return this.getTypedRuleContext(Vector3dContext,0);
};
TranslateContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterTranslate(this);
	}
};

TranslateContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitTranslate(this);
	}
};

TranslateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitTranslate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GroupContext(parser, ctx) {
	Object3dContext.call(this, parser);
    Object3dContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GroupContext.prototype = Object.create(Object3dContext.prototype);
GroupContext.prototype.constructor = GroupContext;

entitiesParser.GroupContext = GroupContext;

GroupContext.prototype.object3d = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Object3dContext);
    } else {
        return this.getTypedRuleContext(Object3dContext,i);
    }
};
GroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterGroup(this);
	}
};

GroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitGroup(this);
	}
};

GroupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitGroup(this);
    } else {
        return visitor.visitChildren(this);
    }
};



entitiesParser.prototype.object3d = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Object3dContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, entitiesParser.RULE_object3d, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case entitiesParser.T__1:
            localctx = new GroupContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 36;
            this.match(entitiesParser.T__1);
            this.state = 38; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 37;
            		this.object3d(0);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 40; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;
        case entitiesParser.T__2:
            localctx = new MeshContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 42;
            this.match(entitiesParser.T__2);
            this.state = 43;
            this.geometry();
            this.state = 45;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
            if(la_===1) {
                this.state = 44;
                this.material();

            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 54;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new TranslateContext(this, new Object3dContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, entitiesParser.RULE_object3d);
                this.state = 49;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 50;
                this.match(entitiesParser.T__3);
                this.state = 51;
                this.vector3d(); 
            }
            this.state = 56;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function GeometryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = entitiesParser.RULE_geometry;
    return this;
}

GeometryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GeometryContext.prototype.constructor = GeometryContext;


 
GeometryContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function SphereContext(parser, ctx) {
	GeometryContext.call(this, parser);
    GeometryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SphereContext.prototype = Object.create(GeometryContext.prototype);
SphereContext.prototype.constructor = SphereContext;

entitiesParser.SphereContext = SphereContext;

SphereContext.prototype.radius = function() {
    return this.getTypedRuleContext(RadiusContext,0);
};
SphereContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterSphere(this);
	}
};

SphereContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitSphere(this);
	}
};

SphereContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitSphere(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoxContext(parser, ctx) {
	GeometryContext.call(this, parser);
    GeometryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoxContext.prototype = Object.create(GeometryContext.prototype);
BoxContext.prototype.constructor = BoxContext;

entitiesParser.BoxContext = BoxContext;

BoxContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterBox(this);
	}
};

BoxContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitBox(this);
	}
};

BoxContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitBox(this);
    } else {
        return visitor.visitChildren(this);
    }
};



entitiesParser.GeometryContext = GeometryContext;

entitiesParser.prototype.geometry = function() {

    var localctx = new GeometryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, entitiesParser.RULE_geometry);
    try {
        this.state = 62;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case entitiesParser.T__4:
            localctx = new BoxContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 57;
            this.match(entitiesParser.T__4);
            break;
        case entitiesParser.T__5:
            localctx = new SphereContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 58;
            this.match(entitiesParser.T__5);
            this.state = 60;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
            if(la_===1) {
                this.state = 59;
                this.radius();

            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RadiusContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = entitiesParser.RULE_radius;
    return this;
}

RadiusContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RadiusContext.prototype.constructor = RadiusContext;

RadiusContext.prototype.SIGNED_INT = function() {
    return this.getToken(entitiesParser.SIGNED_INT, 0);
};

RadiusContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterRadius(this);
	}
};

RadiusContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitRadius(this);
	}
};

RadiusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitRadius(this);
    } else {
        return visitor.visitChildren(this);
    }
};




entitiesParser.RadiusContext = RadiusContext;

entitiesParser.prototype.radius = function() {

    var localctx = new RadiusContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, entitiesParser.RULE_radius);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.match(entitiesParser.T__6);
        this.state = 66;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===entitiesParser.T__7) {
            this.state = 65;
            this.match(entitiesParser.T__7);
        }

        this.state = 68;
        this.match(entitiesParser.SIGNED_INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MaterialContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = entitiesParser.RULE_material;
    return this;
}

MaterialContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MaterialContext.prototype.constructor = MaterialContext;


 
MaterialContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function LambertContext(parser, ctx) {
	MaterialContext.call(this, parser);
    MaterialContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LambertContext.prototype = Object.create(MaterialContext.prototype);
LambertContext.prototype.constructor = LambertContext;

entitiesParser.LambertContext = LambertContext;

LambertContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};
LambertContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterLambert(this);
	}
};

LambertContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitLambert(this);
	}
};

LambertContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitLambert(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ToonContext(parser, ctx) {
	MaterialContext.call(this, parser);
    MaterialContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ToonContext.prototype = Object.create(MaterialContext.prototype);
ToonContext.prototype.constructor = ToonContext;

entitiesParser.ToonContext = ToonContext;

ToonContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};
ToonContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterToon(this);
	}
};

ToonContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitToon(this);
	}
};

ToonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitToon(this);
    } else {
        return visitor.visitChildren(this);
    }
};



entitiesParser.MaterialContext = MaterialContext;

entitiesParser.prototype.material = function() {

    var localctx = new MaterialContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, entitiesParser.RULE_material);
    try {
        this.state = 78;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case entitiesParser.T__8:
            localctx = new LambertContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 70;
            this.match(entitiesParser.T__8);
            this.state = 72;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
            if(la_===1) {
                this.state = 71;
                this.color();

            }
            break;
        case entitiesParser.T__9:
            localctx = new ToonContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 74;
            this.match(entitiesParser.T__9);
            this.state = 76;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
            if(la_===1) {
                this.state = 75;
                this.color();

            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = entitiesParser.RULE_color;
    return this;
}

ColorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColorContext.prototype.constructor = ColorContext;

ColorContext.prototype.colorValue = function() {
    return this.getTypedRuleContext(ColorValueContext,0);
};

ColorContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterColor(this);
	}
};

ColorContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitColor(this);
	}
};

ColorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitColor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




entitiesParser.ColorContext = ColorContext;

entitiesParser.prototype.color = function() {

    var localctx = new ColorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, entitiesParser.RULE_color);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this.match(entitiesParser.T__10);
        this.state = 82;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===entitiesParser.T__7) {
            this.state = 81;
            this.match(entitiesParser.T__7);
        }

        this.state = 84;
        this.colorValue();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColorValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = entitiesParser.RULE_colorValue;
    return this;
}

ColorValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColorValueContext.prototype.constructor = ColorValueContext;


 
ColorValueContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function RgbColorContext(parser, ctx) {
	ColorValueContext.call(this, parser);
    ColorValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RgbColorContext.prototype = Object.create(ColorValueContext.prototype);
RgbColorContext.prototype.constructor = RgbColorContext;

entitiesParser.RgbColorContext = RgbColorContext;

RgbColorContext.prototype.rgb = function() {
    return this.getTypedRuleContext(RgbContext,0);
};
RgbColorContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterRgbColor(this);
	}
};

RgbColorContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitRgbColor(this);
	}
};

RgbColorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitRgbColor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function HexColorContext(parser, ctx) {
	ColorValueContext.call(this, parser);
    ColorValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

HexColorContext.prototype = Object.create(ColorValueContext.prototype);
HexColorContext.prototype.constructor = HexColorContext;

entitiesParser.HexColorContext = HexColorContext;

HexColorContext.prototype.HEX = function() {
    return this.getToken(entitiesParser.HEX, 0);
};
HexColorContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterHexColor(this);
	}
};

HexColorContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitHexColor(this);
	}
};

HexColorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitHexColor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function HexTripletColorContext(parser, ctx) {
	ColorValueContext.call(this, parser);
    ColorValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

HexTripletColorContext.prototype = Object.create(ColorValueContext.prototype);
HexTripletColorContext.prototype.constructor = HexTripletColorContext;

entitiesParser.HexTripletColorContext = HexTripletColorContext;

HexTripletColorContext.prototype.SHORT_HEX_TRIPLET = function() {
    return this.getToken(entitiesParser.SHORT_HEX_TRIPLET, 0);
};

HexTripletColorContext.prototype.LONG_HEX_TRIPLET = function() {
    return this.getToken(entitiesParser.LONG_HEX_TRIPLET, 0);
};
HexTripletColorContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterHexTripletColor(this);
	}
};

HexTripletColorContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitHexTripletColor(this);
	}
};

HexTripletColorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitHexTripletColor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IntColorContext(parser, ctx) {
	ColorValueContext.call(this, parser);
    ColorValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntColorContext.prototype = Object.create(ColorValueContext.prototype);
IntColorContext.prototype.constructor = IntColorContext;

entitiesParser.IntColorContext = IntColorContext;

IntColorContext.prototype.INT = function() {
    return this.getToken(entitiesParser.INT, 0);
};
IntColorContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterIntColor(this);
	}
};

IntColorContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitIntColor(this);
	}
};

IntColorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitIntColor(this);
    } else {
        return visitor.visitChildren(this);
    }
};



entitiesParser.ColorValueContext = ColorValueContext;

entitiesParser.prototype.colorValue = function() {

    var localctx = new ColorValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, entitiesParser.RULE_colorValue);
    try {
        this.state = 91;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            localctx = new HexColorContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 86;
            this.match(entitiesParser.HEX);
            break;

        case 2:
            localctx = new IntColorContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 87;
            this.match(entitiesParser.INT);
            break;

        case 3:
            localctx = new RgbColorContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 88;
            this.rgb();
            break;

        case 4:
            localctx = new HexTripletColorContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 89;
            this.match(entitiesParser.SHORT_HEX_TRIPLET);
            break;

        case 5:
            localctx = new HexTripletColorContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 90;
            this.match(entitiesParser.LONG_HEX_TRIPLET);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RgbContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = entitiesParser.RULE_rgb;
    return this;
}

RgbContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RgbContext.prototype.constructor = RgbContext;

RgbContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(entitiesParser.INT);
    } else {
        return this.getToken(entitiesParser.INT, i);
    }
};


RgbContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterRgb(this);
	}
};

RgbContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitRgb(this);
	}
};

RgbContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitRgb(this);
    } else {
        return visitor.visitChildren(this);
    }
};




entitiesParser.RgbContext = RgbContext;

entitiesParser.prototype.rgb = function() {

    var localctx = new RgbContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, entitiesParser.RULE_rgb);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.match(entitiesParser.INT);
        this.state = 94;
        this.match(entitiesParser.T__11);
        this.state = 95;
        this.match(entitiesParser.INT);
        this.state = 96;
        this.match(entitiesParser.T__11);
        this.state = 97;
        this.match(entitiesParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Vector3dContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = entitiesParser.RULE_vector3d;
    return this;
}

Vector3dContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Vector3dContext.prototype.constructor = Vector3dContext;

Vector3dContext.prototype.SIGNED_INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(entitiesParser.SIGNED_INT);
    } else {
        return this.getToken(entitiesParser.SIGNED_INT, i);
    }
};


Vector3dContext.prototype.enterRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.enterVector3d(this);
	}
};

Vector3dContext.prototype.exitRule = function(listener) {
    if(listener instanceof entitiesListener ) {
        listener.exitVector3d(this);
	}
};

Vector3dContext.prototype.accept = function(visitor) {
    if ( visitor instanceof entitiesVisitor ) {
        return visitor.visitVector3d(this);
    } else {
        return visitor.visitChildren(this);
    }
};




entitiesParser.Vector3dContext = Vector3dContext;

entitiesParser.prototype.vector3d = function() {

    var localctx = new Vector3dContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, entitiesParser.RULE_vector3d);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.match(entitiesParser.SIGNED_INT);
        this.state = 100;
        this.match(entitiesParser.T__11);
        this.state = 101;
        this.match(entitiesParser.SIGNED_INT);
        this.state = 102;
        this.match(entitiesParser.T__11);
        this.state = 103;
        this.match(entitiesParser.SIGNED_INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


entitiesParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.object3d_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

entitiesParser.prototype.object3d_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.entitiesParser = entitiesParser;

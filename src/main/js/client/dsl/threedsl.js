var antlr4 = require("antlr4");
import * as entitiesLexer from "./entitiesLexer";
import * as entitiesParser from "./entitiesParser";

var input = "hello there";
var chars = new antlr4.InputStream(input);
var lexer = new entitiesLexer.entitiesLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new entitiesParser.entitiesParser(tokens);
parser.buildParseTrees = true;
var tree = parser.r();

console.log(tree);


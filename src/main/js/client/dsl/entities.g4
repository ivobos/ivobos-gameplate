// Define a grammar called Hello
grammar entities;
program  : statement*;
statement :
     'default' geometry     # defaultGeometry
     | 'default' material   # defaultMaterial
     | 'default' color      # defaultColor
     | object3d             # addObject3d
     ;
object3d :
    'Group' object3d+                  # group
    | 'Mesh' geometry material?        # mesh
    | object3d 'translate' vector3d    # translate
    ;
geometry :
    'Box'               # box
    | 'Sphere' radius?  # sphere
    ;
radius : 'radius' '='? SIGNED_INT;
material :
    'Lambert' color?    # lambert
    | 'Toon' color?     # toon
    ;
color : 'Color' '='? colorValue;
colorValue: HEX                     # hexColor
            | INT                   # intColor
            | rgb                   # rgbColor
            | SHORT_HEX_TRIPLET     # hexTripletColor
            | LONG_HEX_TRIPLET      # hexTripletColor
            ;
rgb: INT ',' INT ',' INT ;
vector3d : SIGNED_INT ','  SIGNED_INT ','  SIGNED_INT;
SHORT_HEX_TRIPLET: '#'[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F] ;
LONG_HEX_TRIPLET: '#'[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F] ;
HEX : '0x'[0-9a-fA-F]+;
SIGNED_INT: [-]?[0-9]+;
INT: [0-9]+;
WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines


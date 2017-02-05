import * as THREE from 'three'


export function create(recipeString) {
    var recipeArray = recipeString.split("");
    return createGroupOrObject3d(recipeArray);
}

function createGroupOrObject3d(recipe) {
    var item = recipe.shift();
    if (item == 'g') {
        return createGroup(recipe);
    } else {
        recipe.unshift(item);
        var object = createObject3d(recipe);
        if (object) return object;
        else return new THREE.AxisHelper(5);
    }
}

function createGroup(recipe) {
    var group = new THREE.Group();
    do {
        var item = recipe.shift();
        if (item) {
            recipe.unshift(item);
            var object = createObject3d(recipe);
            if (object) {
                applyObjectModifiers(recipe, object);
                group.add(object);
            }
            else  item = undefined; // couldnt get another object3d so lets break out
        }
    } while (item != undefined);
    if (group.children.length > 0) return group;
    else return new THREE.AxisHelper(5)
}

function applyObjectModifiers(recipe, object) {
    var xoffset = getSingleDigitSignedInteger(recipe, -9, 9);
    if (xoffset) object.position.x += xoffset;
    var yoffset = getSingleDigitSignedInteger(recipe, -9, 9);
    if (yoffset) object.position.y += yoffset;
    var zoffset = getSingleDigitSignedInteger(recipe, -9, 9);
    if (zoffset) object.position.z += zoffset;
}

function getSingleDigitSignedInteger(recipe, min, max) {
    var item = recipe.shift();
    if (!item) return undefined;
    if (item != '+' && item != '-') {
        recipe.unshift(item);
        return undefined;
    }
    var value = (item == '+' ? 1 : -1);
    var item = recipe.shift();
    if (!item) return undefined;
    if (item.charCodeAt() < '0'.charCodeAt() || item.charCodeAt() > '9'.charCodeAt()) {
        recipe.unshift(item);
        return undefined;
    }
    value = value * (item.charCodeAt() - '0'.charCodeAt());
    return value;
}

function createObject3d(recipe) {
    var item = recipe.shift();
    switch(item) {
        case 'm':
            return createMesh(recipe);
        default:
            return undefined;
    }
}

function createMesh(recipe) {
    var geometry = createGeometry(recipe);
    var material = createMeshMaterial(recipe);
    return new THREE.Mesh(geometry, material);
}

function createGeometry(recipe) {
    var item = recipe.shift();
    switch(item) {
        case 'b':
            return createBox(recipe);
        case 's':
            return createSphere(recipe);
        default:
            if (item) recipe.unshift(item);
            return new THREE.BoxGeometry(1, 1, 1);
    }
}

function createMeshMaterial(recipe) {
    var item = recipe.shift();
    switch(item) {
        case 'l':
            return createMeshLambertMaterial(recipe);
        case 't':
            return createMeshToonMaterial(recipe);
        case 's':
            return createMeshStandardMaterial(recipe);
        default:
            if (item) recipe.unshift(item);
            return new THREE.MeshBasicMaterial({color:0x888888});
    }
}

function createBox(recipe) {
    return new THREE.BoxBufferGeometry(5, 5, 5);
}

function createSphere(recipe) {
    var radius = 5;
    var item = recipe.shift();
    if (item) {
        var num = item.charCodeAt() - 48;
        if (num > 0 && num < 10) {
            radius = num;
        } else {
            recipe.unshift(item);
        }
    }
    return new THREE.SphereBufferGeometry(radius, 16, 12);
}

function createMeshLambertMaterial(recipe) {
    var parameters = getMeshMaterialProperties(recipe);
    return new THREE.MeshLambertMaterial(parameters);
}

function createMeshStandardMaterial(recipe) {
    var parameters = getMeshMaterialProperties(recipe);
    return new THREE.MeshStandardMaterial(parameters);
}

function getMeshMaterialProperties(recipe) {
    var parameters = {
        color: 0xf33a3f,
        //shading: THREE.SmoothShading
    };
    do {
        var item = recipe.shift();
        switch (item) {
            case 'c':
                parameters['color'] =
                    createColor(recipe);
                break;
            default:
                if (item) recipe.unshift(item);
                item = undefined;
        }
    } while (item != undefined);
    return parameters;
}

function createMeshToonMaterial(recipe) {
    var parameters = getMeshMaterialProperties(recipe);
    return new THREE.MeshToonMaterial(parameters);
}

// assume recipe format 'rgb' where r/g/b is 0-f, defaults of 888
function createColor(recipe) {
    var r = getColorComponent(recipe);
    var g = getColorComponent(recipe);
    var b = getColorComponent(recipe);
    var hexTriplet = r * 0x110000 + g * 0x1100 + b * 0x11;
    return new THREE.Color(hexTriplet);
}

function getColorComponent(recipe) {
    var item = recipe.shift();
    if (item) {
        var code = item.charCodeAt();
        if (code >= '0'.charCodeAt() && code <= '9'.charCodeAt()) return code - '0'.charCodeAt();
        if (code >= 'a'.charCodeAt() && code <= 'f'.charCodeAt()) return 10 + code - 'a'.charCodeAt();
        recipe.unshift(item);
    }
    return 8;
}

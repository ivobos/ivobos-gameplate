var ambientLight = new THREE.AmbientLight( 0x808080 );
var directionalLight = new THREE.DirectionalLight( 0xffffff );
directionalLight.position.set( 0, 0.75, -2 ).normalize();

export function getRenderData() {
    return [ambientLight, directionalLight];
}


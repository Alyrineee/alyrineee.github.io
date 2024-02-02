var scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');
scene.fog = new THREE.Fog('0x76456c',0.1,8);
var loader = new THREE.TextureLoader();
// Объект
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};
// init

const camera = new THREE.PerspectiveCamera( 70, sizes.width / sizes.height, 0.01, 10 );
camera.position.z = 1;


const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( sizes.width, sizes.height );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

// animation

function animation( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}

window.addEventListener('resize', () => {
	sizes.width  = window.innerWidth;
	sizes.height  = window.innerHeight;
	camera.aspect = sizes.width/sizes.height;
	camera.updateProjectionMatrix();
	renderer.setSize(sizes.width, sizes.height);
	renderer.render(scene, camera);
});

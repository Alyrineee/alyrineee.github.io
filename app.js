const scene = new THREE.Scene();
// Объект
const geometry = new THREE.BoxGeometry(1, 1, 1); 
const material = new THREE.MeshBasicMaterial({ color: 'purple' }); 
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
// Камера
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3; 
camera.position.y = 1;
scene.add(camera);
const canvas = document.querySelector('.canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

window.addEventListener('resize', () => {
	sizes.width  = window.innerWidth;
	sizes.height  = window.innerHeight;
	camera.aspect = sizes.width/sizes.height;
	camera.updateProjectionMatrix();
	renderer.setSize(sizes.width, sizes.height);
	renderer.render(scene, camera);
});

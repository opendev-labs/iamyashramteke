<template>
  <div class="hero-live-bg fixed inset-0 z-0">
    <canvas ref="canvasRef"></canvas>
    <div class="overlay-gradient absolute inset-0 pointer-events-none"></div>
  </div>
</template>

<script setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ref, onMounted, onUnmounted } from 'vue'; // Ensure ref, onMounted, onUnmounted are imported

const canvasRef = ref(null);
let scene, camera, renderer, sphere, starField, controls;

const initThree = () => {
  if (!canvasRef.value) return;

  // Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050509);

  // Camera setup
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 5);

  // Renderer setup
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;

  // Lighting
  const ambientLight = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  // Milky Way Environment Texture
  const textureLoader = new THREE.CubeTextureLoader();
  const envTexture = textureLoader.load([
    "https://threejs.org/examples/textures/cube/MilkyWay/dark-s_px.jpg",
    "https://threejs.org/examples/textures/cube/MilkyWay/dark-s_nx.jpg",
    "https://threejs.org/examples/textures/cube/MilkyWay/dark-s_py.jpg",
    "https://threejs.org/examples/textures/cube/MilkyWay/dark-s_ny.jpg",
    "https://threejs.org/examples/textures/cube/MilkyWay/dark-s_pz.jpg",
    "https://threejs.org/examples/textures/cube/MilkyWay/dark-s_nz.jpg",
  ]);
  scene.background = envTexture;

  // Reflective Sphere
  const sphereGeometry = new THREE.SphereGeometry(1.2, 64, 64);
  const sphereMaterial = new THREE.MeshStandardMaterial({
    envMap: envTexture,
    metalness: 1,
    roughness: 0,
    emissive: 0x00FFFF,
    emissiveIntensity: 0.1
  });

  sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere);

  // Starfield
  const starsGeometry = new THREE.BufferGeometry();
  const starsMaterial = new THREE.PointsMaterial({
    color: 0x00FFFF,
    size: 0.05,
    transparent: true,
    opacity: 0.8
  });

  const stars = [];
  for (let i = 0; i < 2000; i++) {
    const x = (Math.random() - 0.5) * 100;
    const y = (Math.random() - 0.5) * 100;
    const z = (Math.random() - 0.5) * 100;
    stars.push(x, y, z);
  }

  starsGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(stars, 3)
  );

  starField = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(starField);

  animate();
};

const animate = () => {
  if (!renderer) return;
  requestAnimationFrame(animate);

  if (sphere) {
    sphere.rotation.x += 0.002;
    sphere.rotation.y += 0.003;
  }

  if (starField) {
    starField.rotation.y += 0.0005;
  }

  controls.update();
  renderer.render(scene, camera);
};

const handleResize = () => {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

onMounted(() => {
  initThree();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  if (renderer) renderer.dispose();
});
</script>

<style scoped>
canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.overlay-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
  pointer-events: none;
}
</style>

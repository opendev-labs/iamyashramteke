<template>
  <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[var(--background)] transition-colors duration-500">
    <canvas ref="canvasRef" class="w-full h-full opacity-40"></canvas>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)] opacity-60"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref(null);
let ctx = null;
let animationId = null;
let width, height;
const particles = [];
const mouse = { x: -1000, y: -1000, active: false };

const createParticles = () => {
  const quantity = Math.floor((width * height) / 10000);
  for (let i = 0; i < quantity; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.2
    });
  }
};

const drawGrid = () => {
  const gridSize = 40;
  ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--grid-color') || 'rgba(0, 255, 255, 0.05)';
  ctx.lineWidth = 0.5;

  for (let x = 0; x < width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y < height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
};

const accentColor = ref('0, 255, 255');

const updateColors = () => {
  accentColor.value = getComputedStyle(document.documentElement).getPropertyValue('--accent-rgb') || '0, 255, 255';
};

const animate = () => {
  ctx.clearRect(0, 0, width, height);
  
  drawGrid();

  const color = accentColor.value;
  const connectionDistance = 100;
  const mouseInfluenceRadius = 200;
  
  // Draw connections first (behind particles)
  for (let i = 0; i < particles.length; i++) {
    const p1 = particles[i];
    
    // Check connection with mouse
    const mdx = mouse.x - p1.x;
    const mdy = mouse.y - p1.y;
    const mDistSq = mdx * mdx + mdy * mdy;
    const nearMouse = mDistSq < mouseInfluenceRadius * mouseInfluenceRadius;

    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const distSq = dx * dx + dy * dy;

      if (distSq < connectionDistance * connectionDistance) {
        const dist = Math.sqrt(distSq);
        let opacity = (1 - dist / connectionDistance) * 0.15;
        
        // Intensify near mouse
        if (nearMouse) {
          const mDist = Math.sqrt(mDistSq);
          opacity *= (1 + (1 - mDist / mouseInfluenceRadius) * 2);
        }

        ctx.strokeStyle = `rgba(${color}, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  }

  // Draw particles
  particles.forEach(p => {
    // Movement
    p.x += p.speedX;
    p.y += p.speedY;

    // Boundary check
    if (p.x < 0) p.x = width;
    if (p.x > width) p.x = 0;
    if (p.y < 0) p.y = height;
    if (p.y > height) p.y = 0;

    // Mouse Interaction
    const dx = mouse.x - p.x;
    const dy = mouse.y - p.y;
    const distanceSq = dx * dx + dy * dy;
    
    let drawAlpha = p.alpha;
    if (distanceSq < 22500) { // 150 * 150
      const distance = Math.sqrt(distanceSq);
      drawAlpha = Math.min(1, p.alpha + (1 - distance / 150));
      // Subtle push
      p.x -= dx * 0.01;
      p.y -= dy * 0.01;
    }

    ctx.fillStyle = `rgba(${color}, ${drawAlpha})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });

  animationId = requestAnimationFrame(animate);
};

const handleMouseMove = (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

const handleResize = () => {
  width = canvasRef.value.width = window.innerWidth;
  height = canvasRef.value.height = window.innerHeight;
  particles.length = 0;
  createParticles();
  updateColors();
};

onMounted(() => {
  ctx = canvasRef.value.getContext('2d');
  handleResize();
  updateColors();
  animate();
  window.addEventListener('resize', handleResize);
  window.addEventListener('mousemove', handleMouseMove);
  
  // Update colors when theme changes
  const observer = new MutationObserver(updateColors);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style scoped>
canvas {
  filter: blur(0.5px);
}
</style>

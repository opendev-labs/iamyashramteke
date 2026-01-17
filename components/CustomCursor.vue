<template>
  <div 
    ref="cursorRef" 
    class="custom-cursor fixed pointer-events-none z-[99999] opacity-0 pointer-hidden md:block"
    :class="{ 'is-hovering': isHovering }"
    aria-hidden="true"
  >
    <div class="cursor-wrapper relative">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-icon -translate-x-1/2 -translate-y-1/2 transition-transform duration-300">
        <path 
          d="M4.26 4.26l15.48 7.74-7.74 1.94-1.94 7.74L4.26 4.26z" 
          stroke="var(--accent)"
          stroke-width="1.5"
          stroke-linejoin="round"
          class="drop-shadow-[0_0_8px_var(--glow)]"
        />
      </svg>
      <div class="cursor-dot absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[var(--accent)] rounded-full opacity-0 transition-opacity"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const cursorRef = ref(null);
const isHovering = ref(false);

const mouse = { x: 0, y: 0 };
const pos = { x: 0, y: 0 };
const ratio = 0.65; // Responsiveness factor (higher = faster, 0.5-0.8 is snappy)
let animationId = null;

const updatePosition = () => {
  // Linear Interpolation (LERP)
  pos.x += (mouse.x - pos.x) * ratio;
  pos.y += (mouse.y - pos.y) * ratio;

  if (cursorRef.value) {
    cursorRef.value.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
  }
  
  animationId = requestAnimationFrame(updatePosition);
};

const handleMouseMove = (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  
  if (cursorRef.value && cursorRef.value.style.opacity === '0') {
    cursorRef.value.style.opacity = '1';
  }

  // Check if hovering over interactive element
  const target = e.target;
  const isInteractive = target.closest('a, button, [role="button"], input, select, textarea');
  isHovering.value = !!isInteractive;
};

const handleMouseLeaveWindow = () => {
  if (cursorRef.value) cursorRef.value.style.opacity = '0';
};

const handleMouseEnterWindow = () => {
  if (cursorRef.value) cursorRef.value.style.opacity = '1';
};

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
  document.documentElement.addEventListener('mouseleave', handleMouseLeaveWindow);
  document.documentElement.addEventListener('mouseenter', handleMouseEnterWindow);
  
  // Start the animation loop
  animationId = requestAnimationFrame(updatePosition);
  
  // Initial visibility after a short delay
  setTimeout(() => {
    if (cursorRef.value) cursorRef.value.style.opacity = '1';
  }, 100);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.documentElement.removeEventListener('mouseleave', handleMouseLeaveWindow);
  document.documentElement.removeEventListener('mouseenter', handleMouseEnterWindow);
  if (animationId) cancelAnimationFrame(animationId);
});
</script>

<style scoped>
.custom-cursor {
  will-change: transform, opacity;
  transition: opacity 0.3s ease;
}

.cursor-icon {
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), scale 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.custom-cursor.is-hovering .cursor-icon {
  transform: translate(-50%, -50%) scale(1.5) rotate(15deg);
  filter: brightness(1.2);
}

@media (pointer: coarse) {
  .custom-cursor {
    display: none;
  }
}
</style>

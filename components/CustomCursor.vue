<template>
  <div 
    ref="cursorRef" 
    class="custom-cursor fixed pointer-events-none z-[99999] opacity-0 pointer-hidden md:block"
    :class="{ 'is-hovering': isHovering }"
    aria-hidden="true"
  >
    <div class="cursor-wrapper relative">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-icon -translate-x-1/2 -translate-y-1/2">
        <path 
          d="M4.26 4.26l15.48 7.74-7.74 1.94-1.94 7.74L4.26 4.26z" 
          stroke="var(--accent)"
          stroke-width="2"
          stroke-linejoin="round"
          fill="rgba(0, 255, 255, 0.05)"
          class="cursor-path"
        />
      </svg>
      <div class="cursor-dot absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[var(--accent)] rounded-full opacity-0"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const cursorRef = ref(null);
const isHovering = ref(false);

const mouse = { x: 0, y: 0 };
const pos = { x: 0, y: 0 };
const ratio = 0.95; // Ultra-high responsiveness (zero-lag tracking, buttery smooth)
let animationId = null;

const updatePosition = () => {
  // Snappy LERP to filter high-frequency mouse jitter while maintaining real-time alignment
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

  // Optimize interactive elements query check
  const target = e.target;
  const isInteractive = target && (
    target.closest('a, button, [role="button"], input, select, textarea, .video-wrapper')
  );
  isHovering.value = !!isInteractive;
};

const handleMouseLeaveWindow = () => {
  if (cursorRef.value) cursorRef.value.style.opacity = '0';
};

const handleMouseEnterWindow = () => {
  if (cursorRef.value) cursorRef.value.style.opacity = '1';
};

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove, { passive: true });
  document.documentElement.addEventListener('mouseleave', handleMouseLeaveWindow);
  document.documentElement.addEventListener('mouseenter', handleMouseEnterWindow);
  
  animationId = requestAnimationFrame(updatePosition);
  
  setTimeout(() => {
    if (cursorRef.value) cursorRef.value.style.opacity = '1';
  }, 50);
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
  transition: opacity 0.15s ease-out;
}

.cursor-icon {
  /* Snappy cubic-bezier transition for scale to prevent sluggish scale feel */
  transition: transform 0.15s cubic-bezier(0.25, 1, 0.5, 1);
  will-change: transform;
}

.cursor-path {
  transition: stroke 0.15s ease, fill 0.15s ease;
}

.custom-cursor.is-hovering .cursor-icon {
  /* Reduced scale and rotation angle for instant responsiveness, and change color */
  transform: translate(-50%, -50%) scale(1.15) rotate(10deg);
}

.custom-cursor.is-hovering .cursor-path {
  stroke: #ffffff;
  fill: rgba(255, 255, 255, 0.1);
}

@media (pointer: coarse) {
  .custom-cursor {
    display: none;
  }
}
</style>

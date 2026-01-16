<template>
  <div 
    class="custom-cursor fixed pointer-events-none z-[99999] hidden md:block"
    :style="{ 
      transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      opacity: visible ? 1 : 0
    }"
  >
    <svg class="w-8 h-8 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 28 28">
      <circle 
        cx="14" 
        cy="14" 
        r="4" 
        fill="var(--cursor-color)" 
        :style="{ filter: `drop-shadow(0 0 6px var(--cursor-shadow-color))` }"
      />
      <circle 
        cx="14" 
        cy="14" 
        r="10" 
        fill="none" 
        stroke="var(--cursor-color)" 
        stroke-width="1"
        class="opacity-20"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const pos = ref({ x: -100, y: -100 });
const visible = ref(false);

const updatePos = (e) => {
  pos.value = { x: e.clientX, y: e.clientY };
  if (!visible.value) visible.value = true;
};

const handleMouseEnter = () => visible.value = true;
const handleMouseLeave = () => visible.value = false;

onMounted(() => {
  window.addEventListener('mousemove', updatePos);
  document.addEventListener('mouseenter', handleMouseEnter);
  document.addEventListener('mouseleave', handleMouseLeave);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updatePos);
  document.removeEventListener('mouseenter', handleMouseEnter);
  document.removeEventListener('mouseleave', handleMouseLeave);
});
</script>

<style scoped>
.custom-cursor {
  will-change: transform, opacity;
  transition: opacity 0.3s ease;
}

@media (pointer: coarse) {
  .custom-cursor {
    display: none;
  }
}
</style>

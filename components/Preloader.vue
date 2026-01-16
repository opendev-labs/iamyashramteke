<template>
  <Transition name="fade-preloader">
    <div v-if="loading" id="preloader">
      <div class="triangle-loader">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Loading animation">
          <path class="triangle-path" d="M 50,15 L 85,75 L 15,75 Z" />
        </svg>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const loading = ref(true);

onMounted(() => {
  // Ensure we hide after initial load
  setTimeout(() => {
    loading.value = false;
  }, 1500);
});
</script>

<style scoped>
#preloader {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.triangle-loader {
  width: 5rem;
  height: 5rem;
  animation: pulse-loader 2.5s infinite ease-in-out;
}

.triangle-loader .triangle-path {
  stroke: var(--text-primary);
  stroke-width: 6;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 210;
  stroke-dashoffset: 210;
  animation: draw-triangle 2.5s infinite ease-in-out;
  transition: stroke 0.3s ease;
}

@keyframes draw-triangle {
  30%, 70% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 210; }
}

@keyframes pulse-loader {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px var(--glow)); }
  50% { transform: scale(1.1); filter: drop-shadow(0 0 15px var(--glow)); }
}

.fade-preloader-leave-active {
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-preloader-leave-to {
  opacity: 0;
}
</style>

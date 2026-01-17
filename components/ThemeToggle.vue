<template>
  <button 
    ref="toggleRef"
    class="theme-toggle group relative" 
    @click="toggleTheme" 
    :title="`Switch to ${isDark ? 'light' : 'dark'} mode`"
  >
    <div class="relative z-10 w-10 h-10 flex items-center justify-center rounded-lg border border-[var(--border)] bg-black/40 group-hover:border-[var(--accent)]/40 group-hover:bg-[var(--accent)]/5 transition-all duration-300">
      <Transition name="fade-icon" mode="out-in">
        <svg v-if="isDark" key="sun" class="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
        <svg v-else key="moon" class="w-5 h-5 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </Transition>
    </div>
    <div class="absolute inset-0 bg-[var(--accent)]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
  </button>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';

const colorMode = useColorMode();
const toggleRef = ref(null);

const isDark = computed(() => colorMode.value === 'dark');

const toggleTheme = (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  );

  // If the browser doesn't support View Transitions, or if user prefers reduced motion
  if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    colorMode.preference = isDark.value ? 'light' : 'dark';
    return;
  }

  // Set the transition type on the document element so CSS knows to yield control
  document.documentElement.setAttribute('data-transition-type', 'theme-toggle');

  const transition = document.startViewTransition(() => {
    colorMode.preference = isDark.value ? 'light' : 'dark';
  });

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];
    document.documentElement.animate(
      {
        clipPath: isDark.value ? clipPath.reverse() : clipPath,
      },
      {
        duration: 400,
        easing: "cubic-bezier(0.25, 0.8, 0.25, 1)", // Snappy but smooth
        pseudoElement: isDark.value ? "::view-transition-old(root)" : "::view-transition-new(root)",
      }
    );
  });

  transition.finished.finally(() => {
    document.documentElement.removeAttribute('data-transition-type');
  });
};
</script>

<style scoped>
.fade-icon-enter-active,
.fade-icon-leave-active {
  transition: all 0.3s ease;
}
.fade-icon-enter-from,
.fade-icon-leave-to {
  opacity: 0;
  transform: rotate(45deg) scale(0.5);
}
</style>

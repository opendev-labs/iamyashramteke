<template>
  <div 
    class="relative bg-gradient-to-br from-[var(--surface)] to-transparent rounded-xl flex flex-col border border-[var(--border)] transition-all duration-300 ease-out hover:border-[var(--accent)]/70 hover:-translate-y-2 hover:shadow-[0_0_25px_var(--glow)] group overflow-hidden"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @touchstart="handleTouch"
    @touchmove="handleTouch"
    @touchend="handleTouchEnd"
  >
    <!-- Glow Effect Overlay -->
    <div class="absolute inset-0 transition-all duration-300 pointer-events-none" :style="glowStyle"></div>

    <div class="relative z-10 flex flex-col flex-grow h-full p-6">
      <div class="flex-grow">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
            {{ title }}
          </h3>
          <div class="flex items-center gap-4 text-[var(--text-secondary)]">
            <a v-if="repoUrl" :href="repoUrl" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--text-primary)] transition-colors">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a v-if="liveUrl" :href="liveUrl" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--text-primary)] transition-colors text-sm font-medium">
              Live URL
            </a>
          </div>
        </div>
        <p class="text-[var(--text-secondary)] mb-6 text-sm leading-relaxed">
          {{ description }}
        </p>
      </div>
      <div class="flex items-end justify-between mt-auto">
        <div class="flex flex-col">
          <span v-if="status" class="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">
            {{ status }}
          </span>
        </div>
        <NuxtLink 
          v-if="slug" 
          :to="`/case-study/${slug}`" 
          class="flex items-center text-sm font-medium text-[var(--accent)] transition-colors duration-300 hover:text-[var(--text-primary)]"
        >
          Case Study
          <svg class="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  title: String,
  slug: String,
  description: String,
  tags: Array,
  repoUrl: String,
  liveUrl: String,
  docsUrl: String,
  version: String
});

const status = computed(() => {
  if (!props.tags || props.tags.length === 0) return null;
  // Look for status-like tags
  const statusTag = props.tags.find(tag => 
    tag.toLowerCase().includes('developed') || 
    tag.toLowerCase().includes('beta') || 
    tag.toLowerCase().includes('active')
  );
  return statusTag || props.tags[0];
});

const glowStyle = ref({});

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  glowStyle.value = {
    background: `radial-gradient(circle at ${x}px ${y}px, var(--glow), transparent 40%)`
  };
};

const handleMouseLeave = () => {
  glowStyle.value = {};
};

const handleTouch = (e) => {
  if (e.touches.length === 0) return;
  const rect = e.currentTarget.getBoundingClientRect();
  const touch = e.touches[0];
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;
  glowStyle.value = {
    background: `radial-gradient(circle at ${x}px ${y}px, var(--glow), transparent 40%)`
  };
};

const handleTouchEnd = () => {
  glowStyle.value = {};
};
</script>

<style scoped>
/* Scoped styles kept minimal, relying on main.css and tailwind-like classes */
</style>

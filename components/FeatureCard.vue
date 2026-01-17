<template>
  <div 
    ref="cardRef"
    class="relative bg-gradient-to-br from-[var(--surface)] to-transparent p-6 rounded-xl border border-[var(--border)] opacity-0 overflow-hidden group transition-all duration-300 ease-out hover:border-[var(--accent)]/70 hover:-translate-y-1 hover:shadow-[0_0_20px_var(--glow)] animate-fade-in"
    :style="{ animationDelay: delay + 'ms' }"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @touchstart="handleTouch"
    @touchmove="handleTouch"
    @touchend="handleTouchEnd"
    @touchcancel="handleTouchEnd"
  >
    <div class="absolute inset-0 transition-all duration-300" :style="glowStyle"></div>
    <div class="relative z-10">
      <div class="flex items-center gap-4 mb-3">
        <Icons :name="icon" class="w-6 h-6 text-[var(--accent)]" />
        <h3 class="text-lg font-bold text-[var(--text-primary)]">{{ title }}</h3>
      </div>
      <p class="text-sm text-[var(--text-secondary)] leading-relaxed">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Icons from './ui/Icons.vue';

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  delay: {
    type: Number,
    default: 0
  }
});

const cardRef = ref(null);
const glowStyle = ref({});

const handleMouseMove = (e) => {
  const card = e.currentTarget;
  if (!card) return;
  const rect = card.getBoundingClientRect();
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
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
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
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

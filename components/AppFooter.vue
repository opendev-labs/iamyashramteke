<template>
  <footer class="relative z-10 py-12 text-center border-t border-[var(--border)] overflow-hidden">
    <div 
      ref="footerContentRef" 
      class="transition-all duration-1000 transform"
      :class="isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <div class="container mx-auto px-4">
        <p class="text-sm text-[var(--text-secondary)]/60 mono tracking-widest">
          Designed & Built by Yash R (<span class="text-[#F97316] font-bold">opendev-labs</span>) © {{ currentYear }}
        </p>
        
        <!-- Subtle Decorative Element -->
        <div class="mt-8 flex justify-center gap-2">
          <div v-for="i in 3" :key="i" class="w-1 h-1 bg-[var(--accent)]/20 rounded-full"></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const footerContentRef = ref(null);
const isRevealed = ref(false);
const currentYear = new Date().getFullYear();

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isRevealed.value = true;
      }
    });
  }, { threshold: 0.1 });

  if (footerContentRef.value) {
    observer.observe(footerContentRef.value);
  }
});
</script>

<style scoped>
footer {
  background: linear-gradient(to bottom, transparent, rgba(var(--accent-rgb), 0.02));
}

.mono {
  font-family: var(--font-mono);
}
</style>

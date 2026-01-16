<template>
  <div class="nextgen-layout">
    <Preloader />
    <CustomCursor />

    <!-- Top Sovereign Bar -->
    <header class="system-bar fixed top-0 w-full z-40 px-4 sm:px-8 py-4 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-[var(--border)] transition-colors duration-500">
      <NuxtLink to="/" class="flex items-center gap-2 group logo-container-glitch">
        <div class="w-8 h-[2px] bg-[var(--accent)] group-hover:w-12 transition-all duration-500 shadow-[0_0_10px_var(--glow)]"></div>
        <span class="mono text-[10px] tracking-widest text-[var(--text-primary)] font-bold uppercase">SOVEREIGN_V.4</span>
      </NuxtLink>
      
      <div class="flex items-center gap-4 sm:gap-6">
        <nav class="hidden sm:flex gap-6">
          <NuxtLink to="/#approach" class="mono text-[9px] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 uppercase tracking-widest">Approach</NuxtLink>
          <NuxtLink to="/#constructs" class="mono text-[9px] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 uppercase tracking-widest">Constructs</NuxtLink>
        </nav>
        
        <ThemeToggle />

        <div class="mono text-[9px] text-[var(--accent)] opacity-60 hidden xs:flex items-center gap-2">
          <span class="w-1 h-1 bg-[var(--accent)] rounded-full animate-pulse"></span>
          {{ currentTime }}
        </div>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <!-- Progress Indicator / Scroll HUD -->
    <div class="fixed left-8 bottom-12 hidden lg:flex flex-col gap-4 opacity-20 select-none">
      <div class="w-[1px] h-24 bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent"></div>
      <div class="mono text-[8px] vertical-text tracking-[0.5em] text-[var(--text-secondary)]">CONTINUUM_PROTOCOL</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentTime = ref('');

onMounted(() => {
  const updateTime = () => {
    const now = new Date();
    currentTime.value = now.toLocaleTimeString('en-US', { hour12: false });
  };
  updateTime();
  setInterval(updateTime, 1000);
});
</script>

<style>
/* Global Logo Glitch from Snippet */
@keyframes glitch-fast {
  0%, 100% { transform: translate(0, 0); color: var(--accent); }
  20% { transform: translate(-2px, 1px); color: #ff00ff; }
  40% { transform: translate(-1px, -1px); color: var(--text-primary); }
  60% { transform: translate(2px, 1px); color: #00ff00; }
  80% { transform: translate(1px, -2px); color: var(--accent); }
}

.logo-container-glitch:hover {
  animation: glitch-fast 0.4s infinite;
}
</style>

<style scoped>
.nextgen-layout {
  min-height: 100vh;
  color: var(--text-primary);
}

.mono {
  font-family: var(--font-mono);
}

.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

main {
  padding-bottom: 2rem;
}

.system-bar {
  /* Subtle shift for light mode visibility */
  border-bottom: 1px solid var(--border);
}
</style>

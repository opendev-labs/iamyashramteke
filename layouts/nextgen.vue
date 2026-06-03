<template>
  <div class="nextgen-layout min-h-screen text-[var(--text-primary)]">
    <Preloader />
    <CustomCursor />
    <QuantumBackground />

    <!-- Dynamic Sovereign Header -->
    <header class="fixed top-0 left-0 w-full z-50 transition-colors duration-500 ease-in-out bg-[var(--background)]/80 backdrop-blur-lg border-b border-[var(--border)]">
      <div class="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex justify-between items-center h-20">
        <!-- Logo / Activate AI Core -->
        <button @click="onLogoClick" class="z-50 logo-container-glitch p-2 flex items-center justify-center" aria-label="Activate AI Core Animation">
          <svg aria-label="Seed of Life Logo" role="img" width="36" height="36" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" xmlns="http://www.w3.org/2000/svg" class="transition-transform duration-300">
            <defs>
              <clipPath id="sol_clip_path">
                <circle cx="50" cy="50" r="50" />
              </clipPath>
            </defs>
            <g clip-path="url(#sol_clip_path)">
              <circle cx="50" cy="50" r="24" />
              <circle cx="50" cy="26" r="24" />
              <circle cx="70.78" cy="40" r="24" />
              <circle cx="70.78" cy="60" r="24" />
              <circle cx="50" cy="74" r="24" />
              <circle cx="29.21" cy="60" r="24" />
              <circle cx="29.21" cy="40" r="24" />
            </g>
          </svg>
        </button>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-4">
          <nav class="flex items-center gap-2 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-1">
            <NuxtLink v-for="link in navLinks" :key="link.label" :to="link.href" @click.prevent="scrollToSection($event, link.href)"
              class="text-sm tracking-wide transition-colors duration-300 px-4 py-2 rounded-lg"
              :class="activeSection === link.href.substring(1) ? 'text-[var(--text-primary)] bg-[var(--accent)]/20 shadow-[inset_0_0_10px_var(--glow)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'">
              {{ link.label }}
            </NuxtLink>
          </nav>
          
          <ThemeToggle />
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden z-50 text-[var(--text-primary)] p-2" @click="isOpen = !isOpen" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path :d="isOpen ? 'M18 6L6 18' : 'M4 6H20'" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="transition-opacity duration-300" :class="isOpen ? 'opacity-0' : 'opacity-100'"/>
            <path :d="isOpen ? 'M6 6L18 18' : 'M4 18H20'" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </header>

    <!-- Mobile Nav Overlay -->
    <div :class="[
      'md:hidden fixed inset-0 bg-[var(--background)]/95 backdrop-blur-xl z-40 transform transition-all duration-500 ease-in-out',
      isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
    ]">
      <nav class="flex flex-col items-center justify-center h-full space-y-10">
        <NuxtLink v-for="link in navLinks" :key="link.label" :to="link.href" @click.prevent="scrollToSection($event, link.href)" 
          class="text-2xl font-light text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
          {{ link.label }}
        </NuxtLink>
      </nav>
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ThemeToggle />
      </div>
    </div>

    <main class="relative z-10 pt-20">
      <slot />
    </main>

    <!-- App Footer -->
    <AppFooter />

    <!-- Progress Indicator / Scroll HUD -->
    <div class="fixed left-8 bottom-12 hidden lg:flex flex-col gap-4 opacity-20 select-none">
      <div class="w-[1px] h-24 bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent"></div>
      <div class="mono text-[8px] vertical-text tracking-[0.5em] text-[var(--text-secondary)]">CONTINUUM_PROTOCOL</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const isOpen = ref(false);
const activeSection = ref('home');

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#approach', label: 'Approach' },
  { href: '#constructs', label: 'Constructs' },
  { href: '#explorations', label: 'Explorations' },
  { href: '#contact', label: 'Connect' },
];

const scrollToSection = (e, href) => {
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    isOpen.value = false;
  }
};

const onLogoClick = () => {
  // Placeholder for AI Core Animation trigger if needed
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Handle body scroll lock
watch(isOpen, (val) => {
  if (val) {
    document.body.classList.add('body-no-scroll');
  } else {
    document.body.classList.remove('body-no-scroll');
  }
});

onMounted(() => {
  // Intersection Observer to track active section
  const observerOptions = {
    root: null,
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, observerOptions);

  navLinks.forEach((link) => {
    const section = document.querySelector(link.href);
    if (section) observer.observe(section);
  });
});
</script>

<style>
.body-no-scroll {
  overflow: hidden;
}

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
</style>

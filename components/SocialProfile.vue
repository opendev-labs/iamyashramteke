<template>
  <section id="contact" class="relative py-20 bg-transparent">
    <div class="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
      <div class="glass-panel p-8 md:p-12 max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        <!-- Connect Section -->
        <div class="flex-1 text-center md:text-left">
          <p class="text-sm tracking-widest text-[var(--accent)] uppercase font-semibold mb-2">Connect</p>
          <h2 class="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">Let's Synchronize.</h2>
          <p class="text-[var(--text-secondary)] text-base leading-relaxed mb-8">
            I am always open to new frequencies of thought and opportunities for collaboration. If my work resonates, or if you have a project that seeks to challenge convention, I invite you to open a channel.
          </p>
          
        </div>

        <!-- Social Links Grid -->
        <div class="w-full md:w-80 flex flex-col gap-4">
          <a v-for="(link, index) in socialLinks" :key="index" :href="link.url" target="_blank" rel="noopener noreferrer" 
             class="group flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-black/40 hover:bg-[var(--accent)]/5 hover:border-[var(--accent)]/40 transition-all duration-300">
            <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-black transition-all duration-300">
              <component :is="link.icon" class="w-5 h-5" />
            </div>
            <div class="flex-grow">
              <div class="text-xs font-bold text-[var(--text-primary)]">{{ link.title }}</div>
              <div class="text-[10px] text-[var(--text-secondary)]">{{ link.subtitle }}</div>
            </div>
            <svg class="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent)] transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7-7 7" />
            </svg>
          </a>
          
          <!-- Official Website moved below socials -->
          <a href="https://opendev-labs.github.io" target="_blank" class="group flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-black/40 hover:bg-[var(--accent)]/5 hover:border-[var(--accent)]/40 transition-all duration-300">
            <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-black transition-all duration-300">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div class="flex-grow">
              <div class="text-xs font-bold text-[var(--text-primary)]">Official Website</div>
              <div class="text-[10px] text-[var(--text-secondary)]">opendev-labs.io</div>
            </div>
            <svg class="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent)] transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Footer Attribution -->
      <div class="mt-20 text-center opacity-30 select-none">
        <p class="text-[10px] uppercase tracking-[0.5em] text-[var(--text-secondary)] font-medium">
          Designed & Built by Yash R (<span class="text-[#F97316] font-bold">opendev-labs</span>) &copy; 2026
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';

const InstagramIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
  h('rect', { x: '2', y: '2', width: '20', height: '20', rx: '5', ry: '5' }),
  h('path', { d: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z' }),
  h('line', { x1: '17.5', y1: '6.5', x2: '17.51', y2: '6.5' })
]);

const socialLinks = [
  {
    title: 'Instagram',
    subtitle: '@esotericintelligence',
    url: 'https://www.instagram.com/esotericintelligence',
    icon: InstagramIcon
  },
  {
    title: 'Instagram',
    subtitle: '@iamyash.io',
    url: 'https://www.instagram.com/iamyash.io',
    icon: InstagramIcon
  }
];
</script>

<style scoped>
.glass-panel {
  background: var(--surface);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border);
  border-radius: 1.5rem;
}
</style>

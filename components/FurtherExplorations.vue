<template>
  <section id="explorations" class="py-24 bg-transparent">
    <div class="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
      <div class="mb-16 text-center animate-fade-in">
        <p class="text-sm tracking-widest text-[var(--accent)] uppercase font-semibold mb-2">Beyond the Code</p>
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)]">Further Explorations.</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a 
          v-for="(item, index) in explorations" 
          :key="item.title"
          :href="item.url" 
          target="_blank"
          rel="noopener noreferrer"
          class="relative block bg-gradient-to-br from-[var(--surface)] to-transparent rounded-xl border border-[var(--border)] transition-all duration-300 hover:border-[var(--accent)]/40 hover:-translate-y-1 group overflow-hidden animate-fade-in"
          :style="{ '--delay': (index * 150) + 'ms' }"
          @mousemove="handleMouseMove"
          @mouseleave="handleMouseLeave"
        >
          <!-- Glow Effect Overlay -->
          <div class="absolute inset-0 transition-all duration-300 pointer-events-none opacity-0 group-hover:opacity-100" style="background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--glow), transparent 40%)"></div>
          
          <div class="relative z-10 p-6 h-full">
            <div class="flex items-start gap-5">
              <div class="mt-1 bg-gradient-to-br from-[var(--surface-inset)] to-transparent p-2 rounded-md border border-[var(--border)] group-hover:border-[var(--accent)]/30 transition-colors duration-300">
                <component :is="item.icon" class="w-7 h-7 text-[var(--accent)] transition-colors duration-300 group-hover:text-[var(--text-primary)]" />
              </div>
              <div class="flex-grow">
                <h3 class="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">{{ item.title }}</h3>
                <p class="text-[var(--text-secondary)] text-sm leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';

const AtomIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
  h('circle', { cx: '12', cy: '12', r: '3' }),
  h('ellipse', { cx: '12', cy: '12', rx: '10', ry: '4' }),
  h('ellipse', { cx: '12', cy: '12', rx: '10', ry: '4', transform: 'rotate(60 12 12)' }),
  h('ellipse', { cx: '12', cy: '12', rx: '10', ry: '4', transform: 'rotate(120 12 12)' })
]);

const LinkIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' })
]);

const InstagramIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
  h('rect', { x: '2', y: '2', width: '20', height: '20', rx: '5', ry: '5' }),
  h('path', { d: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z' }),
  h('line', { x1: '17.5', y1: '6.5', x2: '17.51', y2: '6.5' })
]);

const explorations = [
  {
    title: '@esotericintelligence',
    description: 'A platform dedicated to elevating the mind and healing. Here, I decode the principles of consciousness, energy, and spiritual growth, offering tools and insights to help you reprogram your reality.',
    url: 'https://www.instagram.com/esotericintelligence',
    icon: AtomIcon
  },
  {
    title: 'opendev-labs',
    description: 'The official hub for my work in AI development. Follow for project showcases, technical insights, and explorations into building intelligent, automated systems with cutting-edge AI.',
    url: 'https://opendev-labs.github.io',
    icon: LinkIcon
  },
  {
    title: '@iamyash.io',
    description: 'My personal platform where I teach men how to master solitude, build unwavering consistency, and transmute heartbreak into personal power. A direct look into the philosophies that forge resilience.',
    url: 'https://www.instagram.com/iamyash.io',
    icon: InstagramIcon
  },
];

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
  e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
};

const handleMouseLeave = (e) => {
  // Reset if needed
};
</script>

<style scoped>
.animate-fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

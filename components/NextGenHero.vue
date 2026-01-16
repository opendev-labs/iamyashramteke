<template>
  <section id="home" class="relative min-h-screen w-full flex items-center text-left pt-20 overflow-hidden">
    <!-- Background is handled by LiveBackground component in parent -->
    <div class="relative z-10 w-full container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
      
      <!-- Left Side: Text Content -->
      <div class="md:max-w-3xl">
        <div class="mb-4 animate-fade-in" style="--delay: 100ms">
          <p class="text-sm md:text-base text-[var(--accent)] tracking-wider font-medium uppercase transition-colors duration-500">
            YASH R . (<a 
              href="https://opendev-labs.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-[#F97316] font-semibold hover:underline"
            >
              opendev-labs
            </a>)
          </p>
        </div>
        <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[var(--text-primary)] mb-6 hero-heading-effect animate-fade-in" style="--delay: 200ms">
          Transcending Code, Elevating Consciousness.
        </h1>
        <h2 class="text-xl sm:text-2xl md:text-4xl text-[var(--text-secondary)] font-light h-10 sm:h-12 md:h-14 mb-2 animate-fade-in" style="--delay: 300ms">
          <span v-html="displayedHtml"></span><span class="opacity-50 animate-pulse font-bold text-[var(--accent)]">|</span>
        </h2>
        <p class="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-8 animate-fade-in max-w-2xl" style="--delay: 400ms">
          I craft digital tools for healing and share philosophies to elevate consciousness. Through my personal brand, I also guide men on how to master solitude, build unwavering consistency, and transmute heartbreak into strength.
        </p>
      </div>
      
      <!-- Right Side: Buttons & Profile Hub Feel -->
      <div class="flex flex-col items-stretch md:items-end gap-4 w-full md:w-auto animate-fade-in" style="--delay: 500ms">
         <div class="flex flex-col gap-3 w-full md:w-64">
           <a 
              href="#contact"
              class="group relative inline-flex items-center justify-center px-8 py-4 bg-black text-[var(--accent)] font-semibold rounded-lg shadow-[0_4px_14px_var(--shadow-color)] hover:shadow-[0_6px_20px_var(--shadow-color-hover)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-[var(--border)]"
            >
              <span class="absolute inset-0 bg-[var(--accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100 rounded-full"></span>
              <span class="relative">Get In Touch</span>
            </a>
            <a 
              href="#constructs"
              class="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium border border-[var(--border)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]/40 transition-all duration-300"
            >
              Explore Constructs
            </a>
            <a 
              href="#approach"
              class="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
            >
              Philosophy & Process
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
         </div>

         <!-- Status HUD -->
         <div class="hidden md:flex flex-col items-end gap-2 pr-2 opacity-40">
            <span class="text-[10px] text-zinc-500 uppercase tracking-widest font-black">Core_Protocol</span>
            <span class="text-xs text-[var(--accent)] font-black tracking-widest uppercase">SOVEREIGN_V.4</span>
         </div>
      </div>
    </div>

    <!-- Scroll Down Arrow -->
    <div class="absolute bottom-8 inset-x-0 flex justify-center z-20 pointer-events-none">
      <a 
        href="#approach"
        class="pointer-events-auto animate-bounce-custom"
        aria-label="Scroll to next section"
      >
        <svg 
          class="w-8 h-8 text-[var(--accent)] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_var(--glow)]"
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const titles = [
  "Lu|",
  "@iamyash.io", 
  "Developer of AgentBash", 
  "Founder of <span class=\"text-[#F97316] font-semibold\">opendev-labs</span>", 
  "AI Architect", 
  "Software Architect", 
  "Digital Healer"
];

const index = ref(0);
const subIndex = ref(0);
const reverse = ref(false);
const displayedHtml = ref('');
let timeoutId = null;

const type = () => {
  if (timeoutId) clearTimeout(timeoutId);

  const currentTitle = titles[index.value];
  
  // Handle end of typing
  if (subIndex.value >= currentTitle.length && !reverse.value) {
    timeoutId = setTimeout(() => {
      reverse.value = true;
      type();
    }, 2000);
    return;
  }

  // Handle end of deleting
  if (subIndex.value <= 0 && reverse.value) {
    reverse.value = false;
    index.value = (index.value + 1) % titles.length;
    timeoutId = setTimeout(type, 500);
    return;
  }

  // Next step
  if (reverse.value) {
    if (currentTitle.charAt(subIndex.value - 1) === '>') {
      const openingTagIndex = currentTitle.lastIndexOf('<', subIndex.value - 1);
      subIndex.value = openingTagIndex !== -1 ? openingTagIndex : subIndex.value - 1;
    } else {
      subIndex.value--;
    }
  } else {
    if (currentTitle.charAt(subIndex.value) === '<') {
      const closingTagIndex = currentTitle.indexOf('>', subIndex.value);
      subIndex.value = closingTagIndex !== -1 ? closingTagIndex + 1 : subIndex.value + 1;
    } else {
      subIndex.value++;
    }
  }

  displayedHtml.value = currentTitle.substring(0, subIndex.value);
  timeoutId = setTimeout(type, reverse.value ? 75 : 120);
};

onMounted(() => {
  type();
});

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId);
});
</script>

<style scoped>
.animate-bounce-custom {
  animation: bounce-custom 2s infinite;
}

@keyframes bounce-custom {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(8px); }
  60% { transform: translateY(4px); }
}

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

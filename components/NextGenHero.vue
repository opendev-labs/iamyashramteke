<template>
  <section id="home" class="relative h-[calc(100dvh-5rem)] w-full flex items-center justify-center text-left overflow-hidden pb-20 md:pb-0 md:pt-24">
    <!-- Background is handled by LiveBackground component in parent -->
    <div class="relative z-10 w-full container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between gap-4 md:gap-12">
      
      <!-- Left Side: Text Content -->
      <div class="md:max-w-3xl">
        <div class="mb-4 animate-fade-in" style="--delay: 100ms">
          <p class="text-sm md:text-base text-[var(--accent)] tracking-wider font-medium uppercase transition-colors duration-500">
            YASH R . (<a 
              href="https://opendev-labs.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-[#F97316] font-semibold hover:underline lowercase"
            >
              opendev-labs
            </a>)
          </p>
        </div>
        <h1 class="text-[clamp(1.8rem,8vw,6rem)] font-black tracking-tighter text-[var(--text-primary)] mb-1 md:mb-6 leading-[0.9] hero-heading-effect animate-fade-in" style="--delay: 200ms">
          Transcending Code,<br /> Elevating Consciousness.
        </h1>
        <h2 class="text-xl sm:text-2xl md:text-3xl text-[var(--accent)]/80 lower h-8 sm:h-12 md:h-14 mb-2 md:mb-4 animate-fade-in" style="--delay: 300ms">
          <span v-html="displayedHtml"></span><span class="opacity-50 animate-pulse font-bold">|</span>
        </h2>
        <p class="text-[var(--text-secondary)] text-[var(--p-size)] leading-relaxed mb-4 md:mb-10 animate-fade-in max-w-2xl font-medium" style="--delay: 400ms">
          I craft digital tools for healing and share philosophies to elevate consciousness. Through my personal brand, I also guide men on how to master solitude, build unwavering consistency, and transmute heartbreak into strength.
        </p>
      </div>
      
      <!-- Right Side: Elevated Action Hub -->
      <div class="flex flex-col items-stretch md:items-end gap-6 w-full md:w-auto animate-fade-in" style="--delay: 500ms">
         <div class="flex flex-col gap-4 w-full md:w-72">
            <a 
              href="#contact"
              class="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-5 bg-black text-[var(--accent)] font-bold rounded-xl shadow-[0_4px_20px_var(--glow)] hover:shadow-[0_8px_30px_var(--glow)] transition-all duration-500 transform hover:-translate-y-1 overflow-hidden border border-[var(--border)]"
            >
              <span class="absolute inset-0 bg-[var(--accent)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
              <span class="relative">Synchronize Session</span>
            </a>
            <a 
              href="#constructs"
              class="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-sm font-bold border border-[var(--border)] rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]/60 transition-all duration-500 backdrop-blur-md"
            >
              Explore Constructs
            </a>
         </div>

      </div>
    </div>

    <!-- Scroll Down Arrow - Always visible on mobile -->
    <div class="absolute bottom-12 md:bottom-8 inset-x-0 flex justify-center z-20 pointer-events-none">
      <a 
        href="#approach"
        class="pointer-events-auto animate-bounce-custom opacity-100"
        aria-label="Scroll to next section"
      >
        <svg 
          class="w-10 h-10 sm:w-8 sm:h-8 text-[var(--accent)] transition-all duration-300 hover:scale-110 drop-shadow-[0_0_10px_var(--glow)] hover:drop-shadow-[0_0_15px_var(--glow)]"
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
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
  "Founder of <span class=\"text-[#F97316] font-semibold lowercase\">opendev-labs</span>", 
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
  will-change: transform, opacity;
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

<template>
  <div class="content-portal py-20 px-8 min-height-screen bg-black">
    <div v-if="page" class="max-w-4xl mx-auto kinetic-transition">
       <!-- Sovereign Breadcrumb -->
       <div class="flex items-center gap-4 mb-10 opacity-60 hover:opacity-100 kinetic-transition">
          <NuxtLink to="/" class="mono text-[9px] text-cyan-400 hover:text-white uppercase tracking-widest">Global_Portal</NuxtLink>
          <span class="text-zinc-700 text-[10px] mono">//</span>
          <span class="mono text-[9px] text-zinc-500 uppercase tracking-widest">{{ route.path.replace(/^\//, '').replace(/\//g, ' > ') || 'ROOT' }}</span>
       </div>

       <!-- Header Module -->
       <header class="mb-16 border-b border-white/5 pb-12">
          <div class="mono text-[10px] text-zinc-600 mb-4 font-black uppercase tracking-[0.4em]">SOVEREIGN_DATA_NODE</div>
          <h1 class="text-6xl font-black text-white tracking-tighter leading-none mb-6 uppercase">
            {{ page.title }}<span class="text-cyan-400">_</span>
          </h1>
          <div v-if="page.description" class="text-zinc-500 text-lg font-medium max-w-2xl leading-relaxed">
            {{ page.description }}
          </div>
       </header>

       <!-- Kinetic Content Body -->
       <div class="prose-sovereign mono">
          <ContentRenderer :value="page" />
       </div>

       <!-- Footer Telemetry -->
       <footer class="mt-32 pt-12 border-t border-white/5 flex justify-between items-center opacity-30">
          <div class="mono text-[8px] text-zinc-600 uppercase">Artifact_Integrity: VERIFIED</div>
          <div class="mono text-[8px] text-zinc-600 uppercase">Node_ID: {{ (page._id || 'unknown').toUpperCase() }}</div>
       </footer>
    </div>

    <!-- Error State -->
    <div v-else-if="!pending" class="flex flex-col items-center justify-center py-40">
       <div class="w-16 h-16 border border-red-500/20 flex items-center justify-center mb-8">
          <span class="text-red-500 animate-pulse text-2xl font-black">!</span>
       </div>
       <div class="mono text-[10px] text-red-500 font-black uppercase tracking-[0.5em] mb-4">ERROR: NODE_CONNECTION_FAILED</div>
       <p class="text-zinc-600 mono text-xs mb-10">The requested data node does not exist or is encrypted.</p>
       <NuxtLink to="/" class="mono text-[10px] px-6 py-2 border border-white/10 text-zinc-400 hover:text-cyan-400 hover:border-cyan-400 kinetic-transition uppercase">
          Return_to_Portal
       </NuxtLink>
    </div>
    
    <!-- Loading State -->
    <div v-else class="flex items-center justify-center py-40">
       <div class="w-12 h-[2px] bg-cyan-400/20 overflow-hidden relative">
          <div class="absolute inset-0 bg-cyan-400 animate-[loading_1.5s_infinite] shadow-[0_0_10px_#22d3ee]"></div>
       </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: page, pending } = await useAsyncData(`content-${route.path}`, () => queryContent(route.path).findOne())

definePageMeta({
  layout: 'nextgen'
})

// Update metadata
useHead({
  title: page.value ? `${page.value.title} // SOVEREIGN_PORTAL` : 'SEARCHING... // SOVEREIGN_PORTAL'
})
</script>

<style scoped>
.mono { font-family: var(--font-mono); }
.kinetic-transition { transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1); }
.min-height-screen { min-height: 100vh; }

/* Custom prose styling for $200M look */
.prose-sovereign {
  color: #a1a1aa;
  line-height: 1.625;
  font-size: 1rem;
}

:deep(.prose-sovereign h2) {
  font-size: 1.5rem;
  font-weight: 900;
  color: #ffffff;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  display: flex;
  align-items: center;
  gap: 1rem;
}

:deep(.prose-sovereign h2::before) {
  content: '';
  display: block;
  width: 12px;
  height: 2px;
  background: #22d3ee;
  box-shadow: 0 0 10px #22d3ee;
}

:deep(.prose-sovereign p) {
  margin-bottom: 1.5rem;
}

:deep(.prose-sovereign ul) {
  margin-bottom: 2rem;
}

:deep(.prose-sovereign li) {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

:deep(.prose-sovereign li::before) {
  content: '>';
  color: #22d3ee;
  font-weight: 900;
}

:deep(.prose-sovereign code) {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.125rem 0.5rem;
  color: #67e8f9;
  border-radius: 0.125rem;
  font-size: 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  font-family: var(--font-mono);
}

:deep(.prose-sovereign pre) {
  background: #050505;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  margin: 2.5rem 0;
  position: relative;
  overflow-x: auto;
}

:deep(.prose-sovereign pre::after) {
  content: 'FILE_STREAM';
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  font-family: var(--font-mono);
  font-size: 8px;
  color: #3f3f46;
  font-weight: 700;
}

@keyframes loading {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Fallbacks for Tailwind if missing */
.max-w-4xl { max-width: 56rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-10 { margin-bottom: 2.5rem; }
.mb-16 { margin-bottom: 4rem; }
.mt-32 { margin-top: 8rem; }
.pb-12 { padding-bottom: 3rem; }
.pt-12 { padding-top: 3rem; }
.px-8 { padding-left: 2rem; padding-right: 2rem; }
.py-12 { padding-top: 3rem; padding-bottom: 3rem; }
.py-20 { padding-top: 5rem; padding-bottom: 5rem; }
.py-40 { padding-top: 10rem; padding-bottom: 10rem; }
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-3 { gap: 0.75rem; }
.gap-4 { gap: 1rem; }
.text-5xl { font-size: 3rem; }
.text-6xl { font-size: 3.75rem; }
.text-lg { font-size: 1.125rem; }
.text-xs { font-size: 0.75rem; }
.font-black { font-weight: 900; }
.font-medium { font-weight: 500; }
.text-white { color: #ffffff; }
.text-cyan-400 { color: #22d3ee; }
.text-zinc-400 { color: #a1a1aa; }
.text-zinc-500 { color: #71717a; }
.text-zinc-600 { color: #52525b; }
.text-zinc-700 { color: #3f3f46; }
.bg-black { background-color: #000000; }
.border-b { border-bottom-width: 1px; }
.border-t { border-top-width: 1px; }
.border-white\/5 { border-color: rgba(255, 255, 255, 0.05); }
</style>

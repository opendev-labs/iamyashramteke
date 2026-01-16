<template>
  <Transition name="fade">
    <div v-if="isVisible" class="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-12 mono">
      <div class="max-w-2xl w-full space-y-2">
        <div v-for="(line, index) in bootLines" :key="index" class="text-[10px] text-cyan-400 opacity-90 border-l border-cyan-400/20 pl-4">
          <span class="text-zinc-600 mr-2">[{{ formatTime(index) }}]</span> {{ line }}
        </div>
        <div class="flex items-center gap-4 pt-12 border-t border-white/5 mt-8">
           <div class="mono text-2xl font-black text-white tracking-tighter">HYPERINTELLIGENCE.EXE</div>
           <div class="flex-1 h-[2px] bg-cyan-400/20 relative overflow-hidden">
              <div class="absolute inset-0 bg-cyan-400 w-full animate-[loading_1s_ease-in-out_infinite] shadow-[0_0_15px_rgba(34,211,238,0.6)]"></div>
           </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const isVisible = ref(true);
const bootLines = ref([]);
const lines = [
  "SYSTEM_AWAKENING...",
  "VERIFYING_SOVEREIGN_CREDENTIALS...",
  "ESTABLISHING_HYPERINTELLIGENT_PORTALS...",
  "LEVEL_01_COGNITION_ENABLED",
  "PROTOCOL: $200M_AESTHETIC_OVERRIDE",
  "SYNCHRONIZING_GLOBAL_RESEARCH_DB...",
  "DECRYPTING_INSTITUTIONAL_ASSETS...",
  "SOVEREIGN_INTERFACE_STABLE",
];

const formatTime = (index) => {
  return `0.${(index * 13).toString().padStart(3, '0')}s`;
};

onMounted(() => {
  let count = 0;
  const interval = setInterval(() => {
    if (count < lines.length) {
      bootLines.value.push(lines[count]);
      count++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        isVisible.value = false;
      }, 1200);
    }
  }, 120);
});
</script>

<style scoped>
.mono { font-family: var(--font-mono); }
.fade-leave-active { transition: opacity 1.2s cubic-bezier(0.23, 1, 0.32, 1); }
.fade-leave-to { opacity: 0; transform: scale(1.05); }
.space-y-2 > * + * { margin-top: 0.5rem; }
.pt-12 { padding-top: 3rem; }
.text-cyan-400 { color: #22d3ee; }
.bg-black { background-color: #000000; }

@keyframes loading {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>

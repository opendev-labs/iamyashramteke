<template>
  <Transition name="fade-slide">
    <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <!-- Dark Backdrop for both mobile and desktop -->
      <div 
        class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 pointer-events-auto"
        @click="dismiss"
      ></div>

      <!-- Toast Modal / Centered Badge -->
      <div 
        class="relative max-w-sm w-full glass-toast rounded-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-[var(--border)] overflow-hidden pointer-events-auto z-10"
      >
        <!-- Accent Glow Background -->
        <div class="absolute -right-12 -bottom-12 w-24 h-24 bg-[var(--accent)]/10 rounded-full blur-2xl pointer-events-none"></div>

        <div class="flex items-start gap-3 relative z-10">
          <!-- Pulse Indicator Icon -->
          <div class="flex-shrink-0 pt-0.5">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
            </span>
          </div>

          <!-- Content -->
          <div class="flex-1 space-y-2">
            <p class="text-xs font-mono uppercase tracking-widest text-[var(--accent)]">New Release</p>
            <h4 class="text-sm font-bold text-[var(--text-primary)]">Stream my first AI Punjabi Rap</h4>
            <p class="text-xs text-[var(--text-secondary)] leading-relaxed">
              Experience NukeFM's frequency of resistance directly on YouTube.
            </p>
            
            <!-- Actions -->
            <div class="flex items-center gap-3 pt-1">
              <a 
                href="https://www.youtube.com/watch?v=7Hty5CRDgFo"
                target="_blank"
                rel="noopener noreferrer"
                @click="dismiss"
                class="inline-block text-xs font-bold text-black bg-[var(--accent)] hover:bg-white px-3 py-1.5 rounded-lg transition-colors duration-300 shadow-[0_0_10px_var(--glow)]"
              >
                Listen Now
              </a>
              <button 
                @click="dismiss" 
                class="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
              >
                Dismiss
              </button>
            </div>
          </div>

          <!-- Manual Close Button -->
          <button 
            @click="dismiss" 
            class="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 p-1"
            aria-label="Close notification"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  // Check if dismissed before in the current session
  const isDismissed = sessionStorage.getItem('nukefm-notification-dismissed')
  if (!isDismissed) {
    // Show after a short 2-second delay for premium dynamic feel
    setTimeout(() => {
      isVisible.value = true
    }, 2000)
  }
})

const dismiss = () => {
  isVisible.value = false
  sessionStorage.setItem('nukefm-notification-dismissed', 'true')
}
</script>

<style scoped>
.glass-toast {
  background: var(--surface);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: border-color 0.3s, box-shadow 0.3s;
}

.glass-toast:hover {
  border-color: rgba(var(--accent-rgb), 0.3);
  box-shadow: 0 10px 40px rgba(var(--accent-rgb), 0.1);
}

h4 {
  font-family: 'Space Grotesk', system-ui, sans-serif !important;
}

p, button, a {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

/* Transition Animations */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>

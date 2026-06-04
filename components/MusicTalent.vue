<template>
  <section id="music" class="py-24 bg-transparent border-t border-[var(--border)]/30">
    <div class="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
      <div class="mb-16 text-center animate-fade-in">
        <p class="text-sm tracking-widest text-[var(--accent)] uppercase font-semibold mb-2">Sonic Constructs</p>
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)]">Creative Frequency.</h2>
      </div>

      <div class="max-w-4xl mx-auto glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
        <!-- Accent Glow background -->
        <div class="absolute -right-24 -top-24 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--accent)]/10 transition-all duration-700 pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center relative z-10">
          <!-- Left: Iframe Player (3/5 cols) -->
          <div class="lg:col-span-3">
            <div class="video-wrapper rounded-xl overflow-hidden border border-[var(--border)] bg-black/40 shadow-[0_0_30px_var(--glow)] transition-transform duration-500 hover:scale-[1.01]">
              <iframe 
                src="https://www.youtube.com/embed/7Hty5CRDgFo" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                class="w-full aspect-video"
              ></iframe>
            </div>
          </div>

          <!-- Right: Description, Subscribe & Native Redirection (2/5 cols) -->
          <div class="lg:col-span-2 flex flex-col justify-between h-full space-y-6">
            <div>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 mb-4">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></span>
                NEW RAP SINGLE
              </span>
              <h3 class="text-2xl font-bold text-[var(--text-primary)] mb-3">CYBERPHONK NIGHTS</h3>
              <p class="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                Exploring alternative frequencies and creative expression. Produced using suno.ai, bringing futuristic synth lines and cybernetic rap flows to life.
              </p>
            </div>

            <!-- Action buttons -->
            <div class="space-y-4 pt-2">
              <!-- Subscribe Widget -->
              <div class="subscribe-container p-4 rounded-xl border border-[var(--border)] bg-black/20 flex flex-col items-center justify-center gap-3">
                <span class="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">Support the channel</span>
                <!-- Google Subscribe button container -->
                <div class="g-ytsubscribe" data-channelid="UC61oymfYXNMJeazMbTHjWwQ" data-layout="default" data-theme="dark" data-count="default"></div>
              </div>

              <!-- Open in Native App Button -->
              <a 
                href="intent://www.youtube.com/watch?v=7Hty5CRDgFo#Intent;package=com.google.android.youtube;scheme=https;end;"
                class="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-medium text-sm text-black bg-[var(--accent)] hover:bg-white transition-all duration-300 shadow-[0_0_15px_var(--glow)] hover:shadow-[0_0_25px_var(--glow)] border border-transparent hover:-translate-y-0.5"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Open in YouTube App
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHead } from '#imports'

// Dynamically inject Google Platform script for YouTube Subscription Widget
useHead({
  script: [
    { src: 'https://apis.google.com/js/platform.js', async: true, defer: true }
  ]
})
</script>

<style scoped>
.video-wrapper iframe {
  border: none;
}
</style>

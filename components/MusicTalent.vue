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
          <!-- Left: Custom Thumbnail Player (3/5 cols) -->
          <div class="lg:col-span-3 w-full">
            <a 
              href="intent://www.youtube.com/watch?v=7Hty5CRDgFo#Intent;package=com.google.android.youtube;scheme=https;end;"
              class="video-wrapper block relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden border border-[var(--border)] bg-black/40 shadow-[0_0_30px_var(--glow)] transition-all duration-500 hover:scale-[1.02] group/player"
              aria-label="Play NukeFM on YouTube"
            >
              <!-- Video Thumbnail Image -->
              <img 
                src="https://img.youtube.com/vi/7Hty5CRDgFo/maxresdefault.jpg" 
                alt="NukeFM Video Thumbnail"
                class="absolute top-0 left-0 w-full h-full object-cover opacity-60 group-hover/player:opacity-85 transition-opacity duration-500"
              />
              
              <!-- Dark Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              
              <!-- Custom Play Button Overlay -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.5)] group-hover/player:shadow-[0_0_40px_rgba(239,68,68,0.8)] group-hover/player:bg-red-500 group-hover/player:scale-110 transition-all duration-300 animate-pulse-slow">
                  <svg class="w-6 h-6 sm:w-8 sm:h-8 fill-current translate-x-0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </a>
          </div>

          <!-- Right: Description (2/5 cols) -->
          <div class="lg:col-span-2 flex flex-col justify-center h-full space-y-6">
            <div>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 mb-4 animate-pulse">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                @nukfm
              </span>
              <h3 class="text-3xl font-bold text-[var(--text-primary)] mb-1">NukeFM</h3>
              <p class="text-xs font-mono text-[var(--accent)] tracking-wider mb-6">Nuke Frequency Mode</p>
              
              <div class="text-sm text-[var(--text-secondary)] leading-relaxed">
                <p class="font-semibold text-[var(--text-primary)] border-l-2 border-[var(--accent)] pl-3 italic">
                  "NUKE FM – The frequency they can't jam."
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.video-wrapper iframe {
  border: none;
}

.animate-pulse-slow {
  animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: .8;
    transform: scale(0.96);
  }
}

/* Ensure font harmony with the main website typography */
h2, h3, .title-font {
  font-family: 'Space Grotesk', system-ui, sans-serif !important;
}

p, span, div:not(.g-ytsubscribe), a {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.font-mono {
  font-family: 'JetBrains Mono', monospace !important;
}
</style>

<template>
  <section id="music" class="py-24 bg-transparent">
    <div class="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
      
      <!-- Section Title -->
      <div class="mb-16 text-center animate-fade-in">
        <p class="text-sm tracking-widest text-[var(--accent)] uppercase font-semibold mb-2">Sonic Constructs</p>
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)]">Creative Frequency.</h2>
      </div>

      <!-- Playlist Button (Directly centered, not inside a card) -->
      <div class="max-w-4xl mx-auto flex justify-center mb-12">
        <a 
          :href="playlistUrl"
          target="_blank"
          rel="noopener noreferrer"
          @click="handlePlaylistClick"
          class="px-6 py-3 text-xs sm:text-sm font-mono uppercase tracking-wider rounded-xl border border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black transition-all duration-300 flex items-center gap-2 font-bold shadow-[0_0_15px_var(--glow)]"
        >
          <span>PSY Playlist</span>
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <!-- Two Videos Stacked (Directly on the page) -->
      <div class="max-w-4xl mx-auto space-y-12 relative">
        <div 
          v-for="track in tracks" 
          :key="track.id"
          class="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-black/40 backdrop-blur-md relative group/track overflow-hidden glass-panel"
        >
          <!-- Accent Glow background per card -->
          <div class="absolute -right-24 -top-24 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl group-hover/track:bg-[var(--accent)]/10 transition-all duration-700 pointer-events-none"></div>

          <!-- Video Title & Tag -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 relative z-10">
            <div class="space-y-1">
              <h3 class="text-xl sm:text-2xl font-bold text-[var(--text-primary)] leading-tight">{{ track.title }}</h3>
              <p class="text-[10px] sm:text-xs text-[var(--accent)] tracking-widest uppercase font-mono">PSYTRANCE RELEASE</p>
            </div>
            <div class="flex">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 animate-pulse">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                @nukfm
              </span>
            </div>
          </div>

          <!-- Custom Thumbnail Player -->
          <div class="w-full relative z-10">
            <a 
              :href="track.link || `https://www.youtube.com/watch?v=${track.id}`"
              target="_blank"
              rel="noopener noreferrer"
              @click="handleClick(track.id)"
              class="video-wrapper block relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden border border-[var(--border)]/40 bg-black/40 shadow-[0_0_20px_var(--glow)] transition-all duration-500 hover:scale-[1.01] group/player"
              :aria-label="`Play ${track.title} on YouTube`"
            >
              <!-- Video Thumbnail Image -->
              <img 
                :src="`https://img.youtube.com/vi/${track.id}/maxresdefault.jpg`" 
                :alt="`${track.title} Video Thumbnail`"
                class="absolute top-0 left-0 w-full h-full object-cover opacity-70 group-hover/player:opacity-85 transition-opacity duration-500"
              />
              
              <!-- Dark Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
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

          <!-- Track Description -->
          <p class="text-sm text-[var(--text-secondary)] leading-relaxed relative z-10">
            {{ track.description }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const playlistUrl = ref('https://www.youtube.com/playlist?list=PL6dtDmhdCfhc9t1aQMSXUl8oeIQF2MmB3')

const tracks = ref([
  {
    id: 'PeqQ3pPdqdg',
    title: 'Quantum Natural',
    description: 'Synthesizing the frontiers of AI with the raw resonance of sound. Quantum Natural is a high-energy sonic journey blending cosmic soundscapes with complex psytrance frequencies.',
    link: ''
  },
  {
    id: 'qUBy_nPTIgk',
    title: 'Bio Magnetic',
    description: 'A driving, hypnotic journey of deep basslines and bio-electromagnetic rhythms. Bio Magnetic represents the visceral convergence of computation and biological resonance.',
    link: ''
  },
  {
    id: '9o8UFIEOww0',
    title: 'Neuclear Warning',
    description: 'An intense, high-energy psytrance excursion featuring driving basslines, synthetic alerts, and industrial textures to sharpen focus and raise energy levels.',
    link: ''
  },
  {
    id: '74tM179QBws',
    title: 'Pineal Activation',
    description: 'A deep, hypnotic sonic construct engineered to align focus and stimulate consciousness. Slow-building atmospheres coupled with sharp, resonant psytrance rhythms.',
    link: ''
  },
  {
    id: 'cnP3yijGrQU',
    title: 'Hyperdimentional',
    description: 'A cosmic, fast-paced voyage navigating through multi-dimensional sounds. Blending intricate synthesizer layers with deep, sub-atomic frequencies to expand perception.',
    link: ''
  }
])

onMounted(() => {
  playlistUrl.value = getYouTubePlaylistDeepLink('PL6dtDmhdCfhc9t1aQMSXUl8oeIQF2MmB3')
  tracks.value = tracks.value.map(track => ({
    ...track,
    link: getYouTubeDeepLink(track.id)
  }))
})

const handleClick = (id) => handleYouTubeDeepLinkClick(id)
const handlePlaylistClick = () => handleYouTubePlaylistDeepLinkClick('PL6dtDmhdCfhc9t1aQMSXUl8oeIQF2MmB3')
</script>

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

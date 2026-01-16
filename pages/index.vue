<template>
  <div class="app-root relative">
    <LiveBackground />
    
    <main class="relative z-10">
      <NextGenHero />
      <SocialProfile />
      <PhilosophyProcess />
      <ResearchGrid />
      <FurtherExplorations />
    </main>

    <footer class="relative z-10 py-12 text-center border-t border-[var(--border)] bg-black/20 backdrop-blur-sm">
      <div class="container mx-auto px-4">
        <p class="text-sm text-[var(--text-secondary)]/60">
          &copy; {{ new Date().getFullYear() }} opendev-labs. All rights reserved. // <span class="text-[var(--accent)] font-bold">SOVEREIGN_V.4</span>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'nextgen'
})
// LiveBackground, NextGenHero, ResearchGrid, FurtherExplorations are auto-imported
</script>

<style>
.app-root {
  min-height: 100vh;
  background-color: var(--background);
}
</style>

<style scoped>
.nextgen-portal {
  background-color: #000000;
  min-height: 100vh;
}
</style>

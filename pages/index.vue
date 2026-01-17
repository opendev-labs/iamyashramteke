<template>
  <div class="app-root relative">
    <QuantumBackground />
    
    <main class="relative z-10">
      <NextGenHero />
      <PhilosophyProcess />
      <ResearchGrid />
      <FurtherExplorations />
      <SocialProfile />
    </main>

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

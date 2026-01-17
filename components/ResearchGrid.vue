<template>
  <section id="constructs" class="relative py-24 bg-transparent">
    <div class="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
      <div class="max-w-3xl mb-16 animate-fade-in">
        <p class="text-sm tracking-widest text-[var(--accent)] uppercase font-semibold mb-2">Portfolio</p>
        <h2 class="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">Digital Constructs</h2>
        <p class="text-[var(--text-secondary)] text-lg leading-relaxed">
          A collection of digital tools, systems, and experiments built with a focus on performance, utility, and sovereign computing.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectModule 
          v-for="project in projects" 
          :key="project.slug"
          v-bind="project"
          class="animate-fade-in"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { PROJECTS } from '~/utils/projects';

const projects = PROJECTS;
</script>

<style scoped>
.animate-fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

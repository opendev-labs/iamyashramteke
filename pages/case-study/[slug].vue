<template>
  <div class="case-study-page min-h-screen pt-12 pb-16">
    <!-- Back Navigation (Integrated into page) -->
    <!-- Back Navigation Removed -->

    <div v-if="project" class="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
      <div class="max-w-4xl mx-auto">
        <!-- Header Section -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[var(--text-primary)] mb-8 opacity-0 animate-slide-up leading-tight">
          {{ project.title }}<span class="text-[var(--accent)]">.</span>
        </h1>
        
        <div class="flex flex-wrap gap-2 mb-12 opacity-0 animate-fade-in-delayed">
          <span 
            v-for="tag in project.tags" 
            :key="tag" 
            :class="[
              'text-xs font-medium px-3 py-1 rounded-full border transition-colors duration-300',
              tag.toLowerCase().includes('under development') 
                ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' 
                : 'bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/20'
            ]"
          >
            {{ tag }}
          </span>
        </div>

        <div class="text-[var(--text-secondary)] text-base md:text-lg space-y-12">
          <!-- Description -->
          <p class="text-xl sm:text-2xl md:text-3xl text-[var(--text-primary)] font-light leading-relaxed opacity-0 animate-fade-in-delayed-2">
            {{ project.description }}
          </p>
          
          <!-- Links -->
          <div class="opacity-0 animate-fade-in-delayed-3 flex items-center justify-between py-6 border-y border-[var(--border)]">
            <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium">
              <Icons name="github" class="w-5 h-5" /> View Source
            </a>
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-dark)] font-bold transition-colors hover:underline">
              <Icons name="link" class="w-5 h-5" /> Website
            </a>
          </div>
          
          <!-- Core Architecture (Features) -->
          <div v-if="project.features && project.features.length > 0">
            <h2 class="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] pt-4 !mt-16 opacity-0 animate-fade-in-delayed-4">Core Architecture</h2>
            <div class="grid md:grid-cols-2 gap-6 !mt-8">
              <FeatureCard 
                v-for="(feature, index) in project.features" 
                :key="feature.title" 
                :icon="feature.icon" 
                :title="feature.title" 
                :delay="index * 100 + 600"
              >
                {{ feature.description }}
              </FeatureCard>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 404 State -->
    <div v-else class="min-h-[50vh] flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold text-[var(--text-primary)] mb-4">404</h1>
      <p class="text-[var(--text-secondary)] mb-8">Construct not found in current sector.</p>
      <NuxtLink to="/#constructs" class="text-[var(--accent)] hover:underline">Return to Portfolio</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { PROJECTS } from '~/utils/projects';
import Icons from '~/components/ui/Icons.vue';
import FeatureCard from '~/components/FeatureCard.vue';

definePageMeta({
  layout: 'nextgen'
});

const route = useRoute();
const slug = route.params.slug;

const project = computed(() => PROJECTS.find(p => p.slug === slug));

useHead({
  title: project.value ? `${project.value.title} | Sovereign Case Study` : 'Construct Not Found',
});
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.animate-slide-up {
  animation: slideUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.1s forwards;
}

.animate-fade-in-delayed {
  animation: fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards;
}

.animate-fade-in-delayed-2 {
  animation: fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.3s forwards;
}

.animate-fade-in-delayed-3 {
  animation: fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.4s forwards;
}

.animate-fade-in-delayed-4 {
  animation: fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.5s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

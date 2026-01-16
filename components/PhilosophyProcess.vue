<template>
  <section id="approach" class="relative py-24 bg-transparent overflow-hidden">
    <div class="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
      <div class="max-w-3xl mb-16 animate-fade-in">
        <p class="text-sm tracking-widest text-[var(--accent)] uppercase font-semibold mb-2">Philosophy & Process</p>
        <h2 class="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">My Approach.</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Principled Engineering -->
        <div class="glass-panel p-8 rounded-2xl animate-fade-in" style="--delay: 100ms">
          <div class="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-[var(--text-primary)] mb-4">Principled Engineering</h3>
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
            I am a self-taught software architect with a passion for transforming complex challenges into elegant, high-performance digital solutions. My process is rooted in a continuous cycle of deep learning and focused development, allowing me to build robust and intuitive applications.
          </p>
        </div>

        <!-- Full-Stack Ownership -->
        <div class="glass-panel p-8 rounded-2xl animate-fade-in" style="--delay: 200ms">
          <div class="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-[var(--text-primary)] mb-4">Full-Stack Ownership</h3>
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
            I take full ownership of the development lifecycle, from initial concept and architecture to deployment and iteration. This portfolio was engineered from the ground up, showcasing my commitment to craftsmanship and end-to-end project execution.
          </p>
        </div>

        <!-- Impact-Driven Development -->
        <div class="glass-panel p-8 rounded-2xl animate-fade-in" style="--delay: 300ms">
          <div class="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-[var(--text-primary)] mb-4">Impact-Driven Development</h3>
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
            I believe that the best code serves a clear purpose. My work is focused on building meaningful tools that not only solve technical problems but also provide genuine value to users. I specialize in creating applications that are both powerful and user-centric.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glass-panel {
  background: var(--surface);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border);
}

.animate-fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

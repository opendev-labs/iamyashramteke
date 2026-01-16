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
const projects = [
  {
    title: "QBET",
    slug: "qbet",
    description: "The Sovereign Reality Engine. A state-of-the-art High-Performance Sovereign Language designed for the deterministic manifestation of complex systems. Built for conductors who demand total control over digital law, QBET enforces strict Law-Governed Integrity through Zero-Entropy Conduction.",
    tags: ["Sovereign Language", "Reality Engine", "High-Performance"],
    repoUrl: "https://github.com/opendev-labs/QBET",
    liveUrl: "https://opendev-labs.github.io/QBET/",
    version: "2.4.9_ALPHA"
  },
  {
    title: "AgentBash",
    slug: "agentbash",
    description: "An expert AI development partner that automates entire workflows with a single command. AgentBash uses a multi-agent architecture to generate complete, executable scripts for Windows (PowerShell) and Linux (Bash). Simply provide a high-level goal, approve the AI's intelligent plan, and run the generated script.",
    tags: ["Active in Demo (Team Only)"],
    repoUrl: "https://github.com/opendev-labs/agentbash.io",
    liveUrl: "https://agentbash.vercel.app/",
    version: "1.9.0_STABLE"
  },
  {
    title: "GitHub Sync Desk",
    slug: "gh-sync-desk",
    description: "High-Performance Synchronization Engine for Cloud & Local Workflows. Modern, Electron-based desktop application for Enterprise-grade repository lifecycle management.",
    tags: ["Developed", "Beta"],
    repoUrl: "https://github.com/opendev-labs/gh-sync-desk",
    version: "0.9.8_BETA"
  },
  {
    title: "Quantum-API",
    slug: "quantum-api",
    description: "RESTful API delivering quantum computing capabilities through an easy-to-use developer interface. Leverages PennyLane, Qiskit, and FastAPI.",
    tags: ["Developed"],
    repoUrl: "https://github.com/opendev-labs/Quantum-API",
    version: "1.2.1_STABLE"
  },
  {
    title: "Quantum-compute",
    slug: "quantum-compute",
    description: "Advanced quantum computing algorithms and simulations. Exploring the frontiers of quantum information science and computational advantage.",
    tags: ["Developed"],
    repoUrl: "https://github.com/opendev-labs/Quantum-compute",
    version: "1.0.0"
  },
  {
    title: "Quantum-ML",
    slug: "quantum-ml",
    description: "Cutting-edge framework integrating quantum computing with machine learning. Enables high-performance quantum tasks directly through an API.",
    tags: ["Developed"],
    repoUrl: "https://github.com/opendev-labs/Quantum-ML",
    version: "1.0.0"
  },
  {
    title: "Auto-Notion",
    slug: "auto-notion",
    description: "High-Fidelity AI Agent Orchestration & Institutional Automation. Deploy hyperintelligent AI agents to autonomously manage your Instagram sales funnel with cosmic timing and institutional precision.",
    tags: ["Under Development"],
    repoUrl: "https://github.com/opendev-labs/auto-notion",
    liveUrl: "https://auto-notion.web.app",
    version: "0.5.2_BETA"
  },
  {
    title: "ScanTrade",
    slug: "scantrade",
    description: "Professional High-Density Market Intelligence & Execution Node. An institutional-grade, high-density trading workspace designed for rapid market screening and real-time intelligence.",
    tags: ["Under Development"],
    repoUrl: "https://github.com/opendev-labs/scantrade",
    version: "0.1.0_ALPHA"
  },
  {
    title: "PollyScanner",
    slug: "pollyscanner",
    description: "Next-generation prediction market intelligence and screening platform. Analyzes real-time probability markets to surface crowd sentiment, conviction shifts, and market inefficiencies.",
    tags: ["Under Development"],
    repoUrl: "https://github.com/opendev-labs/pollyscanner",
    version: "0.1.0_ALPHA"
  },
  {
    title: "VOID",
    slug: "void",
    description: "Hyper-Intelligent Virtual Environment Manager. A sophisticated tool for managing virtual environments and development workflows.",
    tags: ["Under Development"],
    repoUrl: "https://github.com/opendev-labs/void",
    version: "1.1.2_CORE"
  },
  {
    title: "Quantum-NLP",
    slug: "quantum-nlp",
    description: "Quantum Native Natural Language Processing experiments utilizing PyTorch, Transformers, PennyLane, and Qiskit for hybrid quantum-classical models.",
    tags: ["Under Development"],
    repoUrl: "https://github.com/opendev-labs/Quantum-NLP",
    version: "0.1.0_ALPHA"
  }
];
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

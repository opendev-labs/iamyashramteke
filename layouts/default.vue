<template>
  <div class="layout">
    <!-- Navigation -->
    <nav class="nav">
      <div class="nav-container">
        <div class="nav-logo">
          <NuxtLink to="/" class="logo-link">
            <span class="logo-text">opendev-labs</span>
            <span class="logo-version">v1.0.0</span>
          </NuxtLink>
        </div>
        
        <div class="nav-search">
             <!-- Placeholder for search -->
        </div>
        
        <div class="nav-actions">
          <ThemeToggle />
          <NuxtLink to="https://github.com/opendev-labs" class="nav-action-btn" target="_blank">
            GitHub
          </NuxtLink>
        </div>
      </div>
    </nav>
    
    <!-- Main Content -->
    <div class="main-container">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-header">
          <h3 class="sidebar-title">Documentation</h3>
        </div>
        
        <nav class="sidebar-nav">
          <div class="nav-section">
            <h4 class="nav-section-title">Getting Started</h4>
            <ul class="nav-list">
              <li><NuxtLink to="/" class="nav-link" active-class="active">Home</NuxtLink></li>
            </ul>
          </div>
          
           <!-- Dynamic Navigation from Content -->
           <!-- <ContentNavigation v-slot="{ navigation }">
            <div v-for="link of navigation" :key="link._path" class="nav-section">
               <h4 class="nav-section-title" v-if="link.children">{{ link.title }}</h4>
               <ul class="nav-list" v-if="link.children">
                 <li v-for="child of link.children" :key="child._path">
                   <NuxtLink :to="child._path" class="nav-link" active-class="active">
                     {{ child.title }}
                   </NuxtLink>
                 </li>
               </ul>
               <ul class="nav-list" v-else>
                   <li>
                       <NuxtLink :to="link._path" class="nav-link" active-class="active">
                           {{ link.title }}
                       </NuxtLink>
                   </li>
               </ul>
            </div>
          </ContentNavigation> -->

        </nav>
      </aside>
      
      <!-- Content Area -->
      <main class="content">
        <div class="content-container">
          <slot />
        </div>
        
        <!-- Footer -->
        <footer class="content-footer">
          <div class="footer-content">
            <div class="footer-links">
              <a href="https://github.com/opendev-labs" class="footer-link">GitHub</a>
              <a href="mailto:contact@opendev-labs.com" class="footer-link">Contact</a>
            </div>
            <div class="footer-copyright">
              &copy; 2025 opendev-labs. Built with Nuxt.js.
            </div>
          </div>
        </footer>
      </main>
      
      <!-- Table of Contents -->
      <aside class="toc">
         <div class="toc-header">
            <h4 class="toc-title">On this page</h4>
         </div>
         <nav class="toc-nav">
            <!-- We will use a component approach or just simple content based rendering -->
         </nav>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Navigation */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 25, 47, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border-primary);
  height: 60px;
}

html[class="light-mode"] .nav {
    background: rgba(255, 255, 255, 0.95);
}

.nav-container {
  max-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-6);
}

.nav-logo .logo-link {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  text-decoration: none;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
}

.logo-version {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
  background: var(--color-surface-secondary);
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
}

.nav-search {
  flex: 1;
  max-width: 400px;
  margin: 0 var(--space-8);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.nav-action-btn {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.5rem 1rem;
  background: var(--color-surface-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nav-action-btn:hover {
  background: var(--color-surface-elevated);
  border-color: var(--color-accent-primary);
  color: var(--color-accent-primary);
}

/* Main Container */
.main-container {
  display: flex;
  min-height: calc(100vh - 60px);
  margin-top: 60px;
}

/* Sidebar */
.sidebar {
  width: 260px;
  flex-shrink: 0;
  border-right: 1px solid var(--color-border-primary);
  background: var(--color-surface-primary);
  overflow-y: auto;
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
}

.sidebar-header {
  padding: var(--space-6) var(--space-6) var(--space-4);
}

.sidebar-title {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-tertiary);
  margin-bottom: 0;
}

.sidebar-nav {
  padding: 0 var(--space-6) var(--space-8);
}

.nav-section {
  margin-bottom: var(--space-6);
}

.nav-section-title {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-2);
}

.nav-list {
  list-style: none;
}

.nav-list li {
  margin-bottom: var(--space-1);
}

.nav-link {
  display: block;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.nav-link:hover, .nav-link.active {
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
}

.nav-link.active {
  color: var(--color-accent-primary);
  font-weight: 500;
}

/* Content Area */
.content {
  flex: 1;
  min-width: 0;
  margin-left: 260px;
  margin-right: 280px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);
}

.content-container {
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: var(--space-12) var(--space-8);
  width: 100%;
}

/* Content Footer */
.content-footer {
  border-top: 1px solid var(--color-border-primary);
  padding: var(--space-8);
  background: var(--color-surface-primary);
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-links {
  display: flex;
  gap: var(--space-6);
}

.footer-link {
  font-size: 0.875rem;
  color: var(--color-text-tertiary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--color-accent-primary);
}

.footer-copyright {
  font-size: 0.875rem;
  color: var(--color-text-tertiary);
}

/* Table of Contents */
.toc {
  width: 280px;
  flex-shrink: 0;
  border-left: 1px solid var(--color-border-primary);
  background: var(--color-surface-primary);
  position: fixed;
  top: 60px;
  bottom: 0;
  right: 0;
  overflow-y: auto;
}

.toc-header {
  padding: var(--space-6) var(--space-6) var(--space-4);
}

.toc-title {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-tertiary);
  margin-bottom: 0;
}

/* Responsive */
@media (max-width: 1200px) {
  .toc {
    display: none;
  }
  
  .content {
    margin-right: 0;
  }
}

@media (max-width: 900px) {
  .sidebar {
    display: none;
  }
  
  .content {
    margin-left: 0;
  }
  
  .nav-search {
    display: none;
  }
}

@media (max-width: 768px) {
  .content-container {
    padding: var(--space-8) var(--space-4);
  }
  
  .footer-content {
    flex-direction: column;
    gap: var(--space-4);
    text-align: center;
  }
}
</style>

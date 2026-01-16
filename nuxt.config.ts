export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    // Enable SSG for documentation
    ssr: true,

    // Route rules for static generation
    routeRules: {
        '/': { prerender: true },
    },

    css: ['~/assets/css/main.css'],

    // Modules
    modules: [
        '@nuxt/content',
        '@nuxtjs/color-mode'
    ],

    // Content module configuration
    content: {
        documentDriven: false,
        highlight: {
            theme: {
                dark: 'github-dark',
                light: 'github-light'
            },
            preload: ['javascript', 'typescript', 'vue', 'bash', 'json', 'yaml']
        }
    },

    // Color mode configuration
    colorMode: {
        preference: 'dark',
        fallback: 'dark',
        dataValue: 'theme', // This maps to [data-theme="dark"] in our CSS
        classSuffix: '',
        storageKey: 'nuxt-color-mode'
    },

    // App configuration
    app: {
        // Only set baseURL if deploying to a subfolder like GitHub Pages
        // baseURL: '/iamyashramteke/', 
        head: {
            title: 'YASH R // RESEARCH CONSOLE',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Advanced systems-level engineering and research artifacts.' },
                { name: 'theme-color', content: '#020202' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap' }
            ]
        }
    },

    devtools: { enabled: true }
})

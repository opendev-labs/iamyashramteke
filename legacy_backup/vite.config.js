import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react()],
    base: '/iamyashramteke/', // Important for GitHub Pages
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                // We will keep the legacy index.html in public, which Vite serves as root.
                // But for the NEW dynamic page, we need an entry point.
                // Let's create a virtual entry point or an actual HTML file for 'my-work'.
                myWork: resolve(__dirname, 'src/pages/my-work/index.html')
            }
        }
    }
})

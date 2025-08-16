import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Konfigurasi Vite untuk GitHub Pages
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/portofolio/",
})

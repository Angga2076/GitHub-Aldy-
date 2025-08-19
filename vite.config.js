import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ✅ Tailwind v4 sudah pakai @tailwindcss/vite, jadi tidak perlu postcss.config.js
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

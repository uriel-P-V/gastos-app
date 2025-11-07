import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // ← Cambia esto a solo slash
  build: {
    outDir: 'dist'
  }
})

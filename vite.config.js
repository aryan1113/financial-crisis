import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/financial-crisis/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
  server: {
    port: 5173
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',                     // Root-relative paths
  build: {
    outDir: 'dist',              // Must match netlify.toml's publish
    emptyOutDir: true,           // Cleans dist folder before build
  },
  server: {
    port: 5173,                  // Must match netlify.toml
    strictPort: true             // Prevent automatic port switching
  }
})
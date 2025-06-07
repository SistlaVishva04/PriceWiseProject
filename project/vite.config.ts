import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',  // Explicitly set output directory
    emptyOutDir: true,  // Clear dist folder before build
  },
  base: './',  // Relative base path for proper asset loading
});
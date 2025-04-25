import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure assets use relative paths
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  base: './' // This ensures assets use relative paths
});
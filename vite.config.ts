import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/dev-portfolio/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

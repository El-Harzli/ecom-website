import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from other devices
    port: 5170,      // Port number (default for Vite)
  },
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@src' : '/src',
      '@components' : '/src/components',
      '@UI' : '/src/components/UI',
      '@Utils' : '/src/components/Utils'
    },
  },
});

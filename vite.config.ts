import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/test-task/',
  server: {
    port: 3001,
    proxy: {
      '/api/v1': 'http://localhost:5001/',
    },
  },
});

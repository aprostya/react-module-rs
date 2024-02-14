import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

const svgrPlugin = svgr({
  /**
   *
   * @param {boolean} exportAsDefault  Set it to `true` to export React component as default.
   * Notice that it will override the default behavior of Vite.
   */
  exportAsDefault: true,
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin],
  base: '/',
  server: {
    port: 3001,
    proxy: {
      '/api/v1': 'http://localhost:5001/',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "../src/shared/variables.scss";`,
      },
    },
  },
});

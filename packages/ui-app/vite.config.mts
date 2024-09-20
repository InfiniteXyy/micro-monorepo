import react from '@vitejs/plugin-react';
import { devPort } from '@xyz/lib-ui-core/config';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${devPort}`,
        changeOrigin: true,
      },
    },
  },
});

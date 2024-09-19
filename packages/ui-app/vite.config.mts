import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { devPort } from "@xyz/lib-ui-core/config";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: `http://localhost:${devPort}`,
        changeOrigin: true,
      },
    },
  },
});

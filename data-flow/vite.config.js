import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src-vue", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://exlusive-app-8.onrender.com",
        changeOrigin: true,
      },
    },
  },
  plugins: [react(), tailwindcss()],
});

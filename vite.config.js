import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { createHtmlPlugin } from "vite-plugin-html";
import sitemap from "vite-plugin-sitemap";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin(),
    tailwindcss(),
    sitemap({
      hostname: "https://labrioche.netlify.app/",
    }),
  ],
});

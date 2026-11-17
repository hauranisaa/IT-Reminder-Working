import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// base "./" membuat build bisa jalan di GitHub Pages dengan nama repo apa pun
export default defineConfig({
  base: "/IT-Reminder-Working/",
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
});

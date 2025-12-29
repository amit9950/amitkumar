import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./",  // ✅ सिर्फ ये change करें
  plugins: [react(), tailwindcss()],
});
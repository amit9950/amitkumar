import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/amitkumar/", // ✅ यह सही है अगर repo name "amitkumar" है
  plugins: [react(), tailwindcss()],
});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // if React
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // add this
  ],
});

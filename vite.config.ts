import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@data": path.resolve(__dirname, "src/data"),
    },
  },
});

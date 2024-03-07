// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// 
// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "./",
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      // Create a relative alias for the assets folder
      '@assets': './src/assets',
    }
  }
});

// vite.config.js (or vite.config.ts)
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
// Add framework-specific plugins if necessary, e.g., import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    // react(), // Example for React
    tailwindcss(),
  ],
});

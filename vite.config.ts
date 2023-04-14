import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['react-dnd-html5-backend.js', 'react-dnd.js']
  }

})

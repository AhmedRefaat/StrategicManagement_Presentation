import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Required because the site is hosted under:
  // https://ahmedrefaat.github.io/StrategicManagement_Presentation/
  base: '/StrategicManagement_Presentation/',

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
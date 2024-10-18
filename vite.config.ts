import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import favicon from 'vite-plugin-favicon';

export default defineConfig({
  plugins: [
    react(),
    favicon({
      logo: 'src/assets/icono_ng.png',
      favicons: {
        appName: 'Nicolás Guerra Portfolio',
        appDescription: 'Portafolio de Nicolás Guerra',
        developerName: 'Nicolás Guerra',
        developerURL: null,
        background: '#ddd',
        theme_color: '#333',
      }
    })
  ],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});

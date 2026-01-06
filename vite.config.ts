import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './dist',
    sourcemap: 'hidden',
    target: 'esnext',
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      layouts: path.resolve(__dirname, './src/layouts'),
      assets: path.resolve(__dirname, './src/assets'),
      views: path.resolve(__dirname, './src/views'),
      utils: path.resolve(__dirname, './src/utils'),
      theme: path.resolve(__dirname, './src/theme'),
    },
  },
});

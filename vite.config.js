import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: {
    // You can configure the SSR entry point
    entry: './src/entry-server.jsx',
  },
  build: {
    ssr: true, // Enable SSR build
    outDir: 'dist', // Specify the output directory
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.JPG'],
  base: '/chancellors-scholars-website/', // Base URL for GitHub Pages
  plugins: [react()],
})

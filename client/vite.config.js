import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.lottie'] // Looks for files ending with .lottie in inside any folder and treat them as assets just like images
})

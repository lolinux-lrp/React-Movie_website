import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //base: '/React-Movie_website/',  // ← same as your repo name
  plugins: [react(), tailwindcss()],
})

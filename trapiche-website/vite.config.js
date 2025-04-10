import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/trapiche-web/', // Esto indica que la aplicación se ejecutará en /trapiche-web/
})
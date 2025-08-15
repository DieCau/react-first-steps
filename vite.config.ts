// import { defineConfig } from 'vite'
// Agregar para los testing (1)
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Agregar para los testing (2)
  test: {
    environment: 'jsdom',
    globals: true
  }
})

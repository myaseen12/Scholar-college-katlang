import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Bind to all interfaces (IPv4 + IPv6) so the app is reliably reachable
    // via both `localhost` and `127.0.0.1`.
    host: true,
    // If port 5173 is busy, automatically use the next available port instead
    // of failing to start.
    strictPort: false,
  },
  preview: {
    host: true,
    strictPort: false,
  },
})

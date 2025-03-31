import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ghPages(), // เพิ่มปลั๊กอินนี้
  ],
  base: 'chewchew007.github.io', // แทนที่ <REPO_NAME> ด้วยชื่อ repository ของคุณ
})

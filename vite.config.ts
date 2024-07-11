/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import MillionLint from "@million/lint";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy(),
    MillionLint.vite()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  define: {
    global: {},
  },
})
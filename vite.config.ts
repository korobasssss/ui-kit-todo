/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), dts({
    insertTypesEntry: true,
    outDir: 'dist',
    include: ['src/**/*'],
    exclude: ['**/*.stories.tsx']
  })],
  build: {
    outDir: "dist",
    lib: {
      entry: 'src/main.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'css-loader': 'css-loader'
        },
        entryFileNames: '[name].js',
        assetFileNames: '[name][extname]',
      },
    },
  },
})

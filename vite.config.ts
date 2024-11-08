import { defineConfig } from 'vite'
import dts from "vite-plugin-dts";
import path from "path";
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
        '@': '/src'
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "ReactTSLib",
      formats: ["es", "umd"],
      fileName: (format) => `react-ts-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "classnames"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "classnames": "cx",
        },
      },
    },
  },
})

import { defineConfig } from 'vite'
import svgLoader from "vite-svg-loader";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/rayapp/',
  plugins: [vue(), svgLoader()],
});
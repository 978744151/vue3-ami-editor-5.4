import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import veauryVitePlugins from 'veaury/vite/index.js'
// import checker from 'vite-plugin-checker';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue(),
    vueJsx(),
    veauryVitePlugins({
      type: 'vue'
    }),
    // checker({
    //   vueTsc: true,
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { YiResolver } from '@yixianzi/resolver'
// <https://vitejs.dev/config/>
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers:[
        YiResolver()
      ]
    }),
    AutoImport({
      resolvers: [
        YiResolver()
      ]
    })
  ]
})

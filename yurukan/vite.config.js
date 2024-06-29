import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: process.env.PORT || 3000, // HerokuのPORT環境変数を使用
    strictPort: true, // 指定したポート以外を使用しない
    host: true // 外部からアクセス可能にする
  }
})

// vite.config.js
import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";

export default defineConfig({
  plugins: [ViteEjsPlugin()],
  // ビルド設定（以前お伝えしたベースパスの設定などもここに追加できます）
  base: "./",
});

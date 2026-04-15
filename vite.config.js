import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import FullReload from "vite-plugin-full-reload";
import path from "path";

export default defineConfig({
  // 1. 本番環境のパス設定（どこにアップロードしても動くように相対パス化）
  base: "./",

  // 2. フォルダの場所を分かりやすくする設定（エイリアス）
  resolve: {
    alias: {
      // 「@」と書くだけで src フォルダを指すようになります
      "@": path.resolve(__dirname, "src"),
    },
  },

  // 3. SCSSに関する便利な設定
  css: {
    preprocessorOptions: {
      scss: {
        // @use "@/scss/global/variables" as v;
        // などの記述でファイルを探せるようにします
        includePaths: [path.resolve(__dirname, "src/scss")],

        /* もし、すべてのSCSSファイルで共通して変数を使いたい場合は、
        以下のコメントアウトを外すと、各ファイルでの@use記述が不要になります。
        */
        // additionalData: `@use "@/scss/global/variables" as v;`
      },
    },
  },

  // 4. プラグイン設定
  plugins: [ViteEjsPlugin(), FullReload(["src/**/*.ejs"])],

  // 5. 開発サーバーの設定
  server: {
    open: true, // 実行時に自動でブラウザを開く
    // EJSの変更を検知しやすくするための設定
    watch: {
      usePolling: true,
    },
  },

  // 6. ビルド後の整理（任意）
  build: {
    outDir: "dist", // 出力先フォルダ名
    assetsDir: "assets", // JSやCSSがまとまるフォルダ名
  },
});

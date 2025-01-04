import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
//引入 svg 需要用到插件
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 设置 @ 符号指向 src 目录
    },
  },
  server: {
    open: true, // 设置为 true，启动时自动打开浏览器
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@/styles/variables.scss";`, // 引入全局 SCSS 文件
      },
    },
  },
});

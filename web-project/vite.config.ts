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
    // port: 3000, // 设置端口号
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 这个路径是相对你的项目根目录的
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
  // 静态资源基础路径 base: './' || '',
  // base: '/h5', // 子目录
  base: process.env.NODE_ENV === "production" ? "./" : "/",

});

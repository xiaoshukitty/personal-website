import { SET_LOCAL_STORAGE, GET_LOCAL_STORAGE } from "../../utils/storage";
import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => {
    // 检查 localStorage，如果有则使用，若没有则根据系统主题自动设置
    const savedTheme = GET_LOCAL_STORAGE("themeColor") as
      | "light"
      | "dark"
      | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    return {
      themeColor: savedTheme || systemTheme, // 如果有保存的主题，则使用；没有则使用系统主题
    };
  },
  actions: {
    toggleTheme() {
      // 切换主题
      this.themeColor = this.themeColor === "light" ? "dark" : "light";
      this.applyTheme();
    },
    applyTheme() {
      // 根据当前主题设置添加/移除 body 的类
      document.documentElement.setAttribute("data-theme", this.themeColor);
      // 将当前主题保存到 localStorage
      SET_LOCAL_STORAGE("themeColor", this.themeColor);
    },
    getTheme() {
      document.documentElement.setAttribute("data-theme", this.themeColor);
    },
  },
});

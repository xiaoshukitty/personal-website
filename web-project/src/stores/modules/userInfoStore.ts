import { defineStore } from "pinia";

/**
 * 用户信息存储
 */
export const useUserInfoStore = defineStore("userInfo", {
  state: () => ({
    token: localStorage.getItem("token") || "", // 从 localStorage 获取 token
  }),
  actions: {
    // 设置 token
    setToken(token: string) {
      this.token = token;
      localStorage.setItem("token", token);
    },
    // 清除 token
    clearToken() {
      this.token = "";
      localStorage.removeItem("token");
    },
  },
});

import { Router } from "vue-router";
import { startProgress, doneProgress } from "@/utils/nprogress"; // 引入进度条函数
// import { useUserInfoStore } from "@/stores/modules/userInfoStore"; // 假设使用 Pinia 来管理用户状态

export function setupPermissionGuard(router: Router) {
  // 全局前置守卫
  router.beforeEach((to, from, next) => {
    startProgress(); // 开始进度条
    const token = "2222";

    if (to.meta.requiresAuth && !token) {
      next({ name: "Login" });
    } else {
      next();
    }
  });

  // 全局后置守卫
  router.afterEach((to, from, next) => {
    doneProgress(); // 结束进度条
  });

  // 可以添加更多的路由守卫逻辑，例如权限控制、动态路由等
}

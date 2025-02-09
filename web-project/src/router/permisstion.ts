import { Router } from "vue-router";
import setting from "../setting";
// import { useUserInfoStore } from "@/stores/modules/userInfoStore"; // 假设使用 Pinia 来管理用户状态

export function setupPermissionGuard(router: Router) {
  // 全局前置守卫
  router.beforeEach((to, from, next) => {
    const token = "2222";
    document.title = `${setting.title} - ${to.meta.title}`;
    if (to.meta.requiresAuth && !token) {
      next({ name: "Login" });
    } else {
      next();
    }
  });

  // 全局后置守卫
  router.afterEach((to, from, next) => {});

  // 可以添加更多的路由守卫逻辑，例如权限控制、动态路由等
}

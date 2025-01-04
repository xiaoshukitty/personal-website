// 通过 vue-router 插件实现路由配置
import { createRouter, createWebHashHistory } from "vue-router";
import commonRoutes from "./commonRoutes"; //引入所有的路由
import { setupPermissionGuard } from "./permisstion"; // 引入路由守卫

//创建路由器
const router = createRouter({
  // 路由模式
  history: createWebHashHistory(), //hash 模式
  routes: commonRoutes,
  //滚动行为(路由切换)
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});

// 设置权限守卫
setupPermissionGuard(router);

export default router;

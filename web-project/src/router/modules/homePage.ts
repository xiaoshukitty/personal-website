import type { RouteRecordRaw } from "vue-router";

const homePage: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Layout",
    component: () => import("@/layout/index.vue"), // 这里设置为 Layout 作为根组件
    meta: {
      title: "首页",
      keepAlive: true,
      affix: true,
      requiresAuth: true, // 这个页面需要认证才能访问
    },
  },
  {
    path: "/articles",
    name: "articles",
    component: () => import("@/view/articles/index.vue"),
    meta: {
      title: "文章",
      keepAlive: true,
      affix: true,
      requiresAuth: true, // 这个页面需要认证才能访问
    },
  },
];

export default homePage;

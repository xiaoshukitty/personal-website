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
    redirect: "/homeMain",
    children: [
      {
        path: "homeMain",
        component: () => import("@/view/homeMain/index.vue"),
        meta: {
          title: "首页",
          keepAlive: true,
          requiresAuth: true,
        },
      },
      {
        path: "blogsData",
        component: () => import("@/view/blogsData/index.vue"),
        meta: {
          title: "归档",
          keepAlive: true,
          requiresAuth: true,
        },
      },
      {
        path: "about",
        component: () => import("@/view/about/index.vue"),
        meta: {
          title: "关于",
          keepAlive: true,
          requiresAuth: true,
        },
      },
      {
        path: "categoryArticles",
        component: () => import("@/view/categoryArticles/index.vue"),
        meta: {
          title: "类别",
          keepAlive: true,
          requiresAuth: true,
        },
      },
      {
        path: "articleDetails",
        component: () => import("@/view/articleDetails/index.vue"),
        meta: {
          title: "文章详情",
          keepAlive: true,
          requiresAuth: true,
        },
      },
      /** 功能 */
      {
        path: "aiFeatures",
        component: () => import("@/view/aiFeatures/index.vue"),
        meta: {
          title: "ai功能",
          keepAlive: true,
          requiresAuth: true,
        },
      },
    ],
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

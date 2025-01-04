// src/utils/nprogress.ts
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // 引入 NProgress 的样式

// 配置 NProgress
NProgress.configure({ showSpinner: false }); // 不显示小的旋转图标

export function startProgress() {
  NProgress.start(); // 开始进度条
}

export function doneProgress() {
  NProgress.done(); // 结束进度条
}

export function setProgress(value: number) {
  NProgress.set(value); // 设置进度条的百分比
}

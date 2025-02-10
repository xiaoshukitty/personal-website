// src/directives/v-img-loader.ts
import loadingGIF from "../assets/images/loading.gif";
export default {
  beforeMount(el: HTMLImageElement, binding: any) {
    const proxyImage = binding.arg || loadingGIF; // 默认占位图
    const realImage = binding.value;
    // https://static.2ge.org/gif/2023/10/86a79700e14cccea92def5ed92960aaf.gif
    // https://img0.baidu.com/it/u=1077282731,2234353719&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800
    // 设置占位图
    el.src = proxyImage;

    // 图片加载完成后更新为真实图片
    const img = new Image();
    img.src = realImage;
    img.onload = () => {
      // 定时器是为了测试图片占位
      setTimeout(() => {
        el.src = realImage;
      }, 1000);
    };

    // 图片加载失败时替换为错误图
    img.onerror = () => {
      el.src =
        "https://q3.itc.cn/q_70/images03/20241013/d3a77cba5a074744905d0c49aa480487.jpeg"; // 错误图片
    };
  },
};

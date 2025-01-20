import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import pinia from "./stores/index";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import router from "./router/index";
//引入全局样式
import "@/styles/index.scss";
import imgLoader from "./directives/v-img-loader";

import SvgIcon from "@/components/SvgIcon/src/index.vue";
import ProgressBar from "@/components/ProgressBar/index.vue";

import "virtual:svg-icons-register"; // svg需要的插件// svg需要的插件

const app = createApp(App);

app.component("SvgIcon", SvgIcon); // 全局注册 SvgIcon 组件
app.component("ProgressBar", ProgressBar); // 全局注册进度条组件

app.directive("img-loader", imgLoader); // 注册全局指令 v-img-loader

app.use(pinia);
app.use(Antd);
app.use(router);

app.mount("#app");

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import pinia from "./stores/index";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import router from "./router/index";
import "@/styles/nprogress.scss";

import SvgIcon from "@/components/SvgIcon/src/index.vue";

import "virtual:svg-icons-register"; // svg需要的插件// svg需要的插件

const app = createApp(App);

app.component("SvgIcon", SvgIcon); // 全局注册 SvgIcon 组件

app.use(pinia);
app.use(Antd);
app.use(router);

app.mount("#app");

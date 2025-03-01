// utils/message.ts
import { message } from "ant-design-vue";
import type { MessageInstance } from "ant-design-vue/es/message/interface";

// 设置默认配置
message.config({
  duration: 2, // 默认 2 秒后关闭
  maxCount: 3, // 最多显示 3 条消息
});

// 定义 message 类型
export interface MessageApi {
  success: (msg: string) => void;
  error: (msg: string) => void;
  info: (msg: string) => void;
  warning: (msg: string) => void;
  loading: (msg: string) => void;
}

// 封装 message 方法，返回带类型的方法
const useMessage = (): MessageApi => {
  return {
    success: (msg) => message.success(msg),
    error: (msg) => message.error(msg),
    info: (msg) => message.info(msg),
    warning: (msg) => message.warning(msg),
    loading: (msg) => message.loading(msg),
  };
};

export default useMessage;

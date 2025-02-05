// 导出一个函数，用于设置sessionStorage
export const SET_SESSION_STORAGE = (key: string, value: any) => {
  // 将value转换为JSON字符串，并存储到sessionStorage中
  sessionStorage.setItem(key, JSON.stringify(value));
};

// 导出一个函数，用于获取sessionStorage中的数据
export const GET_SESSION_STORAGE = (key: string) => {
  // 从sessionStorage中获取指定key的值，并将其解析为JSON格式
  return JSON.parse(sessionStorage.getItem(key) as string);
};

// 导出一个函数，用于删除sessionStorage中的指定key
export const REMOVE_SESSION_STORAGE = (key: string) => {
  // 从sessionStorage中删除指定key
  sessionStorage.removeItem(key);
};

// 导出一个函数，用于将value转换为JSON字符串，并存储到localStorage中
export const SET_LOCAL_STORAGE = (key: string, value: any) => {
  // 将value转换为JSON字符串，并存储到localStorage中
  localStorage.setItem(key, JSON.stringify(value));
};

// 导出一个函数，用于从localStorage中获取指定key的值，并将其解析为JSON格式
export const GET_LOCAL_STORAGE = (key: string) => {
  // 从localStorage中获取指定key的值，并将其解析为JSON格式
  return JSON.parse(localStorage.getItem(key) as string);
};

// 导出一个函数，用于从localStorage中删除指定key
export const REMOVE_LOCAL_STORAGE = (key: string) => {
  // 从localStorage中删除指定key
  localStorage.removeItem(key);
};

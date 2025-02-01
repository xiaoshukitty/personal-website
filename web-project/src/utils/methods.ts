/**
 *
 * @returns 随机生成一个颜色
 */
export const getRandomRgbColor = (): string => {
  const r = Math.floor(Math.random() * 256); // 随机红色值
  const g = Math.floor(Math.random() * 256); // 随机绿色值
  const b = Math.floor(Math.random() * 256); // 随机蓝色值
  return `rgb(${r}, ${g}, ${b})`; // 返回 RGB 格式的颜色
};

/**
 * 防抖函数
 * @param fn 出发事件的函数
 * @param delay 时间间隔
 * @returns 
 * debounce 函数会在事件停止触发一段时间后执行，适用于需要等待用户停止操作的场景（如输入框输入时的实时搜索）。
 * 
 * 使用方法
const search = (query: string) => {
  console.log('Searching for:', query);
};
const debouncedSearch = debounce(search, 500);
debouncedSearch('hello');  // 会延迟500ms后执行
debouncedSearch('world');  // 会清除上一次调用，重新计时
 * 
 */
export const debounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer); // 清除上一个定时器
    timer = setTimeout(() => fn(...args), delay); // 设置新的定时器
  };
};

/**
 * 截流函数
 * 
 * @param fn 触发事件的函数
 * @param wait  时间间隔
 * @returns 
 * throttle 函数会确保事件在一定时间内只执行一次，适用于需要频繁触发但不需要立即执行的场景（如滚动、resize 等）
 * 
 * const logScroll = () => {
  console.log('Scrolling...');
};
const throttledScroll = throttle(logScroll, 1000);
window.addEventListener('scroll', throttledScroll);
 */
export const throttle = <T extends (...args: any[]) => void>(
  fn: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let lastTime = 0;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastTime >= wait) {
      fn(...args);
      lastTime = now;
    }
  };
};

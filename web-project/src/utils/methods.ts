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

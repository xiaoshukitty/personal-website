/**
 *
 * @param type 类型 'yyyy-MM-dd' | 'yyyy-MM-dd HH:mm:ss'
 * @param week 是否显示星期
 * @returns
 */
export const getCurrentDate = <T>(type: T, week?: boolean): T | undefined => {
  const cureenDateObj = {
    "yyyy-MM-dd": () => {
      const cureenWeekDay = weekDay();
      if (week) {
        return (
          new Date().toLocaleDateString().replace(/\//g, "-") +
          " " +
          cureenWeekDay
        );
      }
    },
    "yyyy-MM-dd HH:mm:ss": () => {
      return new Date().toLocaleString().replace(/\//g, "-");
    },
  } as any;
  return cureenDateObj[type]();
};

/**
 * 获取当前星期几
 * @param {Date} date - 日期对象
 * @returns {string} 当前星期几的中文表示
 */
const weekDay = (): string => {
  var date = new Date();
  var weekDays = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  return weekDays[date.getDay()];
};

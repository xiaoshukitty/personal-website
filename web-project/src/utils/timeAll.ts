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

/**
 *
 * @param dateString 日期字符串
 * @param type  类型
 * @returns    返回提取的日期部分
 */
export const extractionDate = (
  dateString: string,
  type:
    | "yyyy"
    | "month"
    | "day"
    | "hour"
    | "minute"
    | "second"
    | "yyyy/mm"
    | "mm/dd"
    | "yyyy-MM-dd"
): string | number => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const extractionDateObj = {
    yyyy: () => year,
    month: () => month,
    day: () => day,
    hour: () => hours,
    minute: () => minutes,
    second: () => seconds,
    "yyyy/mm": () => `${year}/${month.toString().padStart(2, "0")}`, // 'yyyy/mm' format
    "mm/dd": () =>
      `${month.toString().padStart(2, "0")}/${day.toString().padStart(2, "0")}`, // 'mm/dd' format
    "yyyy-MM-dd": () =>
      `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`,
  };

  return extractionDateObj[type]();
};

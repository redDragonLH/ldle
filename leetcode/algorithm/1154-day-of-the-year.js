/**
 * 1154. 一年中的第几天
 *
 * 给你一个字符串 date ，按 YYYY-MM-DD 格式表示一个 现行公元纪年法 日期。请你计算并返回该日期是当年的第几天。
 *
 * 通常情况下，我们认为 1 月 1 日是每年的第 1 天，1 月 2 日是每年的第 2 天，依此类推。每个月的天数与现行公元纪年法（格里高利历）一致。
 */

/**
 * 年就是注意闰年,月日注意对应月份日期的不一样
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  let dayOfMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let [year, month, day] = date.split("-");
  year = parseInt(year);
  month = parseInt(month);
  day = parseInt(day);
  if (year != 1900 && year % 4 == 0) {
    dayOfMonths[2] += 1;
  }
  let result = 0;
  while (month > 1) {
    result += dayOfMonths[--month];
  }
  result += day;
  return result;
};

/**
 * 执行用时：212 ms, 在所有 JavaScript 提交中击败了23.23%的用户
 * 内存消耗：47 MB, 在所有 JavaScript 提交中击败了80.00%的用户
 */
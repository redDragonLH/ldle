/**
 * 1185. 一周中的第几天
 * 
 * 给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。
 * 输入为三个整数：day、month 和 year，分别表示日、月、年。
 * 您返回的结果必须是这几个值中的一个 {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}。
 */
/**
 * 模拟
 * 
 * 确认最初始一天是星期几，然后计算从这天到需要计算的那天一共多少天，除以7，比较复杂的是闰月的问题
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
    // 周
    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    // 每月多少天
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    /* 输入年份之前的年份的天数贡献 */
    let days = 365 * (year - 1971) + Math.floor((year - 1969) / 4);
    /* 输入年份中，输入月份之前的月份的天数贡献 */
    for (let i = 0; i < month - 1; ++i) {
        days += monthDays[i];
    }
    if ((year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) && month >= 3) {
        days += 1;
    }
    /* 输入月份中的天数贡献 */
    days += day;
    return week[(days + 3) % 7];
}
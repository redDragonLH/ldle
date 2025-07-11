/**
 * 3169. 无需开会的工作日
 *
 * 给你一个正整数 days，表示员工可工作的总天数（从第 1 天开始）。另给你一个二维数组 meetings，长度为 n，其中 meetings[i] = [start_i, end_i] 表示第 i 次会议的开始和结束天数（包含首尾）。
 * 返回员工可工作且没有安排会议的天数。
 * 注意：会议时间可能会有重叠。
 */

/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
    // 创建一个长度为 days 的数组，初始化为 true，表示每一天都可以工作
    const workDays = new Array(days).fill(true);

    // 遍历每个会议
    for (const [start, end] of meetings) {
        // 将会议期间的工作日标记为 false
        for (let i = start - 1; i < end; i++) {
            workDays[i] = false;
        }
    }

    // 计算没有会议的工作日数量
    return workDays.filter(day => day).length;
};
/**
 * 超内存
 */
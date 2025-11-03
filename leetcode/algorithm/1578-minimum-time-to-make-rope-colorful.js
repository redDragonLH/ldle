/**
 * 1578. 使绳子变成彩色的最短时间
 *
 * Alice 把 n 个气球排列在一根绳子上。给你一个下标从 0 开始的字符串 colors ，其中 colors[i] 是第 i 个气球的颜色。
 * Alice 想要把绳子装扮成 五颜六色的 ，且她不希望两个连续的气球涂着相同的颜色，所以她喊来 Bob 帮忙。Bob 可以从绳子上移除一些气球使绳子变成 彩色 。给你一个 下标从 0 开始 的整数数组 neededTime ，其中 neededTime[i] 是 Bob 从绳子上移除第 i 个气球需要的时间（以秒为单位）。
 * 返回 Bob 使绳子变成 彩色 需要的 最少时间 。
 */
/**
 * 贪心
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  let totalCost = 0;
  let maxTime = 0;

  for (let i = 0; i < colors.length; i++) {
    if (i > 0 && colors[i] === colors[i - 1]) {
      totalCost += Math.min(maxTime, neededTime[i]);
      maxTime = Math.max(maxTime, neededTime[i]);
    } else {
      maxTime = neededTime[i];
    }
  }

  return totalCost;
};
/**
 * 执行用时：4 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：66.30 MB, 在所有 JavaScript 提交中击败了15.38%的用户
 */

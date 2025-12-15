/**
 * 2110. 股票平滑下跌阶段的数目
 *
 * 给你一个整数数组 prices ，表示一支股票的历史每日股价，其中 prices[i] 是这支股票第 i 天的价格。
 * 一个 平滑下降的阶段 定义为：对于 连续一天或者多天 ，每日股价都比 前一日股价恰好少 1 ，这个阶段第一天的股价没有限制。
 * 请你返回 平滑下降阶段 的数目。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (prices) {
  let n = prices.length;
  let result = 0;
  let count = 1; // 当前平滑下降阶段的长度
  // 遍历价格数组
  // 从第二天开始比较
  //
  for (let i = 1; i < n; i++) {
    if (prices[i] === prices[i - 1] - 1) {
      count++; // 如果是平滑下降，增加阶段长度
    } else {
      // 计算当前阶段的平滑下降子段数目并累加到结果中
      result += (count * (count + 1)) / 2;//计算“区间”或“组合”的数量
      count = 1; // 重置阶段长度
    }
  }
  // 处理最后一个阶段,最后一段超过for的范围
  result += (count * (count + 1)) / 2;
  return result;
};
/**
 * 执行用时 :4 ms, 在所有 JavaScript 提交中击败了97.44%的用户
 * 内存消耗 :66.70 MB, 在所有 JavaScript 提交中击败了66.67%的用户
 */
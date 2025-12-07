/**
 * 1523. 在区间范围内统计奇数数目
 *
 * 给你两个非负整数 low 和 high 。请你返回 low 和 high 之间（包括二者）奇数的数目。
 */
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  // 计算从0到n的奇数个数
  const countUpTo = (n) => {
    return Math.floor((n + 1) / 2);
  };
  return countUpTo(high) - countUpTo(low - 1);
};
/**
 * 执行用时 :0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :54.54 MB, 在所有 JavaScript 提交中击败了12.96%的用户
 */
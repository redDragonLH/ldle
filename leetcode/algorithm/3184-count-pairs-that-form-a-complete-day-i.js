/**
 * 3184. 构成整天的下标对数目 I
 *
 * 给你一个整数数组 hours，表示以 小时 为单位的时间，返回一个整数，表示满足 i < j 且 hours[i] + hours[j] 构成 整天 的下标对 i, j 的数目。
 * 整天 定义为时间持续时间是 24 小时的 整数倍 。
 * 例如，1 天是 24 小时，2 天是 48 小时，3 天是 72 小时，以此类推。
 */

/**
 * 经典双循环
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
  let res = 0;
  for (let i = 0; i < hours.length; i++) {
    for (let j = i + 1; j < hours.length; j++) {
      if ((hours[i] + hours[j]) % 24 === 0) {
        res++;
      }
    }
  }
  return res;
};
/**
 * 执行用时: 2 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗: 50.92 MB, 在所有 JavaScript 提交中击败了21.15%的用户
 */
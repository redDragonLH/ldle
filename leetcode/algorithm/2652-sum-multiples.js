/**
 * 2652. 倍数求和
 *
 * 给你一个正整数 n ，请你计算在 [1，n] 范围内能被 3、5、7 整除的所有整数之和。
 * 返回一个整数，用于表示给定范围内所有满足约束条件的数字之和。
 */
/**
 * 暴力写法
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (!(i % 3) || !(i % 5) || !(i % 7)) {
      result += i;
    }
  }
  return result;
};
/**
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了28.26%的用户
 * 内存消耗：40.59 MB, 在所有 JavaScript 提交中击败了43.48%的用户
 */
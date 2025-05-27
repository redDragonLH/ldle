/**
 * 2894. 分类求和并作差
 *
 * 给你两个正整数 n 和 m 。
 * 现定义两个整数 num1 和 num2 ，如下所示：
 *  * num1：范围 [1, n] 内所有 无法被 m 整除 的整数之和。
 *  * num2：范围 [1, n] 内所有 能够被 m 整除 的整数之和。
 * 返回整数 num1 - num2 。
 */

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  // 计算 num1
  let num1 = 0;
  for (let i = 1; i <= n; i++) {
    if (i % m !== 0) {
      num1 += i;
    }
  }

  // 计算 num2
  let num2 = 0;
  for (let i = m; i <= n; i += m) {
    num2 += i;
  }

  // 返回 num1 - num2
  return num1 - num2;
};
/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：54.63 MB, 在所有 JavaScript 提交中击败了82.61%的用户
 */
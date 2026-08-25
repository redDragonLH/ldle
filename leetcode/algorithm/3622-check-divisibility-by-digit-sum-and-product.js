/**
 * 3622. 判断整除性
 * 给你一个正整数 n。请判断 n 是否可以被以下两值之和 整除：
 *  * n 的 数字和（即其各个位数之和）。
 *  * n 的 数字积（即其各个位数之积）。
 *  如果 n 能被该和整除，返回 true；否则，返回 false。
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
  const digits = String(n).split("").map(Number);
  const digitSum = digits.reduce((sum, digit) => sum + digit, 0);
  const digitProduct = digits.reduce((product, digit) => product * digit, 1);
  const divisor = digitSum + digitProduct;
  return n % divisor === 0;
};
/**
 * 执行用时 :0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :55.63 MB, 在所有 JavaScript 提交中击败了33.33%的用户
 */
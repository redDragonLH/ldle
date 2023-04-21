/**
 * 2413. 最小偶倍数
 *
 * 给你一个正整数 n ，返回 2 和 n 的最小公倍数（正整数）。
 */

/**
 * 如果不是n本身就是n的2倍吧?
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  if (!(n % 2)) return n;
  return n * 2;
};

/**
 * 2427. 公因子的数目
 *
 * 给你两个正整数 a 和 b ，返回 a 和 b 的 公 因子的数目。
 *
 * 如果 x 可以同时整除 a 和 b ，则认为 x 是 a 和 b 的一个 公因子 。
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  let max = a > b ? b : a;
  let result = 0;
  while (max) {
    if (!max) return result;

    if (Number.isInteger(a / max) && Number.isInteger(b / max)) {
      result++;
    }
    max--;
  }
  return result;
};

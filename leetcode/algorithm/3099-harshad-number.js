/**
 * 3099. 哈沙德数
 *
 * 如果一个整数能够被其各个数位上的数字之和整除，则称之为 哈沙德数（Harshad number）。给你一个整数 x 。如果 x 是 哈沙德数 ，则返回 x 各个数位上的数字之和，否则，返回 -1 。
 */

/**
 * 数字量应该挺少
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
  let dividend = x;
  let divisor = 0;
  while (x) {
    divisor += x % 10;
    x = Math.floor(x / 10);
  }
  return dividend % divisor === 0 ? divisor : -1;
};
/**
 * 执行用时：55 ms, 在所有 JavaScript 提交中击败了62.43%的用户
 * 内存消耗：48.98 MB, 在所有 JavaScript 提交中击败了69.36%的用户
 */
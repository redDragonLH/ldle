/**
 * 66. 加一
 *
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 */

/**
 * 注意下+1的数是否为9就可以了
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length;
  if (!len) return [1];
  let one = 1;
  for (let i = len - 1; i >= 0; i--) {
    if (!one) return digits;
    digits[i] += one;
    if (digits[i] <= 9) {
      one = 0;
    } else {
      digits[i] = 0;
    }
  }
  if (one) digits.unshift(1);
  return digits;
};
/**
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了53.55%的用户
 * 内存消耗：37.7 MB, 在所有 JavaScript 提交中击败了85.57%的用户
 */

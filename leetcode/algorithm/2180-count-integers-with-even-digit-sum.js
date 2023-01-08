/**
 * 2180. 统计各位数字之和为偶数的整数个数
 *
 * 给你一个正整数 num ，请你统计并返回 小于或等于 num 且各位数字之和为 偶数 的正整数的数目。
 *
 * 正整数的 各位数字之和 是其所有位上的对应数字相加的结果。
 */

/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    let str = i.toString().split("");
    let count = 0;
    for (const item of str) {
      count += parseInt(item);
    }
    if (!(count % 2)) result++;
  }
  return result;
};
/**
 * 执行用时：52 ms, 在所有 JavaScript 提交中击败了98.51%的用户
 * 内存消耗：42.8 MB, 在所有 JavaScript 提交中击败了50.75%的用户
 */

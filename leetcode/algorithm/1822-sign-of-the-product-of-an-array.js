/**
 * 1822. 数组元素积的符号
 *
 * 已知函数 signFunc(x) 将会根据 x 的正负返回特定值：
 *  * 如果 x 是正数，返回 1 。
 *  * 如果 x 是负数，返回 -1 。
 *  * 如果 x 是等于 0 ，返回 0 。
 *
 * 给你一个整数数组 nums 。令 product 为数组 nums 中所有元素值的乘积。
 * 返回 signFunc(product) 。
 */

/**
 * 这耿直的思路有些问题,就是可能超过了最大数字限制
 * 所以还是遍历元素内容好一点~~
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  return signFunc(nums.reduce((x, y) => x * y));
};

const signFunc = (num) => {
  if (!num) return num;
  return num > 0 ? 1 : -1;
};

/**
 * 负数是奇数个则是负数,有0则乘机必然是零
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let isNegative = 0;
  let len = nums.length;
  if (!len) return 0;
  for (const num of nums) {
    if (num === 0) return 0;
    if (num < 0) isNegative++;
  }
  return isNegative % 2 ? -1 : 1;
};
/**
 * 执行用时：56 ms, 在所有 JavaScript 提交中击败了88.32%的用户
 * 内存消耗：42.9 MB, 在所有 JavaScript 提交中击败了12.15%的用户
 */
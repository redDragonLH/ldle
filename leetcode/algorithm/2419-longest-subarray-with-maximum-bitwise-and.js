/**
 * 2419. 按位与最大的最长子数组
 *
 * 给你一个长度为 n 的整数数组 nums 。
 * 考虑 nums 中进行 按位与（bitwise AND）运算得到的值 最大 的 非空 子数组。
 *  * 换句话说，令 k 是 nums 任意 子数组执行按位与运算所能得到的最大值。那么，只需要考虑那些执行一次按位与运算后等于 k 的子数组。
 * 返回满足要求的 最长 子数组的长度。
 * 数组的按位与就是对数组中的所有数字进行按位与运算。
 * 子数组 是数组中的一个连续元素序列。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let maxAnd = 0;
  let maxLength = 0;
  let currentLength = 0;

  for (let i = 0; i < nums.length; i++) {
    maxAnd = Math.max(maxAnd, nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === maxAnd) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 0;
    }
  }

  return maxLength;
};
/**
 * 执行用时：3 ms, 在所有 JavaScript 提交中击败了91.67%的用户
 * 内存消耗：67.10 MB, 在所有 JavaScript 提交中击败了33.33%的用户
 */
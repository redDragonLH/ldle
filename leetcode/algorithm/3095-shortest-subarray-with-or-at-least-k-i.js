/**
 * 3095. 或值至少 K 的最短子数组 I
 *
 * 给你一个 非负 整数数组 nums 和一个整数 k 。
 * 如果一个数组中所有元素的按位或运算 OR 的值 至少 为 k ，那么我们称这个数组是 特别的 。
 * 请你返回 nums 中 最短特别非空 子数组 的长度，如果特别子数组不存在，那么返回 -1 。
 */
/**
 * 暴力
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
  let n = nums.length;
  let res = Number.MAX_VALUE;
  for (let i = 0; i < n; i++) {
    let value = 0;
    for (let j = i; j < n; j++) {
      value |= nums[j];
      if (value >= k) {
        res = Math.min(res, j - i + 1);
        break;
      }
    }
  }
  return res === Number.MAX_VALUE ? -1 : res;
};

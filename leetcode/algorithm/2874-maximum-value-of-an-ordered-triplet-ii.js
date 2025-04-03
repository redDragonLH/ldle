/**
 * 2874. 有序三元组中的最大值 II
 *
 * 给你一个下标从 0 开始的整数数组 nums 。
 * 请你从所有满足 i < j < k 的下标三元组 (i, j, k) 中，找出并返回下标三元组的最大值。如果所有满足条件的三元组的值都是负数，则返回 0 。
 * 下标三元组 (i, j, k) 的值等于 (nums[i] - nums[j]) * nums[k] 。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  const n = nums.length;
  let res = 0,
    imax = 0,
    dmax = 0;
  for (let k = 0; k < n; k++) {
    res = Math.max(res, dmax * nums[k]);
    dmax = Math.max(dmax, imax - nums[k]);
    imax = Math.max(imax, nums[k]);
  }
  return res;
};
/**
 * 执行用时：2 ms, 在所有 JavaScript 提交中击败了96.67%的用户
 * 内存消耗：67.42 MB, 在所有 JavaScript 提交中击败了63.33%的用户
 */
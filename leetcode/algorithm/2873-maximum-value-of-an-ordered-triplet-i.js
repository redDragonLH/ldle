/**
 * 2873. 有序三元组中的最大值 I
 *
 * 给你一个下标从 0 开始的整数数组 nums 。
 * 请你从所有满足 i < j < k 的下标三元组 (i, j, k) 中，找出并返回下标三元组的最大值。如果所有满足条件的三元组的值都是负数，则返回 0 。
 * 下标三元组 (i, j, k) 的值等于 (nums[i] - nums[j]) * nums[k] 。
 */
/**
 * 最直接的方案,三层遍历
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  let maxValue = 0;
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const value = (nums[i] - nums[j]) * nums[k];
        maxValue = Math.max(maxValue, value);
      }
    }
  }

  return maxValue;
};

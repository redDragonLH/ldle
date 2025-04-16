/**
 * 2537. 统计好子数组的数目
 *
 * 给你一个整数数组 nums 和一个整数 k ，请你返回 nums 中 好 子数组的数目。
 * 一个子数组 arr 如果有 至少 k 对下标 (i, j) 满足 i < j 且 arr[i] == arr[j] ，那么称它是一个 好 子数组。
 * 子数组 是原数组中一段连续 非空 的元素序列。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
  let count = 0;
  let left = 0;
  let pairs = 0;
  const freq = new Map();

  for (let right = 0; right < nums.length; right++) {
    freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);
    pairs += freq.get(nums[right]) - 1;

    while (pairs >= k) {
      count += nums.length - right;
      freq.set(nums[left], freq.get(nums[left]) - 1);
      pairs -= freq.get(nums[left]);
      left++;
    }
  }

  return count;
};

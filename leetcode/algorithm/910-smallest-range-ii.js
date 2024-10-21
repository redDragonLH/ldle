/**
 * 910. 最小差值 II
 *
 * 给你一个整数数组 nums，和一个整数 k 。
 * 对于每个下标 i（0 <= i < nums.length），将 nums[i] 变成 nums[i] + k 或 nums[i] - k 。
 * nums 的 分数 是 nums 中最大元素和最小元素的差值。
 * 在更改每个下标对应的值之后，返回 nums 的最小 分数 。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function (nums, k) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let ans = nums[n - 1] - nums[0];
  for (let i = 0; i < n - 1; i++) {
    let a = nums[i];
    let b = nums[i + 1];
    let high = Math.max(nums[n - 1] - k, a + k);
    let low = Math.min(nums[0] + k, b - k);
    ans = Math.min(ans, high - low);
  }
  return ans;
};
/**
 * Copilot 进化挺快.
 */
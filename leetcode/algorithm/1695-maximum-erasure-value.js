/**
 * 1695. 删除子数组的最大得分
 *
 * 给你一个正整数数组 nums ，请你从中删除一个含有 若干不同元素 的子数组。删除子数组的 得分 就是子数组各元素之 和 。
 * 返回 只删除一个 子数组可获得的 最大得分 。
 * 如果数组 b 是数组 a 的一个连续子序列，即如果它等于 a[l],a[l+1],...,a[r] ，那么它就是 a 的一个子数组。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let maxScore = 0;
  let currentScore = 0;
  const seen = new Set();
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    while (seen.has(nums[right])) {
      seen.delete(nums[left]);
      currentScore -= nums[left];
      left++;
    }
    seen.add(nums[right]);
    currentScore += nums[right];
    maxScore = Math.max(maxScore, currentScore);
  }

  return maxScore;
};
/**
 * 执行用时：56 ms, 在所有 JavaScript 提交中击败了 60.24% 的用户
 * 内存消耗：72.04 MB, 在所有 JavaScript 提交中击败了 44.58% 的用户
 */

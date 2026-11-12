/**
 * 3105. 最长的严格递增或递减子数组
 *
 * 给你一个整数数组 nums 。
 * 返回数组 nums 中 严格递增 或 严格递减 的最长非空子数组的长度。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  if (nums.length === 0) return 0;
  let maxLen = 1;
  let incLen = 1;
  let decLen = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      incLen++;
      decLen = 1;
    } else if (nums[i] < nums[i - 1]) {
      decLen++;
      incLen = 1;
    } else {
      incLen = 1;
      decLen = 1;
    }
    // 每次循环都更新最大长度
    maxLen = Math.max(maxLen, incLen, decLen);
  }
  return maxLen;
};

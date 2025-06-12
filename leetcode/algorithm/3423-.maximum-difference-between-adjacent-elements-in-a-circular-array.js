/**
 * 3423. 循环数组中相邻元素的最大差值
 *
 * 给你一个 循环 数组 nums ，请你找出相邻元素之间的 最大 绝对差值。
 * 注意：一个循环数组中，第一个元素和最后一个元素是相邻的。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
  let maxDiff = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const diff = Math.abs(nums[i] - nums[(i + 1) % n]);
    maxDiff = Math.max(maxDiff, diff);
  }

  return maxDiff;
};
/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：56.06 MB, 在所有 JavaScript 提交中击败了43.38%的用户
 */
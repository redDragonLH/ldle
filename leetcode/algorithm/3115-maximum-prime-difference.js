/**
 * 3115. 质数的最大距离
 *
 * 给你一个整数数组 nums。
 * 返回两个（不一定不同的）质数在 nums 中 下标 的 最大距离。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const prime = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];
var maximumPrimeDifference = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (prime.includes(nums[left]) && prime.includes(nums[right])) {
      return right - left;
    } else {
      if (!prime.includes(nums[left])) {
        left++;
      }

      if (!prime.includes(nums[right])) {
        right--;
      }
    }
  }
  return 0;
};
/**
 * 执行用时：99 ms, 在所有 JavaScript 提交中击败了41.41%的用户
 * 内存消耗：64.79 MB, 在所有 JavaScript 提交中击败了61.72%的用户
 */
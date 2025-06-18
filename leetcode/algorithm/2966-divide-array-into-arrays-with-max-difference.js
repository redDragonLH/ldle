/**
 * 2966. 划分数组并满足最大差限制
 *
 * 给你一个长度为 n 的整数数组 nums，以及一个正整数 k 。
 * 将这个数组划分为 n / 3 个长度为 3 的子数组，并满足以下条件：
 *  * 子数组中 任意 两个元素的差必须 小于或等于 k 。
 * 返回一个 二维数组 ，包含所有的子数组。如果不可能满足条件，就返回一个空数组。如果有多个答案，返回 任意一个 即可。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  const n = nums.length;
  if (n % 3 !== 0) return [];

  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < n; i += 3) {
    if (nums[i + 2] - nums[i] > k) {
      return [];
    }
    result.push([nums[i], nums[i + 1], nums[i + 2]]);
  }

  return result;
};
/**
 * 执行用时：94 ms, 在所有 JavaScript 提交中击败了87.50%的用户
 * 内存消耗：84.21 MB, 在所有 JavaScript 提交中击败了25.00%的用户
 */
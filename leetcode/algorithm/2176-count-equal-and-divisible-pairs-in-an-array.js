/**
 * 2176. 统计数组中相等且可以被整除的数对
 *
 * 给你一个下标从 0 开始长度为 n 的整数数组 nums 和一个整数 k ，请你返回满足 0 <= i < j < n ，nums[i] == nums[j] 且 (i * j) 能被 k 整除的数对 (i, j) 的 数目 。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
  let count = 0;
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let j = map.get(nums[i]);
      count += j.filter((item) => (i * item) % k === 0).length;
    }
    if (!map.has(nums[i])) {
      map.set(nums[i], []);
    }
    map.get(nums[i]).push(i);
  }
  return count;
};
/**
 * 执行用时：8 ms, 在所有 JavaScript 提交中击败了7.14%的用户
 * 内存消耗：56.58 MB, 在所有 JavaScript 提交中击败了7.14%的用户
 */
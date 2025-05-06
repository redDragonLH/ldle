/**
 * 1920. 基于排列构建数组
 *
 * 给你一个 从 0 开始的排列 nums（下标也从 0 开始）。请你构建一个 同样长度 的数组 ans ，其中，对于每个 i（0 <= i < nums.length），都满足 ans[i] = nums[nums[i]] 。返回构建好的数组 ans 。
 * 从 0 开始的排列 nums 是一个由 0 到 nums.length - 1（0 和 nums.length - 1 也包含在内）的不同整数组成的数组。
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  const n = nums.length;
  const ans = new Array(n);
  for (let i = 0; i < n; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
};
/**
 * 执行用时：1 ms, 在所有 JavaScript 提交中击败了86.15%的用户
 * 内存消耗：58.98 MB, 在所有 JavaScript 提交中击败了35.38%的用户
 */
/**
 * 368. 最大整除子集
 *
 * 给你一个由 无重复 正整数组成的集合 nums ，请你找出并返回其中最大的整除子集 answer ，子集中每一元素对 (answer[i], answer[j]) 都应当满足：
 *  * answer[i] % answer[j] == 0 ，或
 *  * answer[j] % answer[i] == 0
 * 如果存在多个有效解子集，返回其中任何一个均可。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  if (!nums.length) return [];
  nums.sort((a, b) => a - b);
  const dp = new Array(nums.length).fill(1);
  const prev = new Array(nums.length).fill(-1);
  let maxSize = 1;
  let maxIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
    if (dp[i] > maxSize) {
      maxSize = dp[i];
      maxIndex = i;
    }
  }

  const result = [];
  while (maxIndex !== -1) {
    result.unshift(nums[maxIndex]);
    maxIndex = prev[maxIndex];
  }

  return result;
};

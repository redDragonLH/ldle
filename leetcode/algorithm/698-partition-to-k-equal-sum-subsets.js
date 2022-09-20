/**
 * 698. 划分为k个相等的子集
 *
 * 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。
 */

/**
 * 要先确定大致的总数么,然后遍历,前缀和?
 * 回溯或者动态规划
 * 桶排序类计算么,还要回溯,
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    // 
  const dfs = (s, p) => {
    if (s === 0) {
      return true;
    }
    if (!dp[s]) {
      return dp[s];
    }
    dp[s] = false;
    for (let i = 0; i < n; i++) {
      if (nums[i] + p > per) {
        break;
      }
      if (((s >> i) & 1) != 0) {
        if (dfs(s ^ (1 << i), (p + nums[i]) % per)) {
          return true;
        }
      }
    }
    return false;
  };
  const all = _.sum(nums);
  if (all % k !== 0) {
    return false;
  }
  per = all / k;
  nums.sort((a, b) => a - b);
  n = nums.length;
  if (nums[n - 1] > per) {
    return false;
  }
  dp = new Array(1 << n).fill(true);
  return dfs((1 << n) - 1, 0);
};

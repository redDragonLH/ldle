/**
 * 416. 分割等和子集
 *
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  let target = sum / 2;
  let dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (let num of nums) {
    for (let j = target; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
  }

  return dp[target];
};
/**
 * 其实就是找朋友,给每个元素找到对应的元素,使这两个的和等于target或者是target的子集
 * 
 * 执行用时：42 ms, 在所有 JavaScript 提交中击败了87.74%的用户
 * 内存消耗：59.15 MB, 在所有 JavaScript 提交中击败了41.36%的用户
 */

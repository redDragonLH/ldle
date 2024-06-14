/**
 * 2786. 访问数组中的位置使分数最大
 *
 * 给你一个下标从 0 开始的整数数组 nums 和一个正整数 x 。
 * 你 一开始 在数组的位置 0 处，你可以按照下述规则访问数组中的其他位置：
 *  * 如果你当前在位置 i ，那么你可以移动到满足 i < j 的 任意 位置 j 。
 *  * 对于你访问的位置 i ，你可以获得分数 nums[i] 。
 *  * 如果你从位置 i 移动到位置 j 且 nums[i] 和 nums[j] 的 奇偶性 不同，那么你将失去分数 x 。
 * 请你返回你能得到的 最大 得分之和。
 * 注意 ，你一开始的分数为 nums[0] 。
 */
/**
 * 遍历奇偶性,是否与0位元素一样
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var maxScore = function (nums, x) {
  let zeroStatus = nums[0] % 2 === 0;
  let odd = 0,
    even = 0;
  if (zeroStatus) {
    even = nums[0];
    odd = -nums[0];
  } else {
    odd = nums[0];
    even -= nums[0];
  }

  for (const num of nums) {
    if (num % 2 === 0) {
      even += num;
    } else {
      odd += num;
    }
  }
  return Math.max(even, odd);
};
/**
 * 失败,应该有条件我没理解
 */

/**
 * 官方题解 动态规划
 */
var maxScore = function(nums, x) {
    let res = nums[0];
    let dp = [-Infinity, -Infinity]; // 数据结构
    dp[nums[0] % 2] = nums[0]; // 初始化 奇或偶
    for (let i = 1; i < nums.length; i++) {
        let parity = nums[i] % 2;
        let cur = Math.max(dp[parity] + nums[i], dp[1 - parity] - x + nums[i]);
        res = Math.max(res, cur);
        dp[parity] = Math.max(dp[parity], cur);
    }
    return res;
};

/**
 * 3693. 爬楼梯 II
 *
 * 你正在爬一个有 n + 1 级台阶的楼梯，台阶编号从 0 到 n。
 * 你还得到了一个长度为 n 的 下标从 1 开始 的整数数组 costs，其中 costs[i] 是第 i 级台阶的成本。
 * 从第 i 级台阶，你 只能 跳到第 i + 1、i + 2 或 i + 3 级台阶。从第 i 级台阶跳到第 j 级台阶的成本定义为： costs[j] + (j - i)2
 * 你从第 0 级台阶开始，初始 cost = 0。
 * 返回到达第 n 级台阶所需的 最小 总成本。
 */
/**
 * 很明显是动态规划
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function (n, costs) {
  /**
   * DP 三要素
   * 1. 状态: dp[i] 表示到达第 i 级台阶的最小总成本
   * 2. 状态转移: dp[i + j] = Math.min(dp[i + j], dp[i] + costs[i + j] + j * j) 其中 j = 1, 2, 3
   * 3. 初始状态: dp[0] = 0
   */
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i + j <= n) {
        dp[i + j] = Math.min(dp[i + j], dp[i] + costs[i + j - 1] + j * j); // costs[i + j - 1] 是第 i + j 级台阶的成本
      }
    }
  }
  return dp[n];
};
/**
 * 执行用时 : 26 ms, 在所有 JavaScript 提交中击败了 47.22% 的用户
 * 内存消耗 : 72.90 MB, 在所有 JavaScript 提交中击败了 83.33% 的用户
 */
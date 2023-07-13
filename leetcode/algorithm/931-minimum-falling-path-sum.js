/**
 * 931. 下降路径最小和
 *
 * 给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。
 *
 * 下降路径 可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。
 * 具体来说，位置 (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1) 。
 */

/**
 * 官方题解 动态规划
 * 
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  // 定义dp 中间数据结构
  // 复制一个n x n matrix 结构
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  // 定义初始数据
  dp[0] = [...matrix[0]];
  // 两层循环
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
        // 获取垂直下面元素
      let mn = dp[i - 1][j];
      // 比较两边元素获得最小的
      if (j > 0) {
        mn = Math.min(mn, dp[i - 1][j - 1]);
      }
      if (j < n - 1) {
        mn = Math.min(mn, dp[i - 1][j + 1]);
      }
      dp[i][j] = mn + matrix[i][j];
    }
  }
  // 比较
  // 一般动态规划会把最终结果放到最后一个位置,这还要自己调,不像动态规划,像遍历
  return Math.min(...dp[n - 1]);
};

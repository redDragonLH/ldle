/**
 * 3148. 矩阵中的最大得分
 *
 * 给你一个由 正整数 组成、大小为 m x n 的矩阵 grid。你可以从矩阵中的任一单元格移动到另一个位于正下方或正右侧的任意单元格（不必相邻）。从值为 c1 的单元格移动到值为 c2 的单元格的得分为 c2 - c1 。
 * 你可以从 任一 单元格开始，并且必须至少移动一次。
 * 返回你能得到的 最大 总得分。
 */

/**
 * 经典动态规划问题啊.
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function (grid) {
  // 1. 初始化dp数组
  let len = grid.length;
  let dp = new Array(len).fill(0);
  // 2. 初始化起始数据
  dp[0] = grid[0][0];
  for (let i = 1; i < grid[0].length; i++) {
    dp[i] = grid[0][i] - dp[i - 1];
  }
  let result = dp[0];
  // 3. 设计状态转移方程
  console.log(dp);
  // 也不对,要的是最大的分,所以中间状态也是必须要判断的
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // j=0也就是开头的时候,只能从上面来,所以只能是grid[i][j] - dp[j]
      if (j === 0) {
        dp[j] = grid[i][j] - dp[j];
      } else {
        dp[j] = Math.max(grid[i][j] - dp[j - 1], grid[i][j] - dp[j]);
      }
      console.log(i, j, grid[i][j]);
      result = Math.max(result, dp[j]);
    }
    console.log(dp);
  }

  return Math.max(...dp);
};

/**
 * 不必相邻就有点坑~~但是应该也能用动态规划处理
 */
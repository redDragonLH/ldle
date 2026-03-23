/**
 * 1594. 矩阵的最大非负积
 *
 * 给你一个大小为 m x n 的矩阵 grid 。最初，你位于左上角 (0, 0) ，每一步，你可以在矩阵中 向右 或 向下 移动。
 * 在从左上角 (0, 0) 开始到右下角 (m - 1, n - 1) 结束的所有路径中，找出具有 最大非负积 的路径。路径的积是沿路径访问的单元格中所有整数的乘积。
 * 返回 最大非负积 对 109 + 7 取余 的结果。如果最大积为 负数 ，则返回 -1 。
 * 注意，取余是在得到最大积之后执行的。
 */
/**
 * 感觉很经典的动态规划题，dp[i][j] 代表从 (0, 0) 到 (i, j) 的最大积和最小积，最后返回 dp[m-1][n-1] 的最大积
 * 但是需要注意的是，乘积可能会变成负数，所以需要同时记录最大积和最小积
 * dp[i][j][0] 代表从 (0, 0) 到 (i, j) 的最大积，dp[i][j][1] 代表从 (0, 0) 到 (i, j) 的最小积
 * dp[i][j][0] = max(dp[i-1][j][0] * grid[i][j], dp[i-1][j][1] * grid[i][j], dp[i][j-1][0] * grid[i][j], dp[i][j-1][1] * grid[i][j])
 * dp[i][j][1] = min(dp[i-1][j][0] * grid[i][j], dp[i-1][j][1] * grid[i][j], dp[i][j-1][0] * grid[i][j], dp[i][j-1][1] * grid[i][j])
 * 最后返回 dp[m-1][n-1][0] % (10**9 + 7) 如果 dp[m-1][n-1][0] >= 0 否则返回 -1
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  const dp = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(2).fill(0)));
  dp[0][0][0] = grid[0][0];
  dp[0][0][1] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0][0] = dp[i - 1][0][0] * grid[i][0];
    dp[i][0][1] = dp[i - 1][0][1] * grid[i][0];
  }
  for (let j = 1; j < n; j++) {
    dp[0][j][0] = dp[0][j - 1][0] * grid[0][j];
    dp[0][j][1] = dp[0][j - 1][1] * grid[0][j];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const max1 = Math.max(
        dp[i - 1][j][0] * grid[i][j],
        dp[i - 1][j][1] * grid[i][j],
      );
      const max2 = Math.max(
        dp[i][j - 1][0] * grid[i][j],
        dp[i][j - 1][1] * grid[i][j],
      );
      dp[i][j][0] = Math.max(max1, max2);
      const min1 = Math.min(
        dp[i - 1][j][0] * grid[i][j],
        dp[i - 1][j][1] * grid[i][j],
      );
      const min2 = Math.min(
        dp[i][j - 1][0] * grid[i][j],
        dp[i][j - 1][1] * grid[i][j],
      );
      dp[i][j][1] = Math.min(min1, min2);
    }
  }
  return dp[m - 1][n - 1][0] >= 0 ? dp[m - 1][n - 1][0] % (10 ** 9 + 7) : -1;
};
/**
 * 三维数组有点多啊~
 */
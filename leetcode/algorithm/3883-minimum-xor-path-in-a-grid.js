/**
 * 3882. 网格图中最小异或路径
 *
 * 给你一个大小为 m * n 的二维整数数组 grid。
 * 你从 左上角 的单元格 (0, 0) 出发，想要到达 右下角 的单元格 (m - 1, n - 1)。
 * 在每一步中，你 可以 向右或向下 移动。
 * 路径的 代价 定义为该路径上所有单元格（包括 起点和终点）的值的 按位异或。
 * 返回从 (0, 0) 到 (m - 1, n - 1) 的所有有效路径中 最小 的可能异或值。
 */
/**
 * 深度优先搜索实现最小异或路径
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let minXor = Infinity;
  // 使用深度优先搜索遍历所有路径，计算每条路径的异或值并更新最小值
  const dfs = (i, j, xor) => {
    if (i >= m || j >= n) return;
    xor ^= grid[i][j];
    if (i === m - 1 && j === n - 1) {
      minXor = Math.min(minXor, xor);
      return;
    }
    // 向下或向右递归搜索下一步
    dfs(i + 1, j, xor);
    dfs(i, j + 1, xor);
  };

  dfs(0, 0, 0);
  return minXor;
};
/**
 * 超时,这难道还能优化吗
 */

/**
 * 动态规划题解也是要遍历所有可能的异或值，记录每个位置可以达到的异或值集合，最后取右下角的最小异或值,
 * 为什么比深度优先搜索快很多?
 * @param {number[][]} grid
 * @returns
 */
var minCost = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  // dp[j][k] 表示到达第 i 行第 j 列时，是否可以得到异或值 k
  const dp = Array.from({ length: n }, () => new Uint8Array(1024));
  const next = new Uint8Array(1024);

  dp[0][grid[0][0]] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue;
      }

      const value = grid[i][j];
      next.fill(0);

      for (let k = 0; k < 1024; k++) {
        if (dp[j][k] || (j > 0 && dp[j - 1][k])) {
          next[k ^ value] = 1;
        }
      }

      dp[j].set(next);
    }
  }

  return dp[n - 1].indexOf(1);
};

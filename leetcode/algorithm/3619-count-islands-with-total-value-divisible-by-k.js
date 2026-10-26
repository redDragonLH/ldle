/**
 * 3619. 总价值可以被 K 整除的岛屿数目
 *
 * 给你一个 m x n 的矩阵 grid 和一个正整数 k。一个 岛屿 是由 正 整数（表示陆地）组成的，并且陆地间 四周 连通（水平或垂直）。
 * 一个岛屿的总价值是该岛屿中所有单元格的值之和。
 * 返回总价值可以被 k 整除 的岛屿数量。
 */
/**
 * 给定一个网格和整数 k，计算总价值可以被 k 整除的岛屿数量。
 * 广度优先搜索 (BFS) 或深度优先搜索 (DFS) 遍历每个岛屿，计算其总价值并判断是否能被 k 整除。
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const dfs = (x, y) => {
    if (
      x < 0 ||
      x >= m ||
      y < 0 ||
      y >= n ||
      visited[x][y] ||
      grid[x][y] <= 0
    ) {
      return 0;
    }
    visited[x][y] = true;
    let sum = grid[x][y];
    for (const [dx, dy] of directions) {
      sum += dfs(x + dx, y + dy);
    }
    return sum;
  };

  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && grid[i][j] > 0) {
        const total = dfs(i, j);
        if (total % k === 0) {
          count++;
        }
      }
    }
  }
  return count;
};
/**
 * 执行用时 :486 ms, 在所有 JavaScript 提交中击败了36.36%的用户
 * 内存消耗 :89.93 MB, 在所有 JavaScript 提交中击败了31.82%的用户
 */
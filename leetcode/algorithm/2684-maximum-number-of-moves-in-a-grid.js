/**
 * 2684. 矩阵中移动的最大次数
 *
 * 给你一个下标从 0 开始、大小为 m x n 的矩阵 grid ，矩阵由若干 正 整数组成。
 * 你可以从矩阵第一列中的 任一 单元格出发，按以下方式遍历 grid ：
 *  * 从单元格 (row, col) 可以移动到 (row - 1, col + 1)、(row, col + 1) 和 (row + 1, col + 1) 三个单元格中任一满足值 严格 大于当前单元格的单元格。
 * 返回你在矩阵中能够 移动 的 最大 次数。
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  let q = new Set();
  for (let i = 0; i < m; i++) {
    q.add(i);
  }
  for (let j = 1; j < n; j++) {
    const q2 = new Set();
    for (const i of q) {
      for (let i2 = i - 1; i2 <= i + 1; i2++) {
        if (0 <= i2 && i2 < m && grid[i][j - 1] < grid[i2][j]) {
          q2.add(i2);
        }
      }
    }
    q = q2;
    if (q.size === 0) {
      return j - 1;
    }
  }
  return n - 1;
};

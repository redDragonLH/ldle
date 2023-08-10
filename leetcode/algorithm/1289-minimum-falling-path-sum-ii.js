/**
 * 1289. 下降路径最小和 II
 *
 * 给你一个 n x n 整数矩阵 grid ，请你返回 非零偏移下降路径 数字和的最小值。
 * 非零偏移下降路径 定义为：从 grid 数组中的每一行选择一个数字，且按顺序选出来的数字中，相邻数字不在原数组的同一列。
 */

/**
 * 双层遍历可以解决
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  const n = grid.length;
  // 数据结构
  const d = new Array(n).fill(0).map(() => new Array(n).fill(Infinity));
  // 初始值
  for (let i = 0; i < n; i++) {
    d[0][i] = grid[0][i];
  }
  // 第一层已经在上面赋了初始值,所以从第二层开始遍历
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
        // 第三层是啥,这不就是二维的么,难道是动态规划数据结构?
      for (let k = 0; k < n; k++) {
        // j,k,j是当前层,k是 结果数据结构
        if (j == k) {
          continue;
        }
        // 计算当前层与结果层的最小值
        d[i][j] = Math.min(d[i][j], d[i - 1][k] + grid[i][j]);
      }
    }
  }
  return Math.min(...d[n - 1]);
};

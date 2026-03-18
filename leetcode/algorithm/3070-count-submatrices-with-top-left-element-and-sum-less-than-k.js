/**
 * 3070. 元素和小于等于 k 的子矩阵的数目
 *
 * 给你一个下标从 0 开始的整数矩阵 grid 和一个整数 k。
 * 返回包含 grid 左上角元素、元素和小于或等于 k 的 子矩阵的数目。
 */
/**
 * 三个方向扩散,
 * 不算中等题吧
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  let count = 1;
  let sum = grid[0][0];
  for (let i = 1; i < m; i++) {
    sum += grid[i][0];

    if (sum > k) break;
    count++;
  }
  sum = grid[0][0];
  for (let j = 1; j < n; j++) {
    sum += grid[0][j];
    if (sum > k) break;
    count++;
  }

  let len = Math.min(m, n);
  for (let l = 2; l < len; l++) {
    sum = 0;
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < l; j++) {
        sum += grid[i][j];
        if (i == l - 1 && j == l - 1) {
          if (sum > k) break;
          count++;
        }
      }
    }
  }
  return count;
};

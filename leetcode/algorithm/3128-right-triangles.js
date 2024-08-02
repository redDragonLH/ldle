/**
 * 3128. 直角三角形
 *
 * 给你一个二维 boolean 矩阵 grid 。
 * 请你返回使用 grid 中的 3 个元素可以构建的 直角三角形 数目，且满足 3 个元素值 都 为 1 。
 * 注意：
 *  * 如果 grid 中 3 个元素满足：一个元素与另一个元素在 同一行，同时与第三个元素在 同一列 ，那么这 3 个元素称为一个 直角三角形 。这 3 个元素互相之间不需要相邻。
 */

/**
 * 虑枚举两条直角边的交点，然后将「该点所在行的其他点」与「该点所在列的其他点」一一匹配，即可得到所有以该点为直角边交点的所有方案。
 * 设 row 为交点所在行 1 的个数，col 为交点所在列 1 的个数，那么它的贡献是 (row−1)×(col−1)，将所有交点的贡献加起来就是答案。
 * @param {number[][]} grid
 * @return {number}
 */
var numberOfRightTriangles = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const col = Array(m).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      col[j] += grid[i][j];
    }
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    let row = grid[i].reduce((a, b) => a + b, 0);
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        res += (row - 1) * (col[j] - 1);
      }
    }
  }

  return res;
};

/**
 * 1034. 边界着色
 *
 * 给你一个大小为 m x n 的整数矩阵 grid ，表示一个网格。另给你三个整数 row、col 和 color 。网格中的每个值表示该位置处的网格块的颜色。
 *
 * 当两个网格块的颜色相同，而且在四个方向中任意一个方向上相邻时，它们属于同一 连通分量 。
 *
 * 连通分量的边界 是指连通分量中的所有与不在分量中的网格块相邻（四个方向上）的所有网格块，或者在网格的边界上（第一行/列或最后一行/列）的所有网格块。
 *
 * 请你使用指定颜色 color 为所有包含网格块 grid[row][col] 的 连通分量的边界 进行着色，并返回最终的网格 grid 。
 */

/**
 * 题意~~~
 *
 * 找到给定点的所有相邻的值相等的块,然后把符合条件的边界块着色,返回
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function (grid, row, col, color) {
  const m = grid.length,
    n = grid[0].length;
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(0));
  const borders = [];
  const originalColor = grid[row][col];
  const direc = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const q = [];
  q.push([row, col]);
  visited[row][col] = true;
  while (q.length) {
    const node = q.pop();
    const x = node[0],
      y = node[1];

    let isBorder = false;
    for (let i = 0; i < 4; i++) {
      const nx = direc[i][0] + x,
        ny = direc[i][1] + y;
      if (
        !(
          nx >= 0 &&
          nx < m &&
          ny >= 0 &&
          ny < n &&
          grid[nx][ny] === originalColor
        )
      ) {
        isBorder = true;
      } else if (!visited[nx][ny]) {
        visited[nx][ny] = true;
        q.push([nx, ny]);
      }
    }
    if (isBorder) {
      borders.push([x, y]);
    }
  }
  for (let i = 0; i < borders.length; i++) {
    const x = borders[i][0],
      y = borders[i][1];
    grid[x][y] = color;
  }
  return grid;
};

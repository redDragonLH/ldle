/**
 * 994. 腐烂的橘子
 *
 * 在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：
 *  * 值 0 代表空单元格；
 *  * 值 1 代表新鲜橘子；
 *  * 值 2 代表腐烂的橘子。
 *
 * 每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。
 * 返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。
 */

/**
 * 广度优先遍历
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let result = -1;
  let point = [];
  let m = grid.length,
    n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) point.push([i, j]);
    }
  }
  while (point.length) {
    let len = point.length;
    console.log(point);

    while (len--) {
      item = point.shift();

      if (item[0] + 1 < m && grid[item[0] + 1][item[1]] === 1) {
        point.push([item[0] + 1, item[1]]);
        grid[item[0] + 1][item[1]] = 2;
      }
      if (grid[item[0]][item[1] + 1] === 1) {
        point.push([item[0], item[1] + 1]);

        grid[item[0]][item[1] + 1] = 2;
      }
      if (item[0] - 1 > -1 && grid[item[0] - 1][item[1]] === 1) {
        point.push([item[0] - 1, item[1]]);

        grid[item[0] - 1][item[1]] = 2;
      }
      if (grid[item[0]][item[1] - 1] === 1) {
        point.push([item[0], item[1] - 1]);
        grid[item[0]][item[1] - 1] = 2;
      }
    }
    result++;
    console.log("result", result);
  }
  return result;
};
/**
 * 失败,还要考虑可达性,如果不可达,那么这些不可达橘子永远不会腐烂 
 */
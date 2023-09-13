/**
 * 2596. 检查骑士巡视方案
 *
 * 骑士在一张 n x n 的棋盘上巡视。在有效的巡视方案中，骑士会从棋盘的 左上角 出发，并且访问棋盘上的每个格子 恰好一次 。
 *
 * 给你一个 n x n 的整数矩阵 grid ，由范围 [0, n * n - 1] 内的不同整数组成，其中 grid[row][col] 表示单元格 (row, col) 是骑士访问的第 grid[row][col] 个单元格。骑士的行动是从下标 0 开始的。
 *
 * 如果 grid 表示了骑士的有效巡视方案，返回 true；否则返回 false。
 *
 * 注意，骑士行动时可以垂直移动两个格子且水平移动一个格子，或水平移动两个格子且垂直移动一个格子。下图展示了骑士从某个格子出发可能的八种行动路线。
 */

/**
 * 可以移动八个方向
 * 挨个检查
 * @param {number[][]} grid
 * @return {boolean}
 */
const dircts = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, -1],
  [2, 1],
  [-1, -2],
  [1, -2],
];
var checkValidGrid = function (grid) {
  let len = grid.length * grid.length - 1;
  let point = [0, 0];
  if (grid[point[0]][point[1]]) return false;
  for (let i = 0; i < len; i++) {
    point = calculation(grid, point, i + 1);
    if (!point) {
      return false;
    }
  }
  return true;
};

const calculation = (grid, point, number) => {
  for (const dirct of dircts) {
    if (
      point[0] + dirct[0] < 0 ||
      point[0] + dirct[0] >= grid.length ||
      point[1] + dirct[1] < 0 ||
      point[1] + dirct[1] >= grid.length
    ) {
      continue;
    }

    if (grid[point[0] + dirct[0]][point[1] + dirct[1]] === number) {
      return [point[0] + dirct[0], point[1] + dirct[1]];
    }
  }
  return false;
};
/**
 * 去掉log就100%了
 * 
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：42.51 MB, 在所有 JavaScript 提交中击败了33.33%的用户
 */
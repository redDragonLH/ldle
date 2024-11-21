/**
 * 3248. 矩阵中的蛇
 *
 * 大小为 n x n 的矩阵 grid 中有一条蛇。蛇可以朝 四个可能的方向 移动。矩阵中的每个单元格都使用位置进行标识： grid[i][j] = (i * n) + j。
 * 蛇从单元格 0 开始，并遵循一系列命令移动。
 * 给你一个整数 n 表示 grid 的大小，另给你一个字符串数组 commands，其中包括 "UP"、"RIGHT"、"DOWN" 和 "LEFT"。题目测评数据保证蛇在整个移动过程中将始终位于 grid 边界内。
 * 返回执行 commands 后蛇所停留的最终单元格的位置。
 */

/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
  let position = [0, 0];
  for (const direction of commands) {
    if (direction === "UP") {
      position = [position[0] - 1, position[1]];
    } else if (direction === "DOWN") {
      position = [position[0] + 1, position[1]];
    } else if (direction === "LEFT") {
      position = [position[0], position[1] - 1];
    } else if (direction === "RIGHT") {
      position = [position[0], position[1] + 1];
    }
  }
  return position[0] * n + position[1];
};
/**
 * 执行用时：4 ms, 在所有 JavaScript 提交中击败了35.71%的用户
 * 内存消耗：54.26 MB, 在所有 JavaScript 提交中击败了5.95%的用户
 */
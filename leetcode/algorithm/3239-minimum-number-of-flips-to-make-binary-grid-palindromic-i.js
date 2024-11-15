/**
 * 3239. 最少翻转次数使二进制矩阵回文 I
 *
 * 给你一个 m x n 的二进制矩阵 grid 。
 * 如果矩阵中一行或者一列从前往后与从后往前读是一样的，那么我们称这一行或者这一列是 回文 的。
 * 你可以将 grid 中任意格子的值 翻转 ，也就是将格子里的值从 0 变成 1 ，或者从 1 变成 0 。
 * 请你返回 最少 翻转次数，使得矩阵 要么 所有行是 回文的 ，要么所有列是 回文的 。
 */

/**
 * 暴力遍历可以么
 * 反之要翻转,不管是数字是哪个都要翻转
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function (grid) {
  let rowCnt = 0;
  let colCnt = 0;
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j1 = 0; j1 < Math.floor(n / 2); j1++) {
      const j2 = n - 1 - j1;
      if (grid[i][j1] !== grid[i][j2]) {
        rowCnt++;
      }
    }
  }
  for (let j = 0; j < n; j++) {
    for (let i1 = 0; i1 < Math.floor(m / 2); i1++) {
      const i2 = m - 1 - i1;
      if (grid[i1][j] !== grid[i2][j]) {
        colCnt++;
      }
    }
  }
  return Math.min(colCnt, rowCnt);// 或的关系
};
/**
 * 这么简单的思路都没想到,太浮躁了
 */
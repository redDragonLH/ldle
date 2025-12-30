/**
 * 1351. 统计有序矩阵中的负数
 * 给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非严格递减顺序排列。 请你统计并返回 grid 中 负数 的数目。
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) {
        count++;
      }
    }
  }
  return count;
};
/**
 * 最笨的方法，直接遍历
 * 执行用时 2 ms, 在所有 JavaScript 提交中击败了33.33%的用户
 * 内存消耗 :56.75 MB, 在所有 JavaScript 提交中击败了11.11%的用户
 */
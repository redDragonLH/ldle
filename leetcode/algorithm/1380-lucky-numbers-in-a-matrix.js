/**
 * 1380. 矩阵中的幸运数
 *
 * 给你一个 m * n 的矩阵，矩阵中的数字 各不相同 。请你按 任意 顺序返回矩阵中的所有幸运数。
 *
 * 幸运数是指矩阵中满足同时下列两个条件的元素：
 *  * 在同一行的所有元素中最小
 *  * 在同一列的所有元素中最大
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  const minRow = new Array(m).fill(Number.MAX_SAFE_INTEGER);
  const maxCol = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      minRow[i] = Math.min(minRow[i], matrix[i][j]);
      maxCol[j] = Math.max(maxCol[j], matrix[i][j]);
    }
  }
  const ret = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === minRow[i] && matrix[i][j] === maxCol[j]) {
        ret.push(matrix[i][j]);
      }
    }
  }
  return ret;
};

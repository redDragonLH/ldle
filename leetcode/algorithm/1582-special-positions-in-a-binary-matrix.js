/**
 * 1582. 二进制矩阵中的特殊位置
 *
 * 给你一个大小为 rows x cols 的矩阵 mat，其中 mat[i][j] 是 0 或 1，请返回 矩阵 mat 中特殊位置的数目 。
 *
 * 特殊位置 定义：如果 mat[i][j] == 1 并且第 i 行和第 j 列中的所有其他元素均为 0（行和列的下标均 从 0 开始 ），则位置 (i, j) 被称为特殊位置。
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  const m = mat.length,
    n = mat[0].length;
  const rowsSum = new Array(m).fill(0);
  const colsSum = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rowsSum[i] += mat[i][j];
      colsSum[j] += mat[i][j];
    }
  }
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1 && rowsSum[i] === 1 && colsSum[j] === 1) {
        res++;
      }
    }
  }
  return res;
};

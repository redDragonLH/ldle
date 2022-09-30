/**
 * 面试题 01.08. 零矩阵
 *
 * 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  if (!matrix) return false;
  let columnLen = matrix.length;
  let rowLen = matrix[0].length;
  for (let i = 0; i < columnLen; i++) {
    for (let j = 0; j < rowLen; j++) {
      if (matrix[i][j] === 0) {
        setMinusOne(matrix, i, j);
      }
    }
  }
  for (let i = 0; i < columnLen; i++) {
    for (let j = 0; j < rowLen; j++) {
      if (matrix[i][j] === null) {
        matrix[i][j] = 0;
      }
    }
  }
};

var setMinusOne = (matrix, point1, point2) => {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][point2] !== 0) {
      matrix[i][point2] = null;
    }
  }

  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[point1][i] !== 0) {
      matrix[point1][i] = null;
    }
  }
};

/**
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了17.31%
 * 的用户内存消耗：43.7 MB, 在所有 JavaScript 提交中击败了87.94%的用户
 */
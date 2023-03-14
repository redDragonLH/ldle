/**
 * 1605. 给定行和列的和求可行矩阵
 *
 * 给你两个非负整数数组 rowSum 和 colSum ，其中 rowSum[i] 是二维矩阵中第 i 行元素的和， colSum[j] 是第 j 列元素的和。换言之你不知道矩阵里的每个元素，但是你知道每一行和每一列的和。
 *
 * 请找到大小为 rowSum.length x colSum.length 的任意 非负整数 矩阵，且该矩阵满足 rowSum 和 colSum 的要求。
 *
 * 请你返回任意一个满足题目要求的二维矩阵，题目保证存在 至少一个 可行矩阵。
 */

/**
 * 贪心
 *
 * 要求一个二维非负整数矩阵 matrix
 * 对于 matrix 的每一个位置 matrix[i][j], 0 <= i < n 且 0 <= j < m,将 matrix[i][j]设为 min{rowSum[i],colSum[j]},
 * 然后将rowSum[i],colSum[j] 同时减去 matrix[i][j] 即可.当遍历完全部位置后,matrix 即为一个满足要求的答案矩阵
 *
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  const n = rowSum.length,
    m = colSum.length;
  const matrix = new Array(n).fill(0).map(() => new Array(m).fill(0));
  let i = 0,
    j = 0;
  while (i < n && j < m) {
    // 获取当前行列的最小值
    const v = Math.min(rowSum[i], colSum[j]);
    matrix[i][j] = v;
    rowSum[i] -= v;
    colSum[j] -= v;
    if (rowSum[i] === 0) {
      ++i;
    }
    if (colSum[j] === 0) {
      ++j;
    }
  }
  return matrix;
};

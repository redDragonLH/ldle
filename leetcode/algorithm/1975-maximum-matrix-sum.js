/**
 * 1975. 最大方阵和
 *
 * 给你一个 n x n 的整数方阵 matrix 。你可以执行以下操作 任意次 ：
 *  * 选择 matrix 中 相邻 两个元素，并将它们都 乘以 -1 。
 * 如果两个元素有 公共边 ，那么它们就是 相邻 的。
 * 你的目的是 最大化 方阵元素的和。请你在执行以上操作之后，返回方阵的 最大 和。
 */

/**
 * 如果是偶数个负数，那么挪来挪去最后可以全部变成正数
 * 如果是奇数个负数，那么最后会剩下一个负数，选择绝对值最小的那个负数变成负数，其他都变成正数
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let negativeCount = 0;
  let absSum = 0;
  let minAbs = Infinity;
  // 一次遍历就可以
  // 我的思路的话得两次遍历
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let val = matrix[i][j];
      if (val < 0) {
        negativeCount++;
      }
      let absVal = Math.abs(val);
      absSum += absVal;
      if (absVal < minAbs) {
        minAbs = absVal;
      }
    }
  }
  // 如果负数个数是奇数，那么最后会剩下一个负数
  if (negativeCount % 2 === 1) {
    return absSum - 2 * minAbs;
  } else {
    return absSum;
  }
};
/**
 * 执行用时： ms, 在所有 JavaScript 提交中击败了 100.00% 的用户
 * 内存消耗：64.59 MB, 在所有 JavaScript 提交中击败了 50.00% 的用户
 */
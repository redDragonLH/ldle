/**
 * 2946. 循环移位后的矩阵相似检查
 *
 * 给你一个下标从 0 开始且大小为 m x n 的整数矩阵 mat 和一个整数 k 。请你将矩阵中的 奇数 行循环 右 移 k 次，偶数 行循环 左 移 k 次。
 * 如果初始矩阵和最终矩阵完全相同，则返回 true ，否则返回 false 。
 */

/**
 * 用数学方法就可以吧,模拟有点没法做
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
  const m = mat.length;
  const n = mat[0].length;
  k %= n;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] !== mat[i][(j + k) % n]) {
        return false;
      }
    }
  }
  return true;
};
/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了 100.00 %的用户
 * 内存消耗：56.19 MB, 在所有 JavaScript 提交中击败了80.00%的用户
 */

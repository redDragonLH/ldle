/**
 * 1886. 判断矩阵经轮转后是否一致
 *
 * 给你两个大小为 n x n 的二进制矩阵 mat 和 target 。现 以 90 度顺时针轮转 矩阵 mat 中的元素 若干次 ，
 * 如果能够使 mat 与 target 一致，返回 true ；否则，返回 false 。
 */
/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  const n = mat.length;
  // 最多旋转 4 次
  for (let k = 0; k < 4; k++) {
    // 旋转操作
    for (let i = 0; i < Math.floor(n / 2); i++) {
      for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
        [
          mat[i][j],
          mat[n - 1 - j][i],
          mat[n - 1 - i][n - 1 - j],
          mat[j][n - 1 - i],
        ] = [
          mat[n - 1 - j][i],
          mat[n - 1 - i][n - 1 - j],
          mat[j][n - 1 - i],
          mat[i][j],
        ];
      }
    }

    if (isEqual(mat, target)) {
      return true;
    }
  }
  return false;
};

function isEqual(mat, target) {
  const n = mat.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] !== target[i][j]) {
        return false;
      }
    }
  }
  return true;
}

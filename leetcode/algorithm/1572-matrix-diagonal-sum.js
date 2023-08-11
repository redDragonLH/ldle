/**
 * 1572. 矩阵对角线元素的和
 *
 * 给你一个正方形矩阵 mat，请你返回矩阵对角线元素的和。
 * 请你返回在矩阵主对角线上的元素和副对角线上且不在主对角线上元素的和。
 */

/**
 * 处理好遍历逻辑就行
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let startw = 0;
  let startl = 0;
  let len = mat.length;

  let endRow = len - 1;
  let endColum = 0;

  let result = 0;
  while (startl < len && startw < len) {
    result += mat[startw][startl];
    if (endRow != startw || endColum != startl) {
      result += mat[endRow][endColum];
    }
    startw++;
    startl++;
    endRow--;
    endColum++;
  }
  return result;
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了47.71%的用户
 * 内存消耗：40.88 MB, 在所有 JavaScript 提交中击败了24.77%的用户
 */
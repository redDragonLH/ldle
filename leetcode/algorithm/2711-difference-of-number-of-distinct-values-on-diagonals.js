/**
 * 2711. 对角线上不同值的数量差
 *
 * 给你一个下标从 0 开始、大小为 m x n 的二维矩阵 grid ，请你求解大小同样为 m x n 的答案矩阵 answer 。
 * 矩阵 answer 中每个单元格 (r, c) 的值可以按下述方式进行计算：
 *  * 令 topLeft[r][c] 为矩阵 grid 中单元格 (r, c) 左上角对角线上 不同值 的数量。
 *  * 令 bottomRight[r][c] 为矩阵 grid 中单元格 (r, c) 右下角对角线上 不同值 的数量。
 * 然后 answer[r][c] = |topLeft[r][c] - bottomRight[r][c]| 。
 * 返回矩阵 answer 。
 * 矩阵对角线 是从最顶行或最左列的某个单元格开始，向右下方向走到矩阵末尾的对角线。
 * 如果单元格 (r1, c1) 和单元格 (r, c) 属于同一条对角线且 r1 < r ，则单元格 (r1, c1) 属于单元格 (r, c) 的左上对角线。类似地，可以定义右下对角线。
 */
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var differenceOfDistinctValues = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const answer = Array.from({ length: m }, () => Array(n).fill(0));

  const getDistinctCount = (r, c, dr, dc) => {
    const seen = new Set();
    while (r >= 0 && r < m && c >= 0 && c < n) {
      seen.add(grid[r][c]);
      r += dr;
      c += dc;
    }
    return seen.size;
  };

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const topLeft = getDistinctCount(r - 1, c - 1, -1, -1);
      const bottomRight = getDistinctCount(r + 1, c + 1, 1, 1);
      answer[r][c] = Math.abs(topLeft - bottomRight);
    }
  }

  return answer;
};
/**
 * 执行用时：40 ms, 在所有 JavaScript 提交中击败了40.00%的用户
 * 内存消耗：61.61 MB, 在所有 JavaScript 提交中击败了60.00%的用户
 */
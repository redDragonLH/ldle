/**
 * 3195. 包含所有 1 的最小矩形面积 I
 *
 * 给你一个二维 二进制 数组 grid。请你找出一个边在水平方向和竖直方向上、面积 最小 的矩形，并且满足 grid 中所有的 1 都在矩形的内部。
 * 返回这个矩形可能的 最小 面积。
 */
/**
 * 这个问题的思路如下：

1. **确定所有 1 的边界**：遍历整个 grid，记录所有为 1 的单元格的行和列索引。分别找到最小和最大的行号、列号。
2. **计算矩形面积**：矩形的左上角是 (minRow, minCol)，右下角是 (maxRow, maxCol)。面积为 (maxRow - minRow + 1) * (maxCol - minCol + 1)。
3. **特殊情况处理**：如果 grid 中没有 1，面积为 0。

实现时只需一次遍历即可得到所有边界。

 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {
  let minRow = Infinity,
    maxRow = -Infinity;
  let minCol = Infinity,
    maxCol = -Infinity;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        minRow = Math.min(minRow, i);
        maxRow = Math.max(maxRow, i);
        minCol = Math.min(minCol, j);
        maxCol = Math.max(maxCol, j);
      }
    }
  }

  // 如果没有找到任何 1，返回面积为 0
  if (minRow === Infinity) return 0;

  // 面积计算
  return (maxRow - minRow + 1) * (maxCol - minCol + 1);
};
/**
 * 执行用时 :9 ms, 在所有 JavaScript 提交中击败了33.33%的用户
 * 内存消耗 :87.45 MB, 在所有 JavaScript 提交中击败了26.67%的用户
 */

/**
 * 3000. 对角线最长的矩形的面积
 *
 * 给你一个下标从 0 开始的二维整数数组 dimensions。
 * 对于所有下标 i（0 <= i < dimensions.length），dimensions[i][0] 表示矩形 i 的长度，而 dimensions[i][1] 表示矩形 i 的宽度。
 * 返回对角线最 长 的矩形的 面积 。如果存在多个对角线长度相同的矩形，返回面积最 大 的矩形的面积。
 */
/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
  let maxDiagonal = 0;
  let maxArea = 0;

  for (let i = 0; i < dimensions.length; i++) {
    const [length, width] = dimensions[i];
    // 计算出对角线和面积
    const diagonal = Math.sqrt(length ** 2 + width ** 2);
    const area = length * width;

    if (diagonal > maxDiagonal) {
      maxDiagonal = diagonal;
      maxArea = area;
    } else if (diagonal === maxDiagonal) {
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};
/**
 * 执行用时：2 ms, 在所有 JavaScript 提交中击败了81.82%的用户
 * 内存消耗：56.32 MB, 在所有 JavaScript 提交中击败了59.09%的用户
 */

/**
 * 1637. 两点之间不包含任何点的最宽垂直区域
 *
 * 给你 n 个二维平面上的点 points ，其中 points[i] = [xi, yi] ，请你返回两点之间内部不包含任何点的 最宽垂直区域 的宽度。
 *
 * 垂直区域 的定义是固定宽度，而 y 轴上无限延伸的一块区域（也就是高度为无穷大）。 最宽垂直区域 为宽度最大的一个垂直区域。
 *
 * 请注意，垂直区域 边上 的点 不在 区域内。
 */
/**
 * 感觉和y没什么关系
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let width = points.map((e) => e[0]).sort((a, b) => a - b);
  let result = 0;
  for (let i = 1; i < width.length; i++) {
    result = Math.max(result, width[i] - width[i - 1]);
  }
  return result;
};
/**
 * 就是和y没啥关系
 * 执行用时：156 ms, 在所有 JavaScript 提交中击败了90.32%的用户
 * 内存消耗：64.3 MB, 在所有 JavaScript 提交中击败了41.94%的用户
 */
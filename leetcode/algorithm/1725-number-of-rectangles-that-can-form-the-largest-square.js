/**
 * 1725. 可以形成最大正方形的矩形数目
 *
 * 给你一个数组 rectangles ，其中 rectangles[i] = [li, wi] 表示第 i 个矩形的长度为 li 、宽度为 wi 。
 *
 * 如果存在 k 同时满足 k <= li 和 k <= wi ，就可以将第 i 个矩形切成边长为 k 的正方形。例如，矩形 [4,6] 可以切成边长最大为 4 的正方形。
 *
 * 设 maxLen 为可以从矩形数组 rectangles 切分得到的 最大正方形 的边长。
 *
 * 请你统计有多少个矩形能够切出边长为 maxLen 的正方形，并返回矩形 数目 。
 */
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let result = 0;
  let maxLen = 0;
  for (const item of rectangles) {
    let line = Math.min(item[0], item[1]);
    if (maxLen < line) {
      maxLen = line;
      result = 1;
    } else if (line === maxLen) {
      result++;
    }
  }
  return result;
};

/**
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了95.00%的用户
 * 内存消耗：44.3 MB, 在所有 JavaScript 提交中击败了13.33%的用户
 */
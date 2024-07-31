/**
 * 3111. 覆盖所有点的最少矩形数目
 *
 * 给你一个二维整数数组 point ，其中 points[i] = [xi, yi] 表示二维平面内的一个点。同时给你一个整数 w 。你需要用矩形 覆盖所有 点。
 * 每个矩形的左下角在某个点 (x1, 0) 处，且右上角在某个点 (x2, y2) 处，其中 x1 <= x2 且 y2 >= 0 ，同时对于每个矩形都 必须 满足 x2 - x1 <= w 。
 * 如果一个点在矩形内或者在边上，我们说这个点被矩形覆盖了。
 * 请你在确保每个点都 至少 被一个矩形覆盖的前提下，最少 需要多少个矩形。
 * 注意：一个点可以被多个矩形覆盖。
 */
/**
 * @param {number[][]} points
 * @param {number} w
 * @return {number}
 */
var minRectanglesToCoverPoints = function (points, w) {
  let result = 1;
  points.sort((a, b) => a[0] - b[0]);
  let start = points[0],
    end = points[0];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] - start[0] <= w) {
      end = points[i];
    } else {
      result++;
      start = points[i];
      end = points[i];
    }
  }
  return result;
};
/**
 * 执行用时：164 ms, 在所有 JavaScript 提交中击败了94.44%的用户
 * 内存消耗：83.88 MB, 在所有 JavaScript 提交中击败了27.78%的用户
 */

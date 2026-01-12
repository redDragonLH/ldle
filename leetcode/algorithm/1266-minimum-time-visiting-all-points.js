/**
 * 1266. 访问所有点的最小时间
 * 
 * 平面上有 n 个点，点的位置用整数坐标表示 points[i] = [xi, yi] 。请你计算访问所有这些点需要的 最小时间（以秒为单位）。

 * 你需要按照下面的规则在平面上移动：

 *  * 每一秒内，你可以：
 *  *  * 沿水平方向移动一个单位长度，或者
 *  *  * 沿竖直方向移动一个单位长度，或者
 *  *  * 跨过对角线移动 sqrt(2) 个单位长度（可以看作在一秒内向水平和竖直方向各移动一个单位长度）。
 *  * 必须按照数组中出现的顺序来访问这些点。
 *  * 在访问某个点时，可以经过该点后面出现的点，但经过的那些点不算作有效访问。
 */

/**
 * 这要以什么思路来处理
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let x0 = points[0][0],
    y0 = points[0][1];
  let ans = 0;
  for (let i = 1; i < points.length; ++i) {
    let x1 = points[i][0],
      y1 = points[i][1];
    ans += Math.max(Math.abs(x0 - x1), Math.abs(y0 - y1));
    x0 = x1;
    y0 = y1;
  }
  return ans;
};
/**
 * 切比雪夫距离
 * 执行用时 :1 ms, 在所有 JavaScript 提交中击败了92.86%的用户
 * 内存消耗 :54.64 MB, 在所有 JavaScript 提交中击败了85.71%的用户
 */

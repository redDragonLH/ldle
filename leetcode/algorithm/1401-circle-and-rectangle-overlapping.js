/**
 * 1401. 圆和矩形是否有重叠
 *
 * 给你一个以 (radius, xCenter, yCenter) 表示的圆和一个与坐标轴平行的矩形 (x1, y1, x2, y2) ，其中 (x1, y1) 是矩形左下角的坐标，而 (x2, y2) 是右上角的坐标。
 *
 * 如果圆和矩形有重叠的部分，请你返回 true ，否则返回 false 。
 *
 * 换句话说，请你检测是否 存在 点 (xi, yi) ，它既在圆上也在矩形上（两者都包括点落在边界上的情况）。
 */
/**
 * 位置判断
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */

var checkOverlap = function (radius, xCenter, yCenter, x1, y1, x2, y2) {
  /**
   * 圆心在矩形内部
   * 很简单,判断圆心点小于右上,大于左下
   */
  if (x1 <= xCenter && xCenter <= x2 && y1 <= yCenter && yCenter <= y2) {
    return true;
  }
  /**
   *  圆心在矩形上部
   * 圆心距离不能超过正方形上边界到圆心的距离
   */
  if (
    x1 <= xCenter &&
    xCenter <= x2 &&
    y2 <= yCenter &&
    yCenter <= y2 + radius
  ) {
    return true;
  }
  /**
   *  圆心在矩形下部
   * 同理
   */
  if (
    x1 <= xCenter &&
    xCenter <= x2 &&
    y1 - radius <= yCenter &&
    yCenter <= y1
  ) {
    return true;
  }
  /* 圆心在矩形左部 */
  if (
    x1 - radius <= xCenter &&
    xCenter <= x1 &&
    y1 <= yCenter &&
    yCenter <= y2
  ) {
    return true;
  }
  /* 圆心在矩形右部 */
  if (
    x2 <= xCenter &&
    xCenter <= x2 + radius &&
    y1 <= yCenter &&
    yCenter <= y2
  ) {
    return true;
  }
  /**
   * 四角比价麻烦,因为圆是有弧度的
   */
  /* 矩形左上角 */
  if (distance(xCenter, yCenter, x1, y2) <= radius * radius) {
    return true;
  }
  /* 矩形左下角 */
  if (distance(xCenter, yCenter, x1, y1) <= radius * radius) {
    return true;
  }
  /* 矩形右上角 */
  if (distance(xCenter, yCenter, x2, y2) <= radius * radius) {
    return true;
  }
  /* 矩形右下角 */
  if (distance(xCenter, yCenter, x1, y2) <= radius * radius) {
    return true;
  }
  /* 无交点 */
  return false;
};
function distance(ux, uy, vx, vy) {
    return (ux - vx) ** 2 + (uy - vy) ** 2;
  }
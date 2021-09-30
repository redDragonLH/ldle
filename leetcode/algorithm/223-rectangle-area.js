/**
 * 223. 矩形面积
 *
 * 给你 二维 平面上两个 由直线构成的 矩形，请你计算并返回两个矩形覆盖的总面积。
 *
 * 每个矩形由其 左下 顶点和 右上 顶点坐标表示：
 *  * 第一个矩形由其左下顶点 (ax1, ay1) 和右上顶点 (ax2, ay2) 定义。
 *  * 第二个矩形由其左下顶点 (bx1, by1) 和右上顶点 (bx2, by2) 定义。
 */

/**
 * 核心问题是获取到交叉的位置,但是不一定肯定会交叉,先确定交叉位置
 *
 * 两个矩形的水平投影到x轴上的线段分别为 [ax1,ax2]和 [bx1,bx2],竖直边投影到y轴上的线段分别为[ay1,ay2] 和 [by1,by2].
 * 如果两个矩形重叠,则重叠部分的水平投影到x轴的线段为 [max(ax1,bx1),min(ax2,bx2)],竖直边投影到y轴上的线段为 [max(ay1,by1),min(ay2,by2)],
 * 根据重叠部分的水平边投影到x轴上的线段长度和竖直边投影到y轴上的线段长度即可计算重叠部分的面积
 * 只有当两条线段的长度都大于0时,重叠部分的面积才大于0,否则重叠部分的面积为0.
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const area1 = (ax2 - ax1) * (ay2 - ay1),
    area2 = (bx2 - bx1) * (by2 - by1);
  const overlapWidth = Math.min(ax2, bx2) - Math.max(ax1, bx1),
    overlapHeight = Math.min(ay2, by2) - Math.max(ay1, by1);
  const overlapArea = Math.max(overlapWidth, 0) * Math.max(overlapHeight, 0);
  return area1 + area2 - overlapArea;
};

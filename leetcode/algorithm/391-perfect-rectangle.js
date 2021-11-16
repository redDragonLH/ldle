/**
 * 391. 完美矩形
 *
 * 给你一个数组 rectangles ，其中 rectangles[i] = [xi, yi, ai, bi] 表示一个坐标轴平行的矩形。这个矩形的左下顶点是 (xi, yi) ，右上顶点是 (ai, bi) 。
 *
 * 如果所有矩形一起精确覆盖了某个矩形区域，则返回 true ；否则，返回 false 。
 */

/**
 * 先要确定完美矩形的标准
 *      * 矩形区域中不能有空缺,即矩形区域的面积等于所有矩形的面积之和(不能大于,也不能小于)
 *      * 所以矩形也不能相交
 * 
 * 要满足精确覆盖,除了要满足矩形区域的面积等于所有面积之和,还要满足矩形区域四角的顶点只能出现一次,其余顶点必须出现两次或四次
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function (rectangles) {};

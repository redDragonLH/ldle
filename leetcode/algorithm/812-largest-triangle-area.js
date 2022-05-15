/**
 * 812. 最大三角形面积
 *
 * 给定包含多个点的集合，从其中取三个点组成三角形，返回能组成的最大三角形的面积。
 */

/**
 * 凸包算法找到最外侧点，但是遍历也可以解决
 *
 * 三角形面积咋算来着~~
 *
 * 三角形面积公式，由点得面：S = 1/2|x1y2 + x2y3  + x3y1 -x1y3 - x2y1 - x3y2|
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  const n = points.length;
  let ret = 0.0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        ret = Math.max(
          ret,
          triangleArea(
            points[i][0],
            points[i][1],
            points[j][0],
            points[j][1],
            points[k][0],
            points[k][1]
          )
        );
      }
    }
  }
  return ret;
};

const triangleArea = (x1, y1, x2, y2, x3, y3) => {
  return (
    0.5 * Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2)
  );
};

/**
 * 三层循环
 */
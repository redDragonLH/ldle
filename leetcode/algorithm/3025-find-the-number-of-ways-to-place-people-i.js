/**
 * 3025. 人员站位的方案数 I
 *
 * 给你一个  n x 2 的二维数组 points ，它表示二维平面上的一些点坐标，其中 points[i] = [xi, yi] 。
 * 计算点对 (A, B) 的数量，其中
 *  * A 在 B 的左上角，并且
 *  * 它们形成的长方形中（或直线上）没有其它点（包括边界）。
 * 返回数量。
 */
/**
 * 要求是组成的长方形的数量,里面没有其他点
 *
 * 那么算法就必须得了解
 *  1. 两个点的相对位置
 *  2. 这个长方形内和边界有没有其他点
 *  3. 如何高效遍历所有点
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function (points) {
  let ans = 0;
  let n = points.length;
  for (let i = 0; i < points.length; i++) {
    const pointA = points[i];
    for (let j = 0; j < points.length; j++) {
      const pointB = points[j];
      if (i === j || !(pointA[0] <= pointB[0] && pointA[1] >= pointB[1])) {
        continue;
      }

      if (points.length === 2) {
        ans++;
        continue;
      }

      let illegal = false;

      for (const pointTmp of points) {
        if (pointA === pointTmp || pointB === pointTmp) {
          continue;
        }

        const isXContained =
          pointTmp[0] >= pointA[0] && pointTmp[0] <= pointB[0];
        const isYContained =
          pointTmp[1] <= pointA[1] && pointTmp[1] >= pointB[1];

        illegal = isXContained && isYContained;

        if (illegal) {
          break;
        }
      }

      if (!illegal) {
        ans++;
      }
    }
  }

  return ans;
};
/**
 * 执行用时：25 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：56.16 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */
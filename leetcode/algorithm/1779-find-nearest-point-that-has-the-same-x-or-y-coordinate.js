/**
 * 1779. 找到最近的有相同 X 或 Y 坐标的点
 *
 * 给你两个整数 x 和 y ，表示你在一个笛卡尔坐标系下的 (x, y) 处。同时，在同一个坐标系下给你一个数组 points ，
 * 其中 points[i] = [ai, bi] 表示在 (ai, bi) 处有一个点。当一个点与你所在的位置有相同的 x 坐标或者相同的 y 坐标时，我们称这个点是 有效的 。
 *
 * 请返回距离你当前位置 曼哈顿距离 最近的 有效 点的下标（下标从 0 开始）。如果有多个最近的有效点，请返回下标 最小 的一个。如果没有有效点，请返回 -1 。
 *
 * 两个点 (x1, y1) 和 (x2, y2) 之间的 曼哈顿距离 为 abs(x1 - x2) + abs(y1 - y2) 。
 */

/**
 * 三个递进约束,同一个坐标系,曼哈顿距离最近,下标最小(负的怎么办)
 *
 * 要是不想层层递进处理,在一个循环里计算完所有就要把上一步的数据缓存下来
 * 比如 最短距离,在最短距离内的最小下标点
 *
 * 下标最小是什么,x+y最小么
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
const MAX_POINT = 100000;
var nearestValidPoint = function (x, y, points) {
  let len = points.length;
  let minDistance = MAX_POINT;
  let minPoint = [MAX_POINT, MAX_POINT];
  let result = -1; // 返回结果是 points 数组的下标~~
  for (let i = 0; i < len; i++) {
    let item = points[i];
    // 位置相似的点
    if (item[0] === x || item[1] === y) {
      let distance = Math.abs(item[0] - x) + Math.abs(item[1] - y);
      if (minDistance > distance) {
        minDistance = distance;
        minPoint = item;
        result = i;
      } else if (minDistance === distance) {
        if (item[0] + item[1] < minPoint[0] + minPoint[1]) {
          minPoint = item;
          result = i;
        }
      }
    }
  }
  return result;
};
/**
 * 下标究竟是啥~~~
 *
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了93.1%的用户
 * 内存消耗：49.7 MB, 在所有 JavaScript 提交中击败了45.45%的用户
 */
/**
 * 官方题解
 * @param {*} x
 * @param {*} y
 * @param {*} points
 * @returns
 */
var nearestValidPoint = function (x, y, points) {
  const n = points.length;
  let best = Number.MAX_VALUE,
    bestid = -1;
  for (let i = 0; i < n; ++i) {
    const px = points[i][0],
      py = points[i][1];
    if (x === px) {
      const dist = Math.abs(y - py);
      if (dist < best) {
        best = dist;
        // 我日,是数组下标
        bestid = i;
      }
    } else if (y === py) {
      const dist = Math.abs(x - px);
      if (dist < best) {
        best = dist;
        bestid = i;
      }
    }
  }
  return bestid;
};

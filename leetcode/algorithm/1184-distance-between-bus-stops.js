/**
 * 1184. 公交站间的距离
 *
 * 环形公交路线上有 n 个站，按次序从 0 到 n - 1 进行编号。我们已知每一对相邻公交站之间的距离，distance[i] 表示编号为 i 的车站和编号为 (i + 1) % n 的车站之间的距离。
 * 环线上的公交车都可以按顺时针和逆时针的方向行驶。
 * 返回乘客从出发点 start 到目的地 destination 之间的最短距离。
 */
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  let result = 0;
  let n = distance.length;
  let i = start;
  while (i !== destination) {
    if (i === n) {
      i = -1;
    }
    i > -1 && (result += distance[i]);
    i++;
  }
  i = start;
  let temp = 0;
  while (i !== destination) {
    if (!i) {
      i = n - 1;
    } else {
      i--;
    }
    temp += distance[i];
  }
  return Math.min(result, temp);
};
/**
 * 执行用时：63 ms, 在所有 JavaScript 提交中击败了42.31%的用户
 * 内存消耗：49.46 MB, 在所有 JavaScript 提交中击败了38.46%的用户
 */
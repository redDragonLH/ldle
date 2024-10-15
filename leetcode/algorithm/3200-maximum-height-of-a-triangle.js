/**
 * 3200. 三角形的最大高度
 *
 * 给你两个整数 red 和 blue，分别表示红色球和蓝色球的数量。你需要使用这些球来组成一个三角形，满足第 1 行有 1 个球，第 2 行有 2 个球，第 3 行有 3 个球，依此类推。
 * 每一行的球必须是 相同 颜色，且相邻行的颜色必须 不同。
 * 返回可以实现的三角形的 最大 高度。
 */

/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function (red, blue) {
  return Math.max(maxHeight(red, blue), maxHeight(blue, red));
};

function maxHeight(x, y) {
  const odd = 2 * Math.floor(Math.sqrt(x)) - 1;
  const even = 2 * Math.floor(Math.floor(-1 + Math.sqrt(1 + 4 * y)) / 2);
  return Math.min(odd, even) + 1;
}

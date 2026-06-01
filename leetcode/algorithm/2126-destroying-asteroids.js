/**
 * 2126. 摧毁小行星
 *
 * 给你一个整数 mass ，它表示一颗行星的初始质量。再给你一个整数数组 asteroids ，其中 asteroids[i] 是第 i 颗小行星的质量。
 * 你可以按 任意顺序 重新安排小行星的顺序，然后让行星跟它们发生碰撞。如果行星碰撞时的质量 大于等于 小行星的质量，那么小行星被 摧毁 ，并且行星会 获得 这颗小行星的质量。否则，行星将被摧毁。
 * 如果所有小行星 都 能被摧毁，请返回 true ，否则返回 false 。
 */
/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function (mass, asteroids) {
  asteroids.sort((a, b) => a - b);
  console.log(asteroids);
  for (let i = 0; i < asteroids.length; i++) {
    if (mass < asteroids[i]) {
      return false;
    }
    mass += asteroids[i];
  }
  return true;
};
/**
 * 执行用时：95 ms, 在所有 JavaScript 提交中击败了83.33%的用户
 * 内存消耗：68.17 MB, 在所有 JavaScript 提交中击败了75.00%的用户
 */

/**
 * 3222. 求出硬币游戏的赢家
 *
 * 给你两个 正 整数 x 和 y ，分别表示价值为 75 和 10 的硬币的数目。
 * Alice 和 Bob 正在玩一个游戏。每一轮中，Alice 先进行操作，Bob 后操作。每次操作中，玩家需要拿出价值 总和 为 115 的硬币。如果一名玩家无法执行此操作，那么这名玩家 输掉 游戏。
 * 两名玩家都采取 最优 策略，请你返回游戏的赢家。
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function (x, y) {
  let position = 0; // 0表示Alice，1表示Bob
  while (true) {
    if (x > 0 && y > 3) {
      x -= 1;
      y -= 4;
      position = 1 - position;
    } else {
      return position === 1 ? "Alice" : "Bob";
    }
  }
};
/**
 * 执行用时：1 ms, 在所有 JavaScript 提交中击败了 25.00%的用户
 * 内存消耗：51.78 MB, 在所有 JavaScript 提交中击败了5.31%的用户
 */
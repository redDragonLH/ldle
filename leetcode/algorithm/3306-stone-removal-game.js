/**
 * 3360. 移除石头游戏
 *
 * Alice 和 Bob 在玩一个游戏，他们俩轮流从一堆石头中移除石头，Alice 先进行操作。
 *  * Alice 在第一次操作中移除 恰好 10 个石头。
 *  * 接下来的每次操作中，每位玩家移除的石头数 恰好 为另一位玩家上一次操作的石头数减 1 。
 * 第一位没法进行操作的玩家输掉这个游戏。
 * 给你一个正整数 n 表示一开始石头的数目，如果 Alice 赢下这个游戏，请你返回 true ，否则返回 false 。
 */
/**
 * 还好最大只有50,不用考虑超出.
 * 最简单就是直接模拟每一步操作，判断 Alice 是否能获胜。
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function (n) {
  if (n < 10) return false;
  n -= 10;
  let lastMove = 10;
  let aliceTurn = false;
  while (n > 0) {
    lastMove--;
    if (lastMove <= 0) return !aliceTurn;
    if (n < lastMove) return !aliceTurn;
    n -= lastMove;
    aliceTurn = !aliceTurn;
  }
  return !aliceTurn;
};
/**
 * 执行用时 :0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :56.79 MB, 在所有 JavaScript 提交中击败了25.00%的用户
 */
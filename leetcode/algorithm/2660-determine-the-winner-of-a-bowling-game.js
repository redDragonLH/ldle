/**
 * 2660. 保龄球游戏的获胜者
 *
 * 给你两个下标从 0 开始的整数数组 player1 和 player2 ，分别表示玩家 1 和玩家 2 击中的瓶数。
 * 保龄球比赛由 n 轮组成，每轮的瓶数恰好为 10 。
 * 假设玩家在第 i 轮中击中 xi 个瓶子。玩家第 i 轮的价值为：
 *  * 如果玩家在该轮的前两轮的任何一轮中击中了 10 个瓶子，则为 2xi 。
 *  * 否则，为 xi 。
 * 玩家的得分是其 n 轮价值的总和。
 * 返回
 *  * 如果玩家 1 的得分高于玩家 2 的得分，则为 1 ；
 *  * 如果玩家 2 的得分高于玩家 1 的得分，则为 2 ；
 *  * 如果平局，则为 0 。
 */
/**
 * 模拟
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
  let len = player1.length;
  let score = new Array(len).fill(0);
  score[0] = player1[0] - player2[0];
  for (let i = 1; i < len; i++) {
    if (player1[i - 1] === 10 || player1[i - 2] === 10) {
      score[i] += 2 * player1[i];
    } else {
      score[i] += player1[i];
    }

    if (player2[i - 1] === 10 || player2[i - 2] === 10) {
      score[i] -= 2 * player2[i];
    } else {
      score[i] -= player2[i];
    }
  }
  let count = 0;
  for (let i = 0; i < len; i++) {
    count += score[i];
  }
  if (count === 0) return 0;
  return count > 0 ? 1 : 2;
};
/**
 * 执行用时：104 ms, 在所有 JavaScript 提交中击败了10.61%的用户
 * 内存消耗：52.99 MB, 在所有 JavaScript 提交中击败了6.06%的用户
 */
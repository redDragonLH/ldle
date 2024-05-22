/**
 * 2225. 找出输掉零场或一场比赛的玩家
 *
 * 给你一个整数数组 matches 其中 matches[i] = [winneri, loseri] 表示在一场比赛中 winneri 击败了 loseri 。
 * 返回一个长度为 2 的列表 answer ：
 *  * answer[0] 是所有 没有 输掉任何比赛的玩家列表。
 *  * answer[1] 是所有恰好输掉 一场 比赛的玩家列表。
 *
 * 两个列表中的值都应该按 递增 顺序返回。
 *
 * 注意：
 *  * 只考虑那些参与 至少一场 比赛的玩家。
 *  * 生成的测试用例保证 不存在 两场比赛结果 相同 。
 */

/**
 * 根据注意,必须是参加比赛的玩家,不过话说必须要参加才能赢或输吧
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  let winners = new Map();
  let losers = new Map();
  let allPerson = new Set();
  for (let match of matches) {
    let [winner, loser] = match;
    if (winners.has(winner)) {
      winners.set(winner, winners.get(winner) + 1);
    } else {
      winners.set(winner, 1);
    }
    if (losers.has(loser)) {
      losers.set(loser, losers.get(loser) + 1);
    } else {
      losers.set(loser, 1);
    }
    allPerson.add(winner);
    allPerson.add(loser);
  }

  let noLossPlayers = [];
  let oneLossPlayers = [];

  for (let player of allPerson) {
    if (!losers.has(player)) {
      noLossPlayers.push(player);
    } else if (losers.has(player) && losers.get(player) === 1) {
      oneLossPlayers.push(player);
    }
  }

  return [
    noLossPlayers.sort((a, b) => a - b),
    oneLossPlayers.sort((a, b) => a - b),
  ];
};
/**
 * 超时
 * 执行用时：430 ms, 在所有 JavaScript 提交中击败了5.00%的用户
 * 内存消耗：91.23 MB, 在所有 JavaScript 提交中击败了10.00%的用户
 * */

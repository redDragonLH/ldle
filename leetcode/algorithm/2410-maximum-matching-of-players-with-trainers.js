/**
 * 2410. 运动员和训练师的最大匹配数
 *
 * 给你一个下标从 0 开始的整数数组 players ，其中 players[i] 表示第 i 名运动员的 能力 值，同时给你一个下标从 0 开始的整数数组 trainers ，其中 trainers[j] 表示第 j 名训练师的 训练能力值 。
 * 如果第 i 名运动员的能力值 小于等于 第 j 名训练师的能力值，那么第 i 名运动员可以 匹配 第 j 名训练师。除此以外，每名运动员至多可以匹配一位训练师，每位训练师最多可以匹配一位运动员。
 * 请你返回满足上述要求 players 和 trainers 的 最大 匹配数。
 */
/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
  // 先对两个数组进行排序
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);

  let playerIndex = 0;
  let trainerIndex = 0;
  let matches = 0;

  // 使用双指针遍历两个数组
  while (playerIndex < players.length && trainerIndex < trainers.length) {
    if (players[playerIndex] <= trainers[trainerIndex]) {
      // 如果运动员的能力值小于等于训练师的能力值，匹配成功
      matches++;
      playerIndex++;
      trainerIndex++;
    } else {
      // 否则，训练师的能力值不足，移动到下一个训练师
      trainerIndex++;
    }
  }

  return matches;
};

/**
 * 双指针
 * 执行用时：104 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：68.08 MB, 在所有 JavaScript 提交中击败了40.00%的用户
 */
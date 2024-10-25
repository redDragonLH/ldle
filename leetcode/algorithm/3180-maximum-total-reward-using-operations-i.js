/**
 * 3180. 执行操作可获得的最大总奖励 I
 *
 * 给你一个整数数组 rewardValues，长度为 n，代表奖励的值。
 * 最初，你的总奖励 x 为 0，所有下标都是 未标记 的。你可以执行以下操作 任意次 ：
 *  * 从区间 [0, n - 1] 中选择一个 未标记 的下标 i。
 *  * 如果 rewardValues[i] 大于 你当前的总奖励 x，则将 rewardValues[i] 加到 x 上（即 x = x + rewardValues[i]），并 标记 下标 i。
 * 以整数形式返回执行最优操作能够获得的 最大 总奖励。
 */

/**
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function (rewardValues) {
  rewardValues.sort((a, b) => a - b);
  const m = rewardValues[rewardValues.length - 1];
  const dp = Array(2 * m).fill(0);
  dp[0] = 1;
  for (let x of rewardValues) {
    // 为什么只翻二倍?是因为下一个数不能是当前数的两倍?,但是为什么做下标呢?
    // 哦,dp下标
    for (let k = 2 * x - 1; k >= x; k--) {
      if (dp[k - x] === 1) {
        dp[k] = 1;
      }
    }
  }
  let res = 0;
  for (let i = 0; i < dp.length; i++) {
    if (dp[i] === 1) {
      res = i;
    }
  }
  return res;
};

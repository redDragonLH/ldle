/**
 * 518. 零钱兑换 II
 * 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。
 * 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。
 * 假设每一种面额的硬币有无限个。
 * 题目数据保证结果符合 32 位带符号整数。
 */

/**
 * 回溯可以了吧?但是怎么回溯呢,数量不同,大小不同
 * 还是得dp
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
class Solution {
  public int change(int amount, int[] coins) {
    //  确定dp 数据结构
      int[] dp = new int[amount + 1];
      dp[0] = 1;
      // 双层循环
      // 循环每种类型
      for (int coin : coins) {
          for (int i = coin; i <= amount; i++) {
            // 当前数字由多少金币组合而成
            // 需要动脑袋的思路
              dp[i] += dp[i - coin];
          }
      }
      return dp[amount];
  }
}

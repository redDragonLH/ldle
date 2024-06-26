/**
 * 322. 零钱兑换
 *
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
 * 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
 * 你可以认为每种硬币的数量是无限的。
 */

/**
 * 回溯+贪心
 * 贪心从大到小会出现用的更多的情况，还是要全部遍历，但是速度就有点完蛋
 * 
 * 还是得动态规划
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity); //初始化dp数组
  dp[0] = 0; //面额0只需要0个硬币兑换

  for (let i = 1; i <= amount; i++) {
    //循环面额
    for (let coin of coins) {
      //循环硬币数组
      if (i - coin >= 0) {
        //当面额大于硬币价值时
        //dp[i - coin]： 当前面额i减当前硬币价值所需要的最少硬币
        //dp[i] 可由 dp[i - coin] + 1 转换而来
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]; //如果dp[amount] === Infinity，则无法兑换
};

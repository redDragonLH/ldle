/**
 * 1155. 掷骰子等于目标和的方法数
 *
 * 这里有 n 个一样的骰子，每个骰子上都有 k 个面，分别标号为 1 到 k 。
 * 给定三个整数 n ,  k 和 target ，返回可能的方式(从总共 kn 种方式中)滚动骰子的数量，使正面朝上的数字之和等于 target 。
 * 答案可能很大，你需要对 109 + 7 取模 。
 *
 * 提示：
 *  * 1 <= n, k <= 30
 *  * 1 <= target <= 1000
 */
/**
 * 多层循环就没头了~~
 * 官方题解 动态规划
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (n, k, target) {
  const mod = 1e9 + 7;
  // 二维数组
  f = new Array(n + 1).fill(0).map(() => new Array(target + 1).fill(0));
  // 初始数据
  f[0][0] = 1;
  // 遍历n
  for (let i = 1; i <= n; i++) {
    // 遍历 target
    for (let j = 0; j <= target; j++) {
        // 遍历骰子面数
      for (let x = 1; x <= k; x++) {
        // 判断当前遍历的目标数是否能以当前骰子面获得
        if (j - x >= 0) {
            // 当前骰子数下当前目标数下
          f[i][j] = (f[i][j] + f[i - 1][j - x]) % mod;
        }
      }
    }
  }
  return f[n][target];
};

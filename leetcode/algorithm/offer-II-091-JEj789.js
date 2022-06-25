/**
 * 剑指 Offer II 091. 粉刷房子
 *
 * 假如有一排房子，共 n 个，每个房子可以被粉刷成红色、蓝色或者绿色这三种颜色中的一种，你需要粉刷所有的房子并且使其相邻的两个房子颜色不能相同。
 *
 * 当然，因为市场上不同颜色油漆的价格不同，所以房子粉刷成不同颜色的花费成本也是不同的。每个房子粉刷成不同颜色的花费是以一个 n x 3 的正整数矩阵 costs 来表示的。
 *
 * 例如，costs[0][0] 表示第 0 号房子粉刷成红色的成本花费；costs[1][2] 表示第 1 号房子粉刷成绿色的花费，以此类推。
 *
 * 请计算出粉刷完所有房子最少的花费成本。
 */

/**
 * 现成的动态规划结构数据，都不用自己想
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  const n = costs.length;
  let dp = new Array(3).fill(0);
  for (let j = 0; j < 3; j++) {
    dp[j] = costs[0][j];
  }
  for (let i = 1; i < n; i++) {
    const dpNew = new Array(3).fill(0);
    for (let j = 0; j < 3; j++) {
        // 反正不是自己
        // 不能大于等于3
        // 空间优化，因为处理数据时前边的数据已经无用，所以可以不必保存，这样就不需要维护二维数组
      dpNew[j] = Math.min(dp[(j + 1) % 3], dp[(j + 2) % 3]) + costs[i][j];
    }
    dp = dpNew;
  }
  return parseInt(_.min(dp));
};

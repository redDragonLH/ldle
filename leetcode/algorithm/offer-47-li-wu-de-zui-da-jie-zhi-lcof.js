/**
 * 剑指 Offer 47. 礼物的最大价值
 *
 * 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，
 * 并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
 */

/**
 * 复习动态规划
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  const m = grid.length,
    n = grid[0].length;
// 找到初始状态
// 都是零
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // 找到规划,也就是移动方向
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        // 判断向右向下和原来数据比那个最大,留大的
        // 遍历所有数据,最后的元素就是最大的
        
      if (i > 0) {
        f[i][j] = Math.max(f[i][j], f[i - 1][j]);
      }
      if (j > 0) {
        f[i][j] = Math.max(f[i][j], f[i][j - 1]);
      }
      f[i][j] += grid[i][j];
    }
  }
  return f[m - 1][n - 1];
  // 还可以优化,简化中间结构应该也可以,毕竟只和前一个数据有关
};

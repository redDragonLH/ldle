/**
 * 741. 摘樱桃
 *
 * 给你一个 n x n 的网格 grid ，代表一块樱桃地，每个格子由以下三种数字的一种来表示：
 *  * 0 表示这个格子是空的，所以你可以穿过它。
 *  * 1 表示这个格子里装着一个樱桃，你可以摘到樱桃然后穿过它。
 *  * -1 表示这个格子里有荆棘，挡着你的路。
 * 请你统计并返回：在遵守下列规则的情况下，能摘到的最多樱桃数：
 *  * 从位置 (0, 0) 出发，最后到达 (n - 1, n - 1) ，只能向下或向右走，并且只能穿越有效的格子（即只可以穿过值为 0 或者 1 的格子）；
 *  * 当到达 (n - 1, n - 1) 后，你要继续走，直到返回到 (0, 0) ，只能向上或向左走，并且只能穿越有效的格子；
 *  * 当你经过一个格子且这个格子包含一个樱桃时，你将摘到樱桃并且这个格子会变成空的（值变为 0 ）；
 *  * 如果在 (0, 0) 和 (n - 1, n - 1) 之间不存在一条可经过的路径，则无法摘到任何一个樱桃。
 */

/**
 * 两次DP应该可以解决吧,一次向下一次往上,但是好像过不了
 *
 * 官方题解: 两条路线同时DP,拿最大值
 *
 * 向上和向下的行走方式是一样的,可以看成是一个方向走两遍,但是走着走着应该分开了,不确定着怎么处理
 * 
 * * 从来不是模拟,要注意看逻辑的思路
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  const n = grid.length;
  // 构造三维数据作为数据结构
  const f = new Array(n * 2 - 1)
    .fill(0)
    .map(() =>
      new Array(n).fill(0).map(() => new Array(n).fill(-Number.MAX_VALUE))
    );
  f[0][0][0] = grid[0][0];
  // 直接三层循环
  for (let k = 1; k < n * 2 - 1; ++k) {
    for (let x1 = Math.max(k - n + 1, 0); x1 <= Math.min(k, n - 1); ++x1) {
      const y1 = k - x1;
      if (grid[x1][y1] === -1) {
        continue;
      }
      for (let x2 = x1; x2 <= Math.min(k, n - 1); ++x2) {
        let y2 = k - x2;
        if (grid[x2][y2] === -1) {
          continue;
        }
        let res = f[k - 1][x1][x2]; // 都往右
        if (x1 > 0) {
          res = Math.max(res, f[k - 1][x1 - 1][x2]); // 往下，往右
        }
        if (x2 > 0) {
          res = Math.max(res, f[k - 1][x1][x2 - 1]); // 往右，往下
        }
        if (x1 > 0 && x2 > 0) {
          res = Math.max(res, f[k - 1][x1 - 1][x2 - 1]); // 都往下
        }
        res += grid[x1][y1];
        if (x2 !== x1) {
          // 避免重复摘同一个樱桃
          res += grid[x2][y2];
        }
        f[k][x1][x2] = res;
      }
    }
  }
  return Math.max(f[n * 2 - 2][n - 1][n - 1], 0);
};

/**
 * 1219. 黄金矿工
 *
 * 你要开发一座金矿，地质勘测学家已经探明了这座金矿中的资源分布，并用大小为 m * n 的网格 grid 进行了标注。每个单元格中的整数就表示这一单元格中的黄金数量；如果该单元格是空的，那么就是 0。
 * 为了使收益最大化，矿工需要按以下规则来开采黄金：
 *  * 每当矿工进入一个单元，就会收集该单元格中的所有黄金。
 *  * 矿工每次可以从当前位置向上下左右四个方向走。
 *  * 每个单元格只能被开采（进入）一次。
 *  * 不得开采（进入）黄金数目为 0 的单元格。
 *  * 矿工可以从网格中 任意一个 有黄金的单元格出发或者是停止。
 */

/**
 *
 * 广度优先搜索 + 贪心
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {};

/**
 * 回溯算法
 * 
 * 也就是深度优先搜索吧
 * 确实,广度有点坑
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  this.grid = grid;
  this.m = grid.length;
  this.n = grid[0].length;
  // 当前点对应上下左右四个点的偏移量
  this.dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  this.ans = 0;

  const dfs = (x, y, gold) => {
    gold += grid[x][y];
    // 因为要的是黄金的量所以记录总量就可以了
    this.ans = Math.max(ans, gold);

    const rec = grid[x][y];
    // 处理过的置为 0;
    grid[x][y] = 0;

    for (let d = 0; d < 4; ++d) {
      const nx = x + this.dirs[d][0];
      const ny = y + this.dirs[d][1];
      // 当前点未超出范围且不为0,继续递归
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] > 0) {
        dfs(nx, ny, gold);
      }
    }
    // 此次递归完成后把数据重置,以便下次使用
    grid[x][y] = rec;
  };
  // 两重遍历
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] !== 0) {
        dfs(i, j, 0);
      }
    }
  }
  return ans;
};

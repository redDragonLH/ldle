/**
 * 980. 不同路径 III
 *
 * 在二维网格 grid 上，有 4 种类型的方格：
 *  * 1 表示起始方格。且只有一个起始方格。
 *  * 2 表示结束方格，且只有一个结束方格。
 *  * 0 表示我们可以走过的空方格。
 *  * -1 表示我们无法跨越的障碍。
 *
 * 返回在四个方向（上、下、左、右）上行走时，从起始方格到结束方格的不同路径的数目。
 *
 * 每一个无障碍方格都要通过一次，但是一条路径中不能重复通过同一个方格。
 */
/**
 * 回溯吧,深度优先广度优先什么不好弄
 *
 * 但是回溯怎么弄
 * 回溯的核心在于在中间计算完成后恢复原始数据
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  const r = grid.length,
    c = grid[0].length;
  let si = 0,
    sj = 0,
    n = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === 0) {
        n++;
      } else if (grid[i][j] === 1) {
        n++;
        si = i;
        sj = j;
      }
    }
  }
  return dfs(grid, si, sj, n);
};
// 方向
const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
// n 是总的数量,必须为0才是所有元素走了一遍
// 回溯核心代码
function dfs(grid, i, j, n) {
  // 终止条件,并且判断是否每个可用格子都走过
  if (grid[i][j] === 2) {
    return n === 0 ? 1 : 0;
  }
  const r = grid.length,
    c = grid[0].length,
    t = grid[i][j];
  // 当前位置置为 不可用,省的走回头路
  // 核心逻辑之一,把当前走过路径都置为不可用,让路径完全无法重复
  grid[i][j] = -1;
  // 当前可以走过的路径,因为是不同的路径是肯定会重复点的,所以全都加起来也没问题
  // 但实际上应该只有终止条件会返回1或0会加起来
  let res = 0;
  for (const dir of dirs) {
    const ni = i + dir[0],
      nj = j + dir[1];
      // 判断条件
      //    不出边界
      //    可以访问
    if (
      ni >= 0 &&
      ni < r &&
      nj >= 0 &&
      nj < c &&
      (grid[ni][nj] === 0 || grid[ni][nj] === 2)
    ) {
      res += dfs(grid, ni, nj, n - 1);
    }
  }
  // 恢复
  grid[i][j] = t;
  return res;
}

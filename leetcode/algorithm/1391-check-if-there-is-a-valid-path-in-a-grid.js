/**
 * 1391. 检查网格中是否存在有效路径
 *
 * 给你一个 m x n 的网格 grid。网格里的每个单元都代表一条街道。grid[i][j] 的街道可以是：
 *  * 1 表示连接左单元格和右单元格的街道。
 *  * 2 表示连接上单元格和下单元格的街道。
 *  * 3 表示连接左单元格和下单元格的街道。
 *  * 4 表示连接右单元格和下单元格的街道。
 *  * 5 表示连接左单元格和上单元格的街道。
 *  * 6 表示连接右单元格和上单元格的街道。
 *
 * 你最开始从左上角的单元格 (0,0) 开始出发，网格中的「有效路径」是指从左上方的单元格 (0,0) 开始、一直到右下方的 (m-1,n-1) 结束的路径。该路径必须只沿着街道走。
 * 注意：你 不能 变更街道。
 * 如果网格中存在有效的路径，则返回 true，否则返回 false 。
 */

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  class DisjointSet {
    constructor(m, n) {
      this.f = new Array(m * n);
      for (let i = 0; i < m * n; ++i) {
        this.f[i] = i;
      }
    }

    find(x) {
      return x === this.f[x] ? x : (this.f[x] = this.find(this.f[x]));
    }

    merge(x, y) {
      this.f[this.find(x)] = this.find(y);
    }
  }

  const ds = new DisjointSet(m, n);

  const getId = (x, y) => {
    return x * n + y;
  };

  const detectL = (x, y) => {
    if (
      y - 1 >= 0 &&
      (grid[x][y - 1] === 4 || grid[x][y - 1] === 6 || grid[x][y - 1] === 1)
    ) {
      ds.merge(getId(x, y), getId(x, y - 1));
    }
  };

  const detectR = (x, y) => {
    if (
      y + 1 < n &&
      (grid[x][y + 1] === 3 || grid[x][y + 1] === 5 || grid[x][y + 1] === 1)
    ) {
      ds.merge(getId(x, y), getId(x, y + 1));
    }
  };

  const detectU = (x, y) => {
    if (
      x - 1 >= 0 &&
      (grid[x - 1][y] === 3 || grid[x - 1][y] === 4 || grid[x - 1][y] === 2)
    ) {
      ds.merge(getId(x, y), getId(x - 1, y));
    }
  };

  const detectD = (x, y) => {
    if (
      x + 1 < m &&
      (grid[x + 1][y] === 5 || grid[x + 1][y] === 6 || grid[x + 1][y] === 2)
    ) {
      ds.merge(getId(x, y), getId(x + 1, y));
    }
  };

  const handler = (x, y) => {
    switch (grid[x][y]) {
      case 1:
        detectL(x, y);
        detectR(x, y);
        break;
      case 2:
        detectU(x, y);
        detectD(x, y);
        break;
      case 3:
        detectL(x, y);
        detectD(x, y);
        break;
      case 4:
        detectR(x, y);
        detectD(x, y);
        break;
      case 5:
        detectL(x, y);
        detectU(x, y);
        break;
      case 6:
        detectR(x, y);
        detectU(x, y);
        break;
    }
  };

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      handler(i, j);
    }
  }

  return ds.find(getId(0, 0)) === ds.find(getId(m - 1, n - 1));
};
/**
 * 官方题解
 */
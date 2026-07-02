/**
 * 3286. 穿越网格图的安全路径
 *
 * 给你一个 m x n 的二进制矩形 grid 和一个整数 health 表示你的健康值。
 * 你开始于矩形的左上角 (0, 0) ，你的目标是矩形的右下角 (m - 1, n - 1) 。
 * 你可以在矩形中往上下左右相邻格子移动，但前提是你的健康值始终是 正数 。
 * 对于格子 (i, j) ，如果 grid[i][j] = 1 ，那么这个格子视为 不安全 的，会使你的健康值减少 1 。
 * 如果你可以到达最终的格子，请你返回 true ，否则返回 false 。
 * 注意 ，当你在最终格子的时候，你的健康值也必须为 正数 。
 */
/**
 * 深度优先搜索?
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function (grid, health) {
  const m = grid.length;
  const n = grid[0].length;
  const visited = new Set();
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(x, y, currentHealth) {
    if (x < 0 || x >= m || y < 0 || y >= n || currentHealth <= 0) {
      return false;
    }
    const newHealth = currentHealth - grid[x][y];
    if (x === m - 1 && y === n - 1) {
      return newHealth > 0;
    }
    const key = `${x},${y}`;
    if (visited.has(key)) {
      return false;
    }
    visited.add(key);
    for (const [dx, dy] of directions) {
      if (dfs(x + dx, y + dy, newHealth)) {
        return true;
      }
    }
    visited.delete(key);
    return false;
  }

  return dfs(0, 0, health);
};

/**
 * Dijkstra 算法
 */
var findSafeWalk = function (grid, health) {
  const m = grid.length,
    n = grid[0].length;
  const dis = Array.from({ length: m }, () => new Array(n).fill(-1));
  const dirs = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const pq = new MinPriorityQueue({
    compare: (a, b) => a[0] - b[0],
  });
  pq.enqueue([grid[0][0], 0, 0]);

  while (!pq.isEmpty()) {
    const [val, cx, cy] = pq.dequeue();
    if (dis[cx][cy] >= 0) {
      continue;
    }
    dis[cx][cy] = val;

    for (const [dx, dy] of dirs) {
      const nx = cx + dx;
      const ny = cy + dy;

      if (nx < 0 || ny < 0 || nx >= m || ny >= n || dis[nx][ny] >= 0) {
        continue;
      }

      pq.enqueue([val + grid[nx][ny], nx, ny]);
    }
  }

  return dis[m - 1][n - 1] < health;
};

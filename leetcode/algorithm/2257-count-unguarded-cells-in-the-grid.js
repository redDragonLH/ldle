/**
 * 2257. 统计网格图中没有被保卫的格子数
 *
 * 给你两个整数 m 和 n 表示一个下标从 0 开始的 m x n 网格图。同时给你两个二维整数数组 guards 和 walls ，其中 guards[i] = [rowi, coli] 且 walls[j] = [rowj, colj] ，分别表示第 i 个警卫和第 j 座墙所在的位置。
 * 一个警卫能看到 4 个坐标轴方向（即东、南、西、北）的 所有 格子，除非他们被一座墙或者另外一个警卫 挡住 了视线。如果一个格子能被 至少 一个警卫看到，那么我们说这个格子被 保卫 了。
 * 请你返回空格子中，有多少个格子是 没被保卫 的。
 */

/**
 * 题目挺直白，或者说暴力算法非常简单
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {
  let grid = new Array(m).fill().map(() => new Array(n).fill(0)); // 网格状态数组
  const q = new Queue(); // 广度优先搜索队列
  // 每个方向的单位向量
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  for (let guard of guards) {
    grid[guard[0]][guard[1]] = -1;
    for (let k = 0; k < 4; ++k) {
      // 将四个方向视线对应的状态均添加进搜索队列中
      q.enqueue([guard[0], guard[1], k]);
    }
  }
  for (let wall of walls) {
    grid[wall[0]][wall[1]] = -2;
  }
  while (!q.isEmpty()) {
    let [x, y, k] = q.dequeue();
    let nx = x + dx[k];
    let ny = y + dy[k];
    if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] >= 0) {
      // 沿着视线方向的下一个坐标合法，且不为警卫或墙
      if ((grid[nx][ny] & (1 << k)) === 0) {
        // 对应状态未遍历过
        grid[nx][ny] |= 1 << k;
        q.enqueue([nx, ny, k]);
      }
    }
  }
  let res = 0; // 未被保护格子数目
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === 0) {
        ++res;
      }
    }
  }
  return res;
};
/**
 * 执行用时：652 ms, 在所有 JavaScript 提交中击败了28.57%的用户
 * 内存消耗：114.68 MB, 在所有 JavaScript 提交中击败了14.29%的用户
 */
/**
 * 1765. 地图中的最高点
 *
 * 给你一个大小为 m x n 的整数矩阵 isWater ，它代表了一个由 陆地 和 水域 单元格组成的地图。
 *  * 如果 isWater[i][j] == 0 ，格子 (i, j) 是一个 陆地 格子。
 *  * 如果 isWater[i][j] == 1 ，格子 (i, j) 是一个 水域 格子。
 *
 * 你需要按照如下规则给每个单元格安排高度：
 *  * 每个格子的高度都必须是非负的。
 *  * 如果一个格子是是 水域 ，那么它的高度必须为 0 。
 *  * 任意相邻的格子高度差 至多 为 1 。当两个格子在正东、南、西、北方向上相互紧挨着，就称它们为相邻的格子。（也就是说它们有一条公共边）
 *
 * 找到一种安排高度的方案，使得矩阵中的最高高度值 最大 。
 *
 * 请你返回一个大小为 m x n 的整数矩阵 height ，其中 height[i][j] 是格子 (i, j) 的高度。如果有多种解法，请返回 任意一个 。
 */

/**
 * 也就是找到水域,然后往四周扩散
 *
 * 多源广度优先搜索~~~
 *
 * 由java代码转译而来
 *
 * 超时~~
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
  let dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let m = isWater.length,
    n = isWater[0].length;
  let ans = Array.from({ length: m }, () => Array.from({ length: n }));

  for (let i = 0; i < m; ++i) {
    ans[i].fill(-1); // -1 表示该格子尚未被访问过
    // Arrays.fill(ans[i], -1);
  }

  let queue = [];
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (isWater[i][j] == 1) {
        ans[i][j] = 0;
        queue.push([i, j]); // 将所有水域入队
      }
    }
  }
  while (queue.length) {
    let p = queue.shift();
    for (let dir of dirs) {
      let x = p[0] + dir[0],
        y = p[1] + dir[1];
      if (0 <= x && x < m && 0 <= y && y < n && ans[x][y] == -1) {
        ans[x][y] = ans[p[0]][p[1]] + 1;
        queue.push([x, y]);
      }
    }
  }
  return ans;
};

/**
 * 第三方题解
 * 
 * 看起来最大优化只是优化了中间数据,直接在数据来源上操作
 * 剩下的只是数据流通的处理
 */
const DIRS = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0],
  ],
  MAX = 0x3f3f3f;
var highestPeak = function (isWater) {
  // 直接在来源数据上处理
  // 倒是减少了新建与处理新数据
  const m = isWater.length,
    n = isWater[0].length;
  let queue = new Array(),
    cost = 0;
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      if (isWater[i][j] == 1) {
        // 初始化数据结构
        isWater[i][j] = 0;
        queue.push([i, j]);
      } else {
        // 陆地直接拉满,等到时候比较的时候
        isWater[i][j] = MAX;
      }
  while (queue.length > 0) {
    const nxt = new Array();
    // 每层增加的高度都是一样的
    cost++;
    for (const point of queue)
      for (const dir of DIRS) {
        const nx = point[0] + dir[0],
          ny = point[1] + dir[1];
        if (nx >= 0 && ny >= 0 && nx < m && ny < n && isWater[nx][ny] > cost) {
          isWater[nx][ny] = cost;
          nxt.push([nx, ny]);
        }
      }
      // 也可以直接push 到queue ,只不过要多加一个判断
    queue = nxt;
  }
  return isWater;
};

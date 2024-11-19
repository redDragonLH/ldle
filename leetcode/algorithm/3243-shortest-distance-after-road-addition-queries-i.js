/**
 * 3243. 新增道路查询后的最短距离 I
 *
 * 给你一个整数 n 和一个二维整数数组 queries。
 * 有 n 个城市，编号从 0 到 n - 1。初始时，每个城市 i 都有一条单向道路通往城市 i + 1（ 0 <= i < n - 1）。
 * queries[i] = [ui, vi] 表示新建一条从城市 ui 到城市 vi 的单向道路。每次查询后，你需要找到从城市 0 到城市 n - 1 的最短路径的长度。
 * 返回一个数组 answer，对于范围 [0, queries.length - 1] 中的每个 i，answer[i] 是处理完前 i + 1 个查询后，从城市 0 到城市 n - 1 的最短路径的长度。
 */
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function (n, queries) {
  let result = [];
  let mapping = new Map();
  for (let i = 0; i < n - 1; i++) {
    mapping.set(i, [i + 1]);
  }
  for (const path of queries) {
    mapping.set(path[0], mapping.get(path[0]).concat(path[1]));
    result.push(deep(n - 1, mapping));
  }
  return result;
};
let deep = (target, mapping) => {
  let queue = [0];
  let step = 0;
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node === target) {
        return step;
      }
      queue.push(...mapping.get(node));
    }
    step++;
  }
  return -1;
};
/**
 * 超时,这还能有优化方案?
 * 或许可以缓存之前的数据,如果添加的路径的起始位置是之前处理过的,那么只需要计算新添加的路径的终点到终点的距离即可
 */

/**
 * 官方题解 广度优先搜索
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function(n, queries) {
    // 构建初步的邻接表
    let neighbors = new Array(n).fill().map(() => []);
    for (let i = 0; i < n - 1; i++) {
        neighbors[i].push(i + 1);
    }
    let res = [];
    for (let i = 0; i < queries.length; i++) {
        neighbors[queries[i][0]].push(queries[i][1]);
        // 也是从头算
        res.push(bfs(n, neighbors));
    }
    return res;
};

var bfs = function(n, neighbors) {
    let dist = new Array(n).fill(-1);
    dist[0] = 0;
    let q = [0];
    while (q.length > 0) {
        let x = q.shift();
        for (let y of neighbors[x]) {
            // 如果已经访问过了，就不再访问
            if (dist[y] >= 0) {
                continue;
            }
            q.push(y);
            // 从x到y的距离是从x到0的距离+1
            dist[y] = dist[x] + 1;
        }
    }
    return dist[n - 1];
};
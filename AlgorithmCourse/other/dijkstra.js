/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  // 构建图
  let graph = new Array(n + 1)
    .fill(null)
    .map(() => new Array(n + 1).fill(Infinity));
  for (const time of times) {
    graph[time[0]][time[1]] = time[2];
  }
  console.log("graph", graph);
  // 初始化距离数组
  let dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;
  // 初始化标记数组
  let visited = new Array(n + 1).fill(false);
  visited[0] = true;
  // dijstra  从k开始
  // 这是单纯的dijstra算法，没有指定从哪里开始,只是从头遍历
  for (let i = 1; i <= n; i++) {
    let x = -1;
    for (let y = 1; y <= n; y++) {
      if (!visited[y] && (x === -1 || dist[y] < dist[x])) {
        x = y;
      }
    }
    visited[x] = true;
    for (let y = 1; y <= n; y++) {
      dist[y] = Math.min(dist[y], dist[x] + graph[x][y]);
    }
  }
  console.log("dist", dist);
  if (visited.includes(false)) {
    return -1;
  }
  return dist[n];
};
/**
 * 算法与数据结构
 * 
 * 构建图
 * 初始化距离数组
 * 初始化标记数组
 * dijstra算法
 */
/**
 * 改良 广度优先模式
 * @param {*} times 
 * @param {*} n 
 * @param {*} k 
 * @returns 
 */
var networkDelayTime = function (times, n, k) {
  // 构建图
  let graph = new Array(n + 1)
    .fill(null)
    .map(() => new Array(n + 1).fill(Infinity));
  for (const time of times) {
    graph[time[0]][time[1]] = time[2];
  }
  console.log("graph", graph);
  // 初始化距离数组
  let dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;
  // 初始化标记数组
  let visited = new Array(n + 1).fill(false);
  visited[0] = true;
  // dijstra  从k开始
  // 这是单纯的dijstra算法，没有指定从哪里开始,只是从头遍历

  let element = [k];
  while (element.length > 0) {
    let x = element.pop();
    visited[x] = true;
    map = graph[x];
    for (let y = 1; y <= n; y++) {
    //   if (isFinite(map[y])) {
        dist[y] = Math.min(dist[y], dist[x] + map[y]);
        if (!visited[y]) {
          element.push(y);
        }
    //   }
    }
  }
  console.log("dist", dist, visited);
  if (visited.includes(false)) {
    return -1;
  }
  return dist.reduce(
    (pre, cur) => (!isFinite(cur) ? pre : Math.max(pre, cur)),
    0
  );
};

// 计算结果不对,奇怪
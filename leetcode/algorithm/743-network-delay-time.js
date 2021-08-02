/**
 * 743. 网络延迟时间
 *
 * 有 n 个网络节点，标记为 1 到 n。
 *
 * 给你一个列表 times，表示信号经过 有向 边的传递时间。 times[i] = (ui, vi, wi)，其中 ui 是源节点，vi 是目标节点， wi 是一个信号从源节点传递到目标节点的时间。
 *
 * 现在，从某个节点 K 发出一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1 。
 */

/**
 *
 * 先把time 处理为以源节点为键的映射表
 * 然后广度优先搜索,顺便记一下经过的节点数
 *
 * 还有多路径到一个点,那么就得对比多条路径那个比较快
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  let map = new Map();

  times.forEach((e) => {
    map.has(e[0]) ? map.set(e[0], [...map.get(e[0]), e]) : map.set(e[0], [e]);
  });
  if (!map.has(k)) return -1;
  let arr = [k];
  let pathLen = 0;
  let already = {};
  already[k] = true;
  // 判断当前还有没有节点没处理,但是其实最后一层节点是不用处理的
  while (arr.length) {
    let len = arr.length;
    //  这层的最大长度
    let locpathLen = 0;
    while (len) {
      let nodes = map.get(arr.shift());
      if (!nodes) {
        len--;
        continue;
      }
      let lenCounts = [];
      nodes.forEach((e) => {
        if (!already[e[1]]) {
          arr.push(e[1]);
          lenCounts.push(e[2]);
          already[e[1]] = true;
        }
      });

      lenCounts.length && (locpathLen += Math.max(...lenCounts));

      len--;
    }
    pathLen += locpathLen;
  }
  return pathLen;
};

/**
 * 官方题解 单源最短路径算法 Dijkstra
 *
 * Dijkstra 算法:
 *      将所有节点分成两类:已确定从起点到当前点的最短长度的节点,以及未确定从起点到当前点的最短路长度的节点
 *  每次从「从未确定节点」中取一个与起点距离最短的点,将它归类未「已确定节点」,并用它「更新」从起点到其他所有「未确定节点」的距离,直到所有点都被归类未「已确定节点」
 *
 *      注: 用节点A「更新」节点B的意思是:用起点到节点A的最短路径长度加上从节点A到节点B的长度,去比较起点到节点B的最短路长度,如果前者小于后者,那就用前者更新后者.这种操作也被叫做「松弛」
 *
 *      也就是 每次选择「未确定节点」时,起点到它的最短路径的长度可以被确定
 *
 *      因为已经用了每一个「已确定节点」更新过了当前节点,无需再次更新(因为一个节点不能多次到达).而当前节点已经是所有「未确定节点」中与起点距离最短的点,不可能被其他「未确定节点」更新
 */
/**
 *
 */
var networkDelayTime = function (times, n, k) {
  const INF = Number.MAX_SAFE_INTEGER;
  const g = new Array(n).fill(INF).map(() => new Array(n).fill(INF));
  for (const t of times) {
    const x = t[0] - 1,
      y = t[1] - 1;
    g[x][y] = t[2];
  }

  const dist = new Array(n).fill(INF);
  dist[k - 1] = 0;
  const used = new Array(n).fill(false);
  for (let i = 0; i < n; ++i) {
    let x = -1;
    for (let y = 0; y < n; ++y) {
      if (!used[y] && (x === -1 || dist[y] < dist[x])) {
        x = y;
      }
    }
    used[x] = true;
    for (let y = 0; y < n; ++y) {
      dist[y] = Math.min(dist[y], dist[x] + g[x][y]);
    }
  }

  let ans = Math.max(...dist);
  return ans === INF ? -1 : ans;
};

/**
 * 310. 最小高度树
 *
 * 树是一个无向图，其中任何两个顶点只通过一条路径连接。 换句话说，一个任何没有简单环路的连通图都是一棵树。
 *
 * 给你一棵包含 n 个节点的树，标记为 0 到 n - 1 。给定数字 n 和一个有 n - 1 条无向边的 edges 列表（每一个边都是一对标签），其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 之间存在一条无向边。
 *
 * 可选择树中任何一个节点作为根。当选择节点 x 作为根节点时，设结果树的高度为 h 。在所有可能的树中，具有最小高度的树（即，min(h)）被称为 最小高度树 。
 *
 * 请你找到所有的 最小高度树 并按 任意顺序 返回它们的根节点标签列表。
 *
 * 树的 高度 是指根节点和叶子节点之间最长向下路径上边的数量。
 */

/**
 * 找到一个节点,它的最远节点的距离在所有节点为根节点的树中最近
 *
 * 暴力遍历
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  let result = [];
  let minHeight = Number.MAX_SAFE_INTEGER;
  if (!n) return result;
  // 应该先构建一个节点树
  let tree = buildTree(n, edges);
  console.log("tree", tree);
  // 每个节点进行遍历,找到最小的高度
  tree.forEach((e, i) => {
    let set = new Set();
    let nodes = [i];

    let heigh = 0;
    while (nodes.length) {
      let nodeLen = nodes.length;
      while (nodeLen--) {
        let node = nodes.shift();
        if (set.has(node)) continue;
        set.add(node);

        e.forEach((sube) => {
          if (!set.has(sube)) {
            nodes.push(sube);
          }
        });
      }

      heigh++;
    }
    console.log("heigh", heigh);
    if (heigh === minHeight) {
      result.push(i);
    } else if (heigh < minHeight) {
      minHeight = heigh;
      result = [i];
    }
  });
  return result;
};
const buildTree = (n, edges) => {
  let nodeEdges = [];
  for (let i = 0; i < n; i++) {
    nodeEdges[i] = [];
    edges.forEach((e) => {
      if (e[1] === i) {
        nodeEdges[i].push(e[0]);
      } else if (e[0] === i) {
        nodeEdges[i].push(e[1]);
      }
    });
  }
  return nodeEdges;
};
/**
 * 超时,要怎样优化,是否可以记忆
 */

/**
 * 找到一个节点,它的最远节点的距离在所有节点为根节点的树中最近
 *
 * 优化:
 * 增加记忆点,毕竟每个节点连接都是确定的,但是进入节点不确定,这样的情况下,那就必须把这个节点下的节点的高度也分别记忆,因为可能需要查找次低节点,计算也就变得复杂了
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {};

/**
 * 官方题解: 广度优先
 * 和我的初始暴力思路是相同的,为啥能过
 */
var findMinHeightTrees = function (n, edges) {
  const ans = [];
  if (n === 1) {
    ans.push(0);
    return ans;
  }
  const adj = new Array(n).fill(0).map(() => new Array());
  for (const edge of edges) {
    adj[edge[0]].push(edge[1]);
    adj[edge[1]].push(edge[0]);
  }

  const parent = new Array(n).fill(-1);
  /* 找到与节点 0 最远的节点 x */
  const x = findLongestNode(0, parent, adj);
  /* 找到与节点 x 最远的节点 y */
  let y = findLongestNode(x, parent, adj);
  /* 求出节点 x 到节点 y 的路径 */
  const path = [];
  parent[x] = -1;
  while (y !== -1) {
    path.push(y);
    y = parent[y];
  }
  const m = path.length;
  if (m % 2 === 0) {
    ans.push(path[Math.floor(m / 2) - 1]);
  }
  ans.push(path[Math.floor(m / 2)]);
  return ans;
};

const findLongestNode = (u, parent, adj) => {
  const n = adj.length;
  const queue = [];
  const visit = new Array(n).fill(false);
  queue.push(u);
  visit[u] = true;
  let node = -1;

  while (queue.length) {
    const curr = queue.shift();
    node = curr;
    for (const v of adj[curr]) {
      if (!visit[v]) {
        visit[v] = true;
        parent[v] = curr;
        queue.push(v);
      }
    }
  }
  return node;
};

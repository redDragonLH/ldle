/**
 * 1377. T 秒后青蛙的位置
 *
 * 给你一棵由 n 个顶点组成的无向树，顶点编号从 1 到 n。青蛙从 顶点 1 开始起跳。规则如下：
 *  * 在一秒内，青蛙从它所在的当前顶点跳到另一个 未访问 过的顶点（如果它们直接相连）。
 *  * 青蛙无法跳回已经访问过的顶点。
 *  * 如果青蛙可以跳到多个不同顶点，那么它跳到其中任意一个顶点上的机率都相同。
 *  * 如果青蛙不能跳到任何未访问过的顶点上，那么它每次跳跃都会停留在原地。
 *
 * 无向树的边用数组 edges 描述，其中 edges[i] = [ai, bi] 意味着存在一条直接连通 ai 和 bi 两个顶点的边。
 *
 * 返回青蛙在 t 秒后位于目标顶点 target 上的概率。与实际答案相差不超过 10-5 的结果将被视为正确答案。
 */

/**
 * 深度优先搜索
 * 
 * 首先根据 edges 求出树的邻接表,方便对图进行搜索..并且定义数组seen 用来记录已经遍历过的顶点.
 * 此外 dfs 的参数还包括当前遍历的顶点序号,和剩余时间t
 * 
 * 每次遍历一个节点的时候,如果当前节点没有后续节点,或者剩余时间为0,不能继续搜索了.此时当前节点是 target,返回概率1.0,否则返回概率0.0.
 * 如果有后续节点，并且剩余时间不为 0，我们继续深度优先搜索，如果有子节点返回概率 p>0，说明已经找到了节点 target ， 
 * 又因为跳到任意一个后续子节点上的机率都相同， 我们返回概率 p 除以后续节点个数的商，作为最后的结果。
 * 
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function (n, edges, t, target) {
    // 邻接表,也就是当前元素联通的几个元素
  let G = [];
  for (let i = 0; i <= n; i++) {
    G.push([]);
  }
  // 无向,也就是全向
  for (let e of edges) {
    G[e[0]].push(e[1]);
    G[e[1]].push(e[0]);
  }
  //遍历记录表
  let seen = new Array(n).fill(false);
  return dfs(G, seen, 1, t, target);
};

/**
 * 
 * @param {Array} G 邻接表
 * @param {*} seen 已遍历点记录表
 * @param {*} i 当前序号
 * @param {*} t 剩余时间
 * @param {*} target 目标数
 * @returns 
 */
function dfs(G, seen, i, t, target) {
    // 初始点需要特殊处理一下
  let nxt = i == 1 ? G[i].length : G[i].length - 1;

  if (t == 0 || nxt == 0) {
    return i == target ? 1.0 : 0.0;
  }
  // 已遍历
  seen[i] = true;
  let ans = 0.0;
  for (let j of G[i]) {
    if (!seen[j]) {
      ans += dfs(G, seen, j, t - 1, target);
    }
  }
  // 比例
  return ans / nxt;
}

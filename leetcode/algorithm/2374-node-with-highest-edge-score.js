/**
 * 2374. 边积分最高的节点
 *
 * 给你一个有向图，图中有 n 个节点，节点编号从 0 到 n - 1 ，其中每个节点都 恰有一条 出边。
 * 图由一个下标从 0 开始、长度为 n 的整数数组 edges 表示，其中 edges[i] 表示存在一条从节点 i 到节点 edges[i] 的 有向 边。
 * 节点 i 的 边积分 定义为：所有存在一条指向节点 i 的边的节点的 编号 总和。
 * 返回 边积分 最高的节点。如果多个节点的 边积分 相同，返回编号 最小 的那个。
 */

/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function (edges) {
  let maxMap = new Map();
  maxMap.set(1000000, 0);
  let maxIndex = 1000000;
  for (let i = 0; i < edges.length; i++) {
    if (maxMap.has(edges[i])) {
      maxMap.set(edges[i], maxMap.get(edges[i]) + i);
    } else {
      maxMap.set(edges[i], i);
    }
    if (maxMap.get(edges[i]) > maxMap.get(maxIndex)) {
      maxIndex = edges[i];
    } else if (maxMap.get(edges[i]) === maxMap.get(maxIndex)) {
      maxIndex = Math.min(maxIndex, edges[i]);
    }
  }
  return maxIndex;
};
/**
 * 执行用时：143 ms, 在所有 JavaScript 提交中击败了33.33%的用户
 * 内存消耗：69.48 MB, 在所有 JavaScript 提交中击败了55.56%的用户
 */

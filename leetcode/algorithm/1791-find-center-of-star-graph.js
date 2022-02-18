/**
 * 1791. 找出星型图的中心节点
 *
 * 有一个无向的 星型 图，由 n 个编号从 1 到 n 的节点组成。星型图有一个 中心 节点，并且恰有 n - 1 条边将中心节点与其他每个节点连接起来。
 * 给你一个二维整数数组 edges ，其中 edges[i] = [ui, vi] 表示在节点 ui 和 vi 之间存在一条边。请你找出并返回 edges 所表示星型图的中心节点。
 */

/**
 * 只要判断两个点的四个点哪个是重复的
 * 既然有一个中心点,那么一条边的一个点必须是这个中心点
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  let mapping = new Map();
  for (const edge of edges) {
    for (const node of edge) {
      mapping.set(node, (mapping.get(node) || 0) + 1);
      if (mapping.get(node) >= 2) return node;
    }
  }
};
/**
 * 执行用时：196 ms, 在所有 JavaScript 提交中击败了94.52%的用户
 * 内存消耗：56 MB, 在所有 JavaScript 提交中击败了29.13%的用户
 */
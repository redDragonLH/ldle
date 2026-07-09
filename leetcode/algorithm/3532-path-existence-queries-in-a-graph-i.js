/**
 * 3532. 针对图的路径存在性查询 I
 *
 * 给你一个整数 n，表示图中的节点数量，这些节点按从 0 到 n - 1 编号。
 * 同时给你一个长度为 n 的整数数组 nums，该数组按 非递减 顺序排序，以及一个整数 maxDiff。
 * 如果满足 |nums[i] - nums[j]| <= maxDiff（即 nums[i] 和 nums[j] 的 绝对差 至多为 maxDiff），则节点 i 和节点 j 之间存在一条 无向边 。
 * 此外，给你一个二维整数数组 queries。对于每个 queries[i] = [ui, vi]，需要判断节点 ui 和 vi 之间是否存在路径。
 * 返回一个布尔数组 answer，其中 answer[i] 等于 true 表示在第 i 个查询中节点 ui 和 vi 之间存在路径，否则为 false。
 */

/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function (n, nums, maxDiff, queries) {
  // 先把所有的边找出来，存到一个Map里，key是节点，value是与该节点相连的所有节点
  const graph = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(nums[i] - nums[j]) <= maxDiff) {
        if (!graph.has(i)) graph.set(i, []);
        if (!graph.has(j)) graph.set(j, []);
        graph.get(i).push(j);
        graph.get(j).push(i);
      } else {
        break; // 因为nums是非递减的，所以一旦差值大于maxDiff，后面的也不会满足条件
      }
    }
  }

  // 然后对每个查询进行DFS或BFS搜索，看是否能从ui到达vi
  const answer = [];
  for (const [ui, vi] of queries) {
    const visited = new Set();
    const stack = [ui];
    let found = false;
    while (stack.length > 0) {
      const node = stack.pop();
      if (node === vi) {
        found = true;
        break;
      }
      if (!visited.has(node)) {
        visited.add(node);
        const neighbors = graph.get(node) || [];
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }
    answer.push(found);
  }

  return answer;
};
/**
 * 这个题的核心是数据结构的选择,优化方向是减少每次完整遍历
 * 这个就超时了,
 */
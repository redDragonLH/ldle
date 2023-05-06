/**
 * 1042. 不邻接植花
 *
 * 有 n 个花园，按从 1 到 n 标记。另有数组 paths ，其中 paths[i] = [xi, yi] 描述了花园 xi 到花园 yi 的双向路径。在每个花园中，你打算种下四种花之一。
 *
 * 另外，所有花园 最多 有 3 条路径可以进入或离开.
 *
 * 你需要为每个花园选择一种花，使得通过路径相连的任何两个花园中的花的种类互不相同。
 *
 * 以数组形式返回 任一 可行的方案作为答案 answer，其中 answer[i] 为在第 (i+1) 个花园中种植的花的种类。花的种类用  1、2、3、4 表示。保证存在答案。
 */

/**
 * 限制条件很有意思，最多只有3条路径，也就是说肯定能着色
 * 
 * 主要工作就是建立邻接表
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, paths) {
  let adj = new Array(n).fill(null).map(() => []);
  // 遍历所有路径，把所有路径列出来
  for (let path of paths) {
    adj[path[0] - 1].push(path[1] - 1);
    adj[path[1] - 1].push(path[0] - 1);
  }
  let ans = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let colored = new Array(5).fill(false);
    // 遍历当前花园的邻接花园，
    // 已经有颜色的就把这个颜色标记出来
    for (let vertex of adj[i]) {
      colored[ans[vertex]] = true;
    }
    // 随便找一个没有用的颜色给到ans，
    // 算是贪心的思路吧，并没有动态规划等操作回溯或遍历整个问题
    for (let j = 1; j <= 4; j++) {
      if (!colored[j]) {
        ans[i] = j;
        break;
      }
    }
  }
  return ans;
};

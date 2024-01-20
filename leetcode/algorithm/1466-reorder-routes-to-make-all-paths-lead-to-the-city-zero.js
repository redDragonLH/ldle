/**
 * 1466. 重新规划路线
 *
 * n 座城市，从 0 到 n-1 编号，其间共有 n-1 条路线。因此，要想在两座不同城市之间旅行只有唯一一条路线可供选择（路线网形成一颗树）。去年，交通运输部决定重新规划路线，以改变交通拥堵的状况。
 * 路线用 connections 表示，其中 connections[i] = [a, b] 表示从城市 a 到 b 的一条有向路线。
 * 今年，城市 0 将会举办一场大型比赛，很多游客都想前往城市 0 。
 * 请你帮助重新规划路线方向，使每个城市都可以访问城市 0 。返回需要变更方向的最小路线数。
 * 题目数据 保证 每个城市在重新规划路线方向后都能到达城市 0 。
 */

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const e = new Array(n).fill(0).map(() => new Array());
  // 把边的方向去掉加入到mappig中
  for (const edge of connections) {
    // 第二个参数是1则要转向
    // 权重边
    e[edge[0]].push([edge[1], 1]);
    e[edge[1]].push([edge[0], 0]);
  }
  // 深度优先遍历方法
  const dfs = function (x, parent) {
    let res = 0;
    // 遍历当前的点所能达到的边
    // 不管方向
    for (const edge of e[x]) {
      if (edge[0] == parent) {
        continue;
      }
      // 加上此边的方向,是1则表示要转向
      res += edge[1] + dfs(edge[0], x);
    }
    return res;
  };
  return dfs(0, -1, e);
};
/**
 * 解题思路非常有意思
 * 给每条边的映射添加方向,而由于只有两个方向,其中只有一个方向需要改变,那么改变的方向就给一个有意义的值,那么遍历到当前边就可以很清楚的知道是不是要转向
 * 而且使用0开始遍历,所以遍历路径就是最短的路径,不需要考虑当前遍历边是否需要转向,只要值是有意义的,那就必定转向
 * 
 * 所有边都可遍历,只要能分辨哪些是需要转向,哪些不需要
 * 如果按照原始边方向遍历,那就会有很多元素无法遍历,或者遍历逻辑会很复杂
 */
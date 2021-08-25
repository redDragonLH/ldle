/**
 * 797. 所有可能的路径
 *
 * 给你一个有 n 个节点的 有向无环图（DAG），请你找出所有从节点 0 到节点 n-1 的路径并输出（不要求按特定顺序）
 *
 * 二维数组的第 i 个数组中的单元都表示有向图中 i 号节点所能到达的下一些节点，空就是没有下一个结点了。
 *
 * 译者注：有向图是有方向的，即规定了 a→b 你就不能从 b→a 。
 */

/**
 * 广度优先好像有点坑,深度优先吧
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let lastNum = graph.lengt - 1;
  let result = [];
  let tempPath = [];
  // 深度优先就得考虑保存当前的元素,或是从原数据里面删除已经全部处理完的元素
  // 深度还有个回溯的逻辑需要处理
  while(true){
      graph
  }
};

/**
 * 第三方题解
 * 
 * 递归处理是一个最清晰的,最简单的解决方案,但是每次遍历增加了函数的初始化,效率不一定高
 * @param {number[][]} graph
 * @return {number[][]}
 */
 var allPathsSourceTarget = function(graph) {
    const ans = []
    const n = graph.length

    function backtrack(cur, path) {
        // 找到可行路径
        if (cur === n - 1) {
            ans.push(path.slice(0))
            return
        }
        // 每格节点进行深度递归,返回到的时候删除上一个
        for (const g of graph[cur]) {
            path.push(g)
            backtrack(g, path)
            path.pop()
        }
    }
    // 初始位置
    backtrack(0, [0])
    return ans
};
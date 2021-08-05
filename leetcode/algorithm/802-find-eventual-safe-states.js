/**
 * 802. 找到最终的安全状态
 *
 * 在有向图中，以某个节点为起始节点，从该点出发，每一步沿着图中的一条有向边行走。如果到达的节点是终点（即它没有连出的有向边），则停止。
 *
 * 对于一个起始节点，如果从该节点出发，无论每一步选择沿哪条有向边行走，最后必然在有限步内到达终点，则将该起始节点称作是 安全 的。
 *
 * 返回一个由图中所有安全的起始节点组成的数组作为答案。答案数组中的元素应当按 升序 排列。
 *
 * 该有向图有 n 个节点，按 0 到 n - 1 编号，其中 n 是 graph 的节点数。图以下述形式给出：graph[i] 是编号 j 节点的一个列表，满足 (i, j) 是图的一条有向边。
 */

/**
 * 获取所有安全起始点
 *
 * 那就肯定会有无限循环,最重要的就是确定无限循环路径,和无限循环路径的重复分支,进入结果,不过去重应该可以解决但是增加耗时和复杂度
 *
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  // 从零开始遍历,用递归感觉增加耗时,不用就得用复杂结果保存中间过程
};

const deep = (graph, path, pathArr) => {};

/**
 * 官方题解 深度优先 + 三色标记法
 *
 * 若起始节点位于一个环内,或者能到达一个环,则该节点是不安全的,否则该节点是安全的(有环就不行,不仅要判断是否有符合题意的结果,还要判断有没有有环的分支)
 *
 * 可以使用深度优先搜索来找环,并在深度优先搜索时,用三种颜色对节点进行标记,规则如下:
 *     * 白色(用 0 表示): 该节点尚未被访问
 *     * 灰色(用 1 表示): 该节点位于递归栈中,或者在某个环上
 *     * 黑色(用 2 表示): 该节点搜索完毕,是一个安全节点
 *
 *
 * 首次访问一个节点时,将其标记为灰色,并继续搜索与其相连的节点
 *
 * 如果在搜索过程中遇到了一个灰色节点,则说明找到了一个环,此时退出搜索,栈中的节点仍保持为灰色,可以将「找到了环」这一信息传递到栈中的所有节点上
 *
 * 如果搜索过程中没有遇到灰色节点 则说明没有遇到环,那么递归返回前,将其标记由灰色改为黑色,即表示它是一个安全的节点
 */
var eventualSafeNodes = function (graph) {
  const n = graph.length;
  const color = new Array(n).fill(0);
  const ans = [];
  for (let i = 0; i < n; ++i) {
    if (safe(graph, color, i)) {
      ans.push(i);
    }
  }
  return ans;
};
/**
 * 代码很精巧,又返回值的同时也对数组进行了永久性的改变,使用了引用数据结构的特性
 * 递归也减少了一些中间数据,减少了复杂度
 *
 * 数据流设计合理
 * @param {*} graph
 * @param {*} color
 * @param {*} x
 * @returns
 */
// 确认节点是否安全
const safe = (graph, color, x) => {
  // 如果大于0 ,那说明已经处理过.直接返回
  if (color[x] > 0) {
    return color[x] === 2;
  }
  // 正在处理的节点
  color[x] = 1;
  // 获取下一级节点
  for (const y of graph[x]) {
    // 递归处理节点
    if (!safe(graph, color, y)) {
      return false;
    }
  }
  // 没问题则置为2
  color[x] = 2;
  return true;
};

/**
 * 官方题解 拓扑排序
 *
 * 若一个节点没有出边,则该节点是安全的;若一个节点的出边相连的点都是安全的,则该节点也是安全的
 *
 * 根据这一性质,我们可以将图中所有边反向,得到一个反图,然后在反图上进行拓扑排序
 *
 * 具体步骤是: 首先得到反图 rg 及其入度数组 inDeg.将所有入度为 0 的点 加入队列,然后不断取出队首元素,将其出边相连的点的入度减一,若该点入度减一后为 0 ,则将该点加入队列,如此循环直到队列为空,.
 * 循环结束后,所有入度为0的节点均为安全的
 */

var eventualSafeNodes = function (graph) {
  const n = graph.length;
  const rg = new Array(n).fill(0).map(() => new Array());
  const inDeg = new Array(n).fill(0);
  for (let x = 0; x < n; ++x) {
    for (let y of graph[x]) {
      rg[y].push(x);
    }
    inDeg[x] = graph[x].length;
  }

  const queue = [];
  for (let i = 0; i < n; ++i) {
    if (inDeg[i] === 0) {
      queue.push(i);
    }
  }
  while (queue.length) {
    const y = queue.shift();
    for (const x of rg[y]) {
      if (--inDeg[x] === 0) {
        queue.push(x);
      }
    }
  }

  const ans = [];
  for (let i = 0; i < n; ++i) {
    if (inDeg[i] === 0) {
      ans.push(i);
    }
  }
  return ans;
};

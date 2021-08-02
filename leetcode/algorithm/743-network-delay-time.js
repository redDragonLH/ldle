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

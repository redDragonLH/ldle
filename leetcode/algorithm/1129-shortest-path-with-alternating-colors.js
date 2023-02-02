/**
 * 1129. 颜色交替的最短路径
 *
 * 在一个有向图中，节点分别标记为 0, 1, ..., n-1。图中每条边为红色或者蓝色，且存在自环或平行边。
 *
 * red_edges 中的每一个 [i, j] 对表示从节点 i 到节点 j 的红色有向边。类似地，blue_edges 中的每一个 [i, j] 对表示从节点 i 到节点 j 的蓝色有向边。
 *
 * 返回长度为 n 的数组 answer，其中 answer[X] 是从节点 0 到节点 X 的红色边和蓝色边交替出现的最短路径的长度。如果不存在这样的路径，那么 answer[x] = -1。
 */
/**
 * 每个节点可以广度优先遍历,但是不知道效率如何,有没有更好的
 *
 * 还得先把路径映射好,但是还得带着颜色
 *
 * 超时了,注意因为是有向图所以很多情况下是可以以动态规划的思路把前一个元素的状态作为当前元素的起始状态,不需要每次从头处理
 *
 * 第二版 有错误结果,估计是交替变检查有问题
 * 第三版 依旧超时
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
class Struct {
  constructor(point, color) {
    this.point = point;
    this.color = color; // 0:red; 1:blue
  }
}
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  let mapping = [];
  for (const redEdge of redEdges) {
    buildMap(redEdge, mapping, 0);
  }
  for (const blueEdge of blueEdges) {
    buildMap(blueEdge, mapping, 1);
  }
  return breadthTraversal(mapping, 0, n, redEdges.length + blueEdges.length);
};

let breadthTraversal = (mapping, len, n, allSide) => {
  console.log(mapping);
  let result = new Array(n);
  result.fill(-1);
  let direction = [new Struct(0, null)];
  while (direction.length) {
    let dLen = direction.length;
    let i = 0;
    len++;

    while (i < dLen) {
      i++;

      let item = direction.shift();
      let paths = mapping[item.point];
      result[0] = 0;

      if (!paths) return result;

      // 循环里面应该增加路径颜色的判断,但是就得和前面和后面有状态联系
      for (const path of paths) {
        if (item.color !== path.color) {
          // 不是递归,不可能有小len
          if (result[path.point] === -1) {
            result[path.point] = len;
          }
          // 这里不设边界条件就会死循环,设定死的长度就会有可能遗漏
          // 也许可以用红蓝所有边的和做边界条件
          if (len <= allSide) {
            direction.push(path);
          }
        }
      }
    }
  }
  return result;
};
// 注意是有向图
let buildMap = (edge, mapping, color) => {
  let item = mapping[edge[0]];
  if (item) {
    item.push(new Struct(edge[1], color));
  } else {
    mapping[edge[0]] = [new Struct(edge[1], color)];
  }
};

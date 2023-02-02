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
  let result = [0];
  for (let i = 1; i < n; i++) {
    breadthTraversal(mapping, i, 0, n);
  }
  return mapping;
};

let breadthTraversal = (mapping, index, len, n) => {
    if(len >=n)return -1;
  len++;
  let direction = [new Struct(0, null)];
  while (direction.length) {
    let dLen = direction.length;
    let i = 0;
    while (i < dLen) {
      i++;
      let item = direction.shift()
      let paths = mapping[item];
      if(!path)return -1;
      for (const path of paths) {
        if(path.point === index){
            return len
        }
        direction.push()
      }
    }
  }
};
let buildMap = (edge, mapping, color) => {
  let item = mapping[edge[0]];
  if (item) {
    item.push(new Struct(edge[1], color));
  } else {
    mapping[edge[0]] = [new Struct(edge[1], color)];
  }
  item = mapping[edge[1]];
  if (item) {
    item.push(new Struct(edge[0], color));
  } else {
    mapping[edge[1]] = [new Struct(edge[0], color)];
  }
};

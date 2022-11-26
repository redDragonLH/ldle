/**
 * 882. 细分图中的可到达节点
 *
 * 给你一个无向图（原始图），图中有 n 个节点，编号从 0 到 n - 1 。你决定将图中的每条边 细分 为一条节点链，每条边之间的新节点数各不相同。
 *
 * 图用由边组成的二维数组 edges 表示，其中 edges[i] = [ui, vi, cnti] 表示原始图中节点 ui 和 vi 之间存在一条边，cnti 是将边 细分 后的新节点总数。注意，cnti == 0 表示边不可细分。
 *
 * 要 细分 边 [ui, vi] ，需要将其替换为 (cnti + 1) 条新边，和 cnti 个新节点。新节点为 x1, x2, ..., xcnti ，新边为 [ui, x1], [x1, x2], [x2, x3], ..., [xcnti+1, xcnti], [xcnti, vi] 。
 *
 * 现在得到一个 新的细分图 ，请你计算从节点 0 出发，可以到达多少个节点？如果节点间距离是 maxMoves 或更少，则视为 可以到达 。
 *
 * 给你原始图和 maxMoves ，返回 新的细分图中从节点 0 出发 可到达的节点数 。
 */

/**
 * 要先遍历获得每个节点可以到哪些节点，到这些节点之间的边分割出了几个节点
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */
var reachableNodes = function (edges, maxMoves, n) {
  let map = new Array(n);
  for (const item of edges) {
    if (!map[item[0]]) map[item[0]] = [];
    map[item[0]].push([item[1], item[2]]);
    if (!map[item[1]]) map[item[1]] = [];
    map[item[1]].push([item[0], item[2]]);
  }
  console.log(map);
  if (map[0]) deep(map, 0, maxMoves, []);
  else return 1;
};
function deep(map, pointer, haveLen, isHandle) {
  for (let i = 0; i < map[pointer].length; i++) {
    // 核心区域
    // 核心功能：去除重复细分节点
    haveLen = haveLen - map[pointer][i][1] - 1;
    if (haveLen > 0 && isHandle.includes(map[pointer][i][0])) {
      isHandle.push(map[pointer][i][0]);
      map[map[pointer][i][0]] &&
        deep(map, map[pointer][i][0], haveLen, isHandle);
    }
  }
}
let map = [[["目标节点", "分割数量"]]];

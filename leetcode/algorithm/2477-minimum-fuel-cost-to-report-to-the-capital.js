/**
 * 2477. 到达首都的最少油耗
 *
 * 给你一棵 n 个节点的树（一个无向、连通、无环图），每个节点表示一个城市，编号从 0 到 n - 1 ，且恰好有 n - 1 条路。0 是首都。给你一个二维整数数组 roads ，其中 roads[i] = [ai, bi] ，表示城市 ai 和 bi 之间有一条 双向路 。
 * 每个城市里有一个代表，他们都要去首都参加一个会议。
 * 每座城市里有一辆车。给你一个整数 seats 表示每辆车里面座位的数目。
 * 城市里的代表可以选择乘坐所在城市的车，或者乘坐其他城市的车。相邻城市之间一辆车的油耗是一升汽油。
 * 请你返回到达首都最少需要多少升汽油。
 */
/**
 * 要构建一棵树么,然后再遍历
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */

var minimumFuelCost = function (roads, seats) {
  let tree = buildTree(roads);
};
const buildTree = (roads) => {
  let head = {
    val: 0,
    sub: [],
  };
  for (const road of roads) {
    let item = Search(head, road[0]);
    console.log("item", item);
    if (item) {
      item.sub.push({
        val: road[1],
        sub: [],
      });
    }
  }
  console.log(head);
  return head;
};
const Search = (root, num) => {
  let arr = [root];

  while (true) {
    let len = arr.length;
    if (!len) return false;
    for (let i = 0; i < len; i++) {
      let item = arr.shift();
      if (item.val === num) return item;
      for (const it of item.sub) {
        arr.push(it);
      }
    }
  }
};

/**
 * 官方题解 贪心+ 深度优先搜索
 *
 * 等价于给出了一棵以节点0 为根结点的树,并且初始树上的每一个节点都有一个人,现在所有人都需要通过 「车子」向结点 0 移动
 *
 * 对于某一个节点 x ,x != 0 ,其父节点为y,因为以节点x为根结点的子树的人都需要通过边 x -> y向节点0移动,所以为了使这条边上的 「车子」利用率最高,
 * 应该贪心的让 x的全部子节点上的人到了节点 x后再一起坐车向上移动, 设以节点x为根结点的子树大小为cutx,那么我们至少需要 「车子」的数量为「cutx/seats」,其中 seats 为一辆车的给定座位数
 *
 * 那么可以通过从根结点0往下进行 「深度优先搜索」, 每一条边上「车子」的数目即位该条边上汽油的开销,统计全部边上的汽油的开销即为最终答案
 */
var minimumFuelCost = function (roads, seats) {
  const n = roads.length;
  const g = new Array(n + 1).fill(0).map(() => new Array());
  // 构建映射mapping,比真的构建树简单清晰的多
  for (const e of roads) {
    g[e[0]].push(e[1]);
    g[e[1]].push(e[0]);
  }
  let res = 0;
  var dfs = function (cur, fa) {
    let peopleSum = 1;
    // 遍历点所有的下级点
    for (const ne of g[cur]) {
        // 两个点不相等
      if (ne != fa) {
        const peopleCnt = dfs(ne, cur);
        peopleSum += peopleCnt;
        res += Math.floor((peopleCnt + seats - 1) / seats);
      }
    }
    return peopleSum;
  };
  // 两个参数都是点喽
  dfs(0, -1);
  return res;
};

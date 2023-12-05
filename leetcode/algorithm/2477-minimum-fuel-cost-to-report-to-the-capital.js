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

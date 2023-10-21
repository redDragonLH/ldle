/**
 * 2316. 统计无向图中无法互相到达点对数
 *
 * 给你一个整数 n ，表示一张 无向图 中有 n 个节点，编号为 0 到 n - 1 。同时给你一个二维整数数组 edges ，其中 edges[i] = [ai, bi] 表示节点 ai 和 bi 之间有一条 无向 边。
 * 请你返回 无法互相到达 的不同 点对数目 。
 */

/**
 * 并查集 (Disjoint-set data structure)
 * 不交集数据结构.
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function (n, edges) {
  const uf = new UnionFind(n);
  for (const edge of edges) {
    (x = edge[0]), (y = edge[1]);
    uf.union(x, y);
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    res += n - uf.getSize(uf.find(i));
  }
  return res / 2;
};
// 并查集数据结构实现
// 优化过后的并查集
class UnionFind {
  constructor(n) {
    // 大小
    this.sizes = new Array(n).fill(1);
    // 父元素?
    this.parents = new Array(n).fill(0).map((ele, index) => index);
  }
// 递归查询当前元素
  find(x) {
    if (this.parents[x] == x) {
      return x;
    } else {
      this.parents[x] = this.find(this.parents[x]);
      return this.parents[x];
    }
  }
// 合并
  union(x, y) {
    const rx = this.find(x);
    const ry = this.find(y);
    if (rx != ry) {
      if (this.sizes[rx] > this.sizes[ry]) {
        this.parents[ry] = rx;
        this.sizes[rx] += this.sizes[ry];
      } else {
        this.parents[rx] = ry;
        this.sizes[ry] += this.sizes[rx];
      }
    }
  }

  getSize(x) {
    return this.sizes[x];
  }
}

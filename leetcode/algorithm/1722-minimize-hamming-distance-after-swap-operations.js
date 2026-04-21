/**
 * 1722. 执行交换操作后的最小汉明距离
 *
 * 给你两个整数数组 source 和 target ，长度都是 n 。还有一个数组 allowedSwaps ，其中每个 allowedSwaps[i] = [ai, bi] 表示你可以交换数组 source 中下标为 ai 和 bi（下标从 0 开始）的两个元素。
 * 注意，你可以按 任意 顺序 多次 交换一对特定下标指向的元素。
 *
 * 相同长度的两个数组 source 和 target 间的 汉明距离 是元素不同的下标数量。形式上，其值等于满足 source[i] != target[i] （下标从 0 开始）的下标 i（0 <= i <= n-1）的数量。
 *
 * 在对数组 source 执行 任意 数量的交换操作后，返回 source 和 target 间的 最小汉明距离 。
 */

/**
 * 主要难点在于 任意数量的交换,话说allowedSwaps 中元素位置是可以重复的吗,如果能重复复杂度就高了,如果不能重复,那就把allowedSwaps 中的元素看成无向图的边,下标看成无向图的点,每个连通分量内的点可以任意交换,所以我们只需要统计每个连通分量内source 和 target 的元素数量,然后求出不同的数量就行了
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function (source, target, allowedSwaps) {
  const n = source.length;
  const graph = new Array(n).fill(0).map(() => []);
  for (const [a, b] of allowedSwaps) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const visited = new Array(n).fill(false);
  const buildStructure = () => {
    const mapping = {};
    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      const queue = [i];
      visited[i] = true;
      while (queue.length) {
        const node = queue.shift();
        for (const neighbor of graph[node]) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        }
      }
      if (mapping[graph[i][0]]) {
        mapping[graph[i][0]].push(i);
      } else {
        mapping[graph[i][0]] = [i];
      }
    }
    return mapping;
  };
  const mapping = buildStructure();
  let res = 0;
  for (const key in mapping) {
    const count = {};
    for (const index of mapping[key]) {
      count[source[index]] = (count[source[index]] || 0) + 1;
    }
    for (const index of mapping[key]) {
      if (count[target[index]]) {
        count[target[index]]--;
      } else {
        res++;
      }
    }
  }
  return res;
};
/**
 * 失败
 */
/**
 * 哈希表 + 并查集
 */
class UnionFind {
  constructor(n) {
    this.fa = new Array(n);
    this.rank = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      this.fa[i] = i;
    }
  }

  find(x) {
    if (this.fa[x] !== x) {
      this.fa[x] = this.find(this.fa[x]);
    }
    return this.fa[x];
  }

  union(x, y) {
    x = this.find(x);
    y = this.find(y);
    if (x === y) return;
    if (this.rank[x] < this.rank[y]) {
      [x, y] = [y, x];
    }
    this.fa[y] = x;
    if (this.rank[x] === this.rank[y]) {
      this.rank[x]++;
    }
  }
}

var minimumHammingDistance = function (source, target, allowedSwaps) {
  const n = source.length;
  const uf = new UnionFind(n);

  for (const [a, b] of allowedSwaps) {
    uf.union(a, b);
  }

  const sets = new Map();
  for (let i = 0; i < n; i++) {
    const f = uf.find(i);
    if (!sets.has(f)) {
      sets.set(f, new Map());
    }
    const cnt = sets.get(f);
    cnt.set(source[i], (cnt.get(source[i]) || 0) + 1);
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    const f = uf.find(i);
    const cnt = sets.get(f);
    const count = cnt.get(target[i]) || 0;
    if (count > 0) {
      cnt.set(target[i], count - 1);
    } else {
      ans++;
    }
  }
  return ans;
};
/**
 * 官方题解
 */
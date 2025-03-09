/**
 * 2070. 每一个查询的最大美丽值
 *
 * 给你一个二维整数数组 items ，其中 items[i] = [pricei, beautyi] 分别表示每一个物品的 价格 和 美丽值 。
 * 同时给你一个下标从 0 开始的整数数组 queries 。对于每个查询 queries[j] ，你想求出价格小于等于 queries[j] 的物品中，最大的美丽值 是多少。如果不存在符合条件的物品，那么查询的结果为 0 。
 * 请你返回一个长度与 queries 相同的数组 answer，其中 answer[j]是第 j 个查询的答案。
 */

/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
  const map = [];
  const mapIndex = [];
  for (const [price, beauty] of items) {
    if (!map[price]) {
      map[price] = beauty;
      mapIndex.push(price);
    } else {
      if (map[price] < beauty) {
        map[price] = beauty;
      }
    }
  }
  mapIndex.sort((a, b) => a - b);
  const maxBeauties = new Array(queries.length).fill(0);
  for (let i = queries.length - 1; i > 0; i--) {
    const query = queries[i];
    const beauties = map[query];
    if (!beauties) {
      let findinx = mapIndex.findLast((item) => item <= query); //循环次数过多
      if (findinx === -1) {
        maxBeauties[i] = 0;
        continue;
      } else {
        maxBeauties[i] = map[findinx];
      }
    } else {
      maxBeauties[i] = beauties;
    }
  }
  return maxBeauties;
};

/**
 * 官方题解 果然是另一种思路
 */
var maximumBeauty = function (items, queries) {
  // 将物品按价格升序排序
  items.sort((a, b) => a[0] - b[0]);
  const n = items.length;
  // 按定义修改美丽值
  for (let i = 1; i < n; ++i) {
    items[i][1] = Math.max(items[i][1], items[i - 1][1]);
  }
  // 二分查找处理查询
  const res = [];
  for (let q of queries) {
    res.push(query(items, q, n));
  }
  return res;
};

function query(items, q, n) {
  let l = 0,
    r = n;
  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    if (items[mid][0] > q) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  if (l === 0) {
    // 此时所有物品价格均大于查询价格
    return 0;
  } else {
    // 返回小于等于查询价格的物品的最大美丽值
    return items[l - 1][1];
  }
}

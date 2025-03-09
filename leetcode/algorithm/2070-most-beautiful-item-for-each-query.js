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
    for (let i = queries.length-1; i > 0; i--) {
      const query = queries[i];
      const beauties = map[query];
      if (!beauties) {
        let findinx = mapIndex.findLast((item) => item <= query); //循环次数过多
        if (findinx === -1) {
          maxBeauties[i] = 0;
          continue;
        }else {maxBeauties[
         i] = map[findinx];
        }
      } else {
        maxBeauties[i] = beauties;
      }
    }
    return maxBeauties;
  };
  

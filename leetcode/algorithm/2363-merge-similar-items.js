/**
 * 2363. 合并相似的物品
 *
 * 给你两个二维整数数组 items1 和 items2 ，表示两个物品集合。每个数组 items 有以下特质：
 *  * items[i] = [valuei, weighti] 其中 valuei 表示第 i 件物品的 价值 ，weighti 表示第 i 件物品的 重量 。
 *  * items 中每件物品的价值都是 唯一的 。
 *
 * 请你返回一个二维数组 ret，其中 ret[i] = [valuei, weighti]， weighti 是所有价值为 valuei 物品的 重量之和 。
 *
 * 注意：ret 应该按价值 升序 排序后返回。
 */

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  // 最好是用有限数组 // 天生排序
  let mapping = {};
  let len = items1.length > items2.length ? items1.length : items2.length;
  for (let i = 0; i < len; i++) {
    if (items1[i]) {
      if (!mapping[items1[i][0]]) {
        mapping[items1[i][0]] = 0;
      }
      mapping[items1[i][0]] = mapping[items1[i][0]] + items1[i][1];
    }

    if (items2[i]) {
      if (!mapping[items2[i][0]]) {
        mapping[items2[i][0]] = 0;
      }
      mapping[items2[i][0]] = mapping[items2[i][0]] + items2[i][1];
    }
  }
  let result = [];
  for (const key in mapping) {
    if (Object.hasOwnProperty.call(mapping, key)) {
      result.push([key, mapping[key]]);
    }
  }
  return result.sort((a, b) => a[0] - b[0]);
};
/**
 * 如果用数组应该可以减少排序,但是得限定最大长度
 * 执行用时：108 ms, 在所有 JavaScript 提交中击败了31.52%的用户
 * 内存消耗：50.3 MB, 在所有 JavaScript 提交中击败了5.43%的用户
 */
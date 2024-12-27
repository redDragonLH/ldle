/**
 * 3159. 查询数组中元素的出现位置
 *
 * 给你一个整数数组 nums ，一个整数数组 queries 和一个整数 x 。
 * 对于每个查询 queries[i] ，你需要找到 nums 中第 queries[i] 个 x 的位置，并返回它的下标。如果数组中 x 的出现次数少于 queries[i] ，该查询的答案为 -1 。
 * 请你返回一个整数数组 answer ，包含所有查询的答案。
 */
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function (nums, queries, x) {
  let res = [];
  let xIndex = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === x) {
      xIndex.push(i);
    }
  }
  for (let i = 0; i < queries.length; i++) {
    if (queries[i] > xIndex.length) {
      res.push(-1);
    } else {
      res.push(xIndex[queries[i] - 1]);
    }
  }
  return res;
};
/**
 * 遍历获取数据，然后再遍历查询
 * 执行用时：22 ms, 在所有 JavaScript 提交中击败了75.00%的用户
 * 内存消耗：84.52 MB, 在所有 JavaScript 提交中击败了43.75%的用户
 */
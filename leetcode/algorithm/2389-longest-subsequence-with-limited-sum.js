/**
 * 2389. 和有限的最长子序列
 *
 * 给你一个长度为 n 的整数数组 nums ，和一个长度为 m 的整数数组 queries 。
 *
 * 返回一个长度为 m 的数组 answer ，其中 answer[i] 是 nums 中 元素之和小于等于 queries[i] 的 子序列 的 最大 长度  。
 *
 * 子序列 是由一个数组删除某些元素（也可以不删除）但不改变剩余元素顺序得到的一个数组。
 */

/**
 * 删除元素但是不改变元素顺序,这和改变元素顺序有什么区别么~~~
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);
  let result = new Array();
  let numsLen = nums.length;
  for (const query of queries) {
    let sum = 0;
    let i = 0;
    for (; i < numsLen; i++) {
      sum += nums[i];
      if (sum > query) {
        break;
      }
    }
    result.push(i);
  }
  return result;
};
/**
 * 这还才20%,不应两层循环?还是不应排序
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了20.00%的用户
 * 内存消耗：43.4 MB, 在所有 JavaScript 提交中击败了43.33%的用户
 */
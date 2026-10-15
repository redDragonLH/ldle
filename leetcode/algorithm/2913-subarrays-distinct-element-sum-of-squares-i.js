/**
 * 2913. 子数组不同元素数目的平方和 I
 *
 * 给你一个下标从 0 开始的整数数组 nums 。
 * 定义 nums 一个子数组的 不同计数 值如下：
 *  * 令 nums[i..j] 表示 nums 中所有下标在 i 到 j 范围内的元素构成的子数组（满足 0 <= i <= j < nums.length ），那么我们称子数组 nums[i..j] 中不同值的数目为 nums[i..j] 的不同计数。
 * 请你返回 nums 中所有子数组的 不同计数 的 平方 和。
 * 子数组指的是一个数组里面一段连续 非空 的元素序列。
 */

/**
 * 遍历所有子数组，计算不同元素的平方和,这感觉要超时啊
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let seen = new Set();
    for (let j = i; j < nums.length; j++) {
      seen.add(nums[j]);
      sum += seen.size * seen.size;
    }
  }
  return sum;
};
/**
 * 竟然过了
 * 执行用时：6 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：59.86 MB, 在所有 JavaScript 提交中击败了85.71%的用户
 */
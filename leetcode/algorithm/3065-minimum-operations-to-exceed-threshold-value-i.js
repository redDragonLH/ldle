/**
 * 3065. 超过阈值的最少操作数 I
 *
 * 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。
 * 一次操作中，你可以删除 nums 中的最小元素。
 * 你需要使数组中的所有元素都大于或等于 k ，请你返回需要的 最少 操作次数。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  nums.sort((a, b) => a - b); // 排序可能更耗费时间,虽然能减少遍历次数,但是大多数时间都是不划算的
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < k) {
      result++;
    }
  }
  return result;
};
/**
 * 排序遍历
 */
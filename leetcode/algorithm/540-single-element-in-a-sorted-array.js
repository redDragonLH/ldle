/**
 * 540. 有序数组中的单一元素
 *
 * 给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。
 *
 * 请你找出并返回只出现一次的那个数。
 *
 * 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let count = 0;
  for (const item of nums) {
    count ^= item;
  }
  return count;
};
/**
 * 异或去除重复数据
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了88.57%的用户
 * 内存消耗：45.1 MB, 在所有 JavaScript 提交中击败了5.30%的用户
 */
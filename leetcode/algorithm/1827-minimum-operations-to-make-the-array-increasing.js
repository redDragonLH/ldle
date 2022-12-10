/**
 * 1827. 最少操作使数组递增
 *
 * 给你一个整数数组 nums （下标从 0 开始）。每一次操作中，你可以选择数组中一个元素，并将它增加 1 。
 *  * 比方说，如果 nums = [1,2,3] ，你可以选择增加 nums[1] 得到 nums = [1,3,3] 。
 *
 * 请你返回使 nums 严格递增 的 最少 操作次数。
 *
 * 我们称数组 nums 是 严格递增的 ，当它满足对于所有的 0 <= i < nums.length - 1 都有 nums[i] < nums[i+1] 。一个长度为 1 的数组是严格递增的一种特殊情况。
 */

/**
 * 向后判断，如果大于前一个就不管，如果小于前一个就加到比前一个数大一
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let len = nums.length;
  if (len <= 1) return 0;
  let result = 0;
  for (let i = 1; i < len; i++) {
    if (nums[i] <= nums[i - 1]) {
      let count = nums[i - 1] - nums[i] + 1;
      nums[i] += count;
      result += count;
    }
  }
  return result
};
/**
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了89.53%的用户
 * 内存消耗：42.7 MB, 在所有 JavaScript 提交中击败了55.81%的用户
 */
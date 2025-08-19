/**
 * 2348. 全 0 子数组的数目
 *
 * 给你一个整数数组 nums ，返回全部为 0 的 子数组 数目。
 * 数组 是一个数组中一段连续非空元素组成的序列。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let count = 0;
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
      // 全排列
      count += zeroCount;
    } else {
      zeroCount = 0;
    }
  }

  return count;
};
/**
 * 执行用时：5 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：67.09 MB, 在所有 JavaScript 提交中击败了66.67%的用户
 */

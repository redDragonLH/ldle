/**
 * 3392. 统计符合条件长度为 3 的子数组数目
 *
 * 给你一个整数数组 nums ，请你返回长度为 3 的 子数组，满足第一个数和第三个数的和恰好为第二个数的一半。
 * 子数组 指的是一个数组中连续 非空 的元素序列。
 */

/**
 * 滑动窗口
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
  let len = nums.length - 1;
  let count = 0;
  for (let i = 1; i < len; i++) {
    if (nums[i] === (nums[i - 1] + nums[i + 1]) * 2) {
      count++;
    }
  }
  return count;
};

/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：56.65 MB, 在所有 JavaScript 提交中击败了9.52%的用户
 */
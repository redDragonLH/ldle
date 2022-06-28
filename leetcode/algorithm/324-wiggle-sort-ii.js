/**
 * 324. 摆动排序 II
 *
 * 给你一个整数数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。
 *
 * 你可以假设所有输入数组都可以得到满足题目要求的结果。
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  nums.sort((a, b) => a - b);
  let len = nums.length;
  let start = 1,
    end = Math.floor((len + 1) / 2);
  while (end < len) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start += 2;
    end += 2;
  }
  return nums;
};

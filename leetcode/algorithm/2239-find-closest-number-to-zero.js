/**
 * 2239. 找到最接近 0 的数字
 *
 * 给你一个长度为 n 的整数数组 nums ，请你返回 nums 中最 接近 0 的数字。如果有多个答案，请你返回它们中的 最大值 。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (
      Math.abs(nums[i]) < Math.abs(res) ||
      (Math.abs(nums[i]) === Math.abs(res) && nums[i] > res)
    ) {
      res = nums[i];
    }
  }
  return res;
};
/**
 * AI 题解
 */
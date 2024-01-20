/**
 * 2760. 最长奇偶子数组
 *
 * 给你一个下标从 0 开始的整数数组 nums 和一个整数 threshold 。
 * 请你从 nums 的子数组中找出以下标 l 开头、下标 r 结尾 (0 <= l <= r < nums.length) 且满足以下条件的 最长子数组 ：
 *  * nums[l] % 2 == 0
 *  * 对于范围 [l, r - 1] 内的所有下标 i ，nums[i] % 2 != nums[i + 1] % 2
 *  * 对于范围 [l, r] 内的所有下标 i ，nums[i] <= threshold
 * 以整数形式返回满足题目要求的最长子数组的长度。
 * 注意：子数组 是数组中的一个连续非空元素序列。
 */

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var isSatisfied = function (nums, l, r, threshold) {
    // 奇数就不处理
  if (nums[l] % 2 != 0) {
    return false;
  }
  for (let i = l; i <= r; i++) {
    // 判断数据
    if (nums[i] > threshold || (i < r && nums[i] % 2 == nums[i + 1] % 2)) {
      return false;
    }
  }
  return true;
};

var longestAlternatingSubarray = function (nums, threshold) {
  let res = 0;
  // 两层循环
  for (let l = 0; l < nums.length; l++) {
    for (let r = 0; r < nums.length; r++) {
      if (isSatisfied(nums, l, r, threshold)) {
        res = Math.max(res, r - l + 1);
      }
    }
  }
  return res;
};

/**
 * 2970. 统计移除递增子数组的数目 I
 *
 * 给你一个下标从 0 开始的 正 整数数组 nums 。
 * 如果 nums 的一个子数组满足：移除这个子数组后剩余元素 严格递增 ，那么我们称这个子数组为 移除递增 子数组。比方说，[5, 3, 4, 6, 7] 中的 [3, 4] 是一个移除递增子数组，因为移除该子数组后，[5, 3, 4, 6, 7] 变为 [5, 6, 7] ，是严格递增的。
 * 请你返回 nums 中 移除递增 子数组的总数目。
 * 注意 ，剩余元素为空的数组也视为是递增的。
 * 子数组 指的是一个数组中一段连续的元素序列。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (isIncreasing(nums, i, j)) {
        res++;
      }
    }
  }
  return res;
};

function isIncreasing(nums, l, r) {
  for (let i = 1; i < nums.length; i++) {
    if (i >= l && i <= r + 1) {
      continue;
    }
    if (nums[i] <= nums[i - 1]) {
      return false;
    }
  }
  if (l - 1 >= 0 && r + 1 < nums.length && nums[r + 1] <= nums[l - 1]) {
    return false;
  }
  return true;
}

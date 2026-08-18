/**
 * 3471. 找出最大的几近缺失整数
 *
 * 给你一个整数数组 nums 和一个整数 k 。
 * 如果整数 x 恰好仅出现在 nums 中的一个大小为 k 的子数组中，则认为 x 是 nums 中的几近缺失（almost missing）整数。
 * 返回 nums 中 最大的几近缺失 整数，如果不存在这样的整数，返回 -1 。
 * 子数组 是数组中的一个连续元素序列。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function (nums, k) {
  let n = nums.length;
  if (n === k) {
    return Math.max(...nums);
  }
  let count = new Array(51).fill(0);
  for (let x of nums) {
    count[x]++;
  }
  if (k === 1) {
    for (let i = 50; i >= 0; --i) {
      if (count[i] === 1) {
        return i;
      }
    }
    return -1;
  }
  let res = -1;
  if (count[nums[0]] === 1) {
    res = Math.max(res, nums[0]);
  }
  if (count[nums[n - 1]] === 1) {
    res = Math.max(res, nums[n - 1]);
  }
  return res;
};

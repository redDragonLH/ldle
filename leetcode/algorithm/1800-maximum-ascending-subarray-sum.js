/**
 * 1800. 最大升序子数组和
 *
 * 给你一个正整数组成的数组 nums ，返回 nums 中一个 升序 子数组的最大可能元素和。
 *
 * 子数组是数组中的一个连续数字序列。
 *
 * 已知子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，若对所有 i（l <= i < r），numsi < numsi+1 都成立，则称这一子数组为 升序 子数组。注意，大小为 1 的子数组也视作 升序 子数组。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let len = nums.length;
  if (!len) return 0;
  let result = 0;
  let currentMax = nums[0];
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      currentMax += nums[i];
    } else {
      result = Math.max(result, currentMax);
      currentMax = nums[i];
    }
  }
  return Math.max(result, currentMax);
};

/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了49.35%的用户
 * 内存消耗：41 MB, 在所有 JavaScript 提交中击败了87.01%的用户
 */
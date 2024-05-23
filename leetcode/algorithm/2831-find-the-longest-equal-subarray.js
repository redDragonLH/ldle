/**
 * 2831. 找出最长等值子数组2831. 找出最长等值子数组
 *
 * 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。
 * 如果子数组中所有元素都相等，则认为子数组是一个 等值子数组 。注意，空数组是 等值子数组 。
 * 从 nums 中删除最多 k 个元素后，返回可能的最长等值子数组的长度。
 * 子数组 是数组中一个连续且可能为空的元素序列。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function (nums, k) {
  let n = nums.length;
  let pos = new Map();
  for (let i = 0; i < n; i++) {
    if (!pos.has(nums[i])) {
      pos.set(nums[i], []);
    }
    pos.get(nums[i]).push(i);
  }
  let ans = 0;
  for (let vec of pos.values()) {
    for (let i = 0, j = 0; i < vec.length; i++) {
      /* 缩小窗口，直到不同元素数量小于等于 k */
      // 滑动子序列
      while (vec[i] - vec[j] - (i - j) > k) {
        j++;
      }
      ans = Math.max(ans, i - j + 1);
    }
  }
  return ans;
};

/**
 * 2962. 统计最大元素出现至少 K 次的子数组
 *
 * 给你一个整数数组 nums 和一个 正整数 k 。
 * 请你统计有多少满足 「 nums 中的 最大 元素」至少出现 k 次的子数组，并返回满足这一条件的子数组的数目。
 * 子数组是数组中的一个连续元素序列。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const n = nums.length;
  const mx = Math.max(...nums);
  const pos = [-1];
  for (let i = 0; i < n; i++) {
    if (nums[i] === mx) {
      pos.push(i);
    }
  }
  let left = 1,
    right = k;
  let ans = 0;
  while (right < pos.length) {
    // 计算当前窗口的子数组数量
    ans += (pos[left] - pos[left - 1]) * (n - pos[right]);
    left++;
    right++;
  }
  return ans;
};

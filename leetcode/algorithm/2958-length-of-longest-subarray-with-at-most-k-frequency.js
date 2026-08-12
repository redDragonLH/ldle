/**
 * 2958. 最多 K 个重复元素的最长子数组
 *
 * 给你一个整数数组 nums 和一个整数 k 。
 * 一个元素 x 在数组中的 频率 指的是它在数组中的出现次数。
 * 如果一个数组中所有元素的频率都 小于等于 k ，那么我们称这个数组是 好 数组。
 * 请你返回 nums 中 最长好 子数组的长度。
 * 子数组 指的是一个数组中一段连续非空的元素序列
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  const freq = new Map(); // 记录窗口内元素频率
  let left = 0; // 窗口左边界
  let ans = 0; // 答案：最长合法窗口长度

  for (let right = 0; right < nums.length; right++) {
    // 1. 扩展：把 nums[right] 纳入窗口
    freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);

    // 2. 收缩：while 窗口非法，就左移 left
    while (freq.get(nums[right]) > k) {
      freq.set(nums[left], freq.get(nums[left]) - 1);
      left++;
    }

    // 3. 更新答案：此刻窗口一定是合法的
    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};
/**
 * 记忆口诀：右扩 → 非法就左缩 → 更新答案，三步循环。
 * 
 * 窗口大小是没有限制的,正常就一直扩,有问题就缩一下
 */
/**
 * 1848. 到目标元素的最小距离
 *
 * 给你一个整数数组 nums （下标 从 0 开始 计数）以及两个整数 target 和 start ，请你找出一个下标 i ，满足 nums[i] == target 且 abs(i - start) 最小化 。注意：abs(x) 表示 x 的绝对值。
 * 返回 abs(i - start) 。
 * 题目数据保证 target 存在于 nums 中。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
  if (nums[start] === target) return 0;
  let left = start - 1,
    right = start + 1,
    res = Number.MAX_VALUE;
  while (left >= 0 || right < nums.length) {
    if (left >= 0 && nums[left] === target) {
      res = Math.min(res, start - left);
    }
    if (right < nums.length && nums[right] === target) {
      res = Math.min(res, right - start);
    }
    left--;
    right++;
  }
  return res;
};
/**
 * 执行用时 :1 ms, 在所有 JavaScript 提交中击败了80.00%的用户
 * 内存消耗 :54.52 MB, 在所有 JavaScript 提交中击败了15.00%的用户
 */

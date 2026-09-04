/**
 * 3903. 最小稳定下标 I
 *
 * 给你一个长度为 n 的整数数组 nums 和一个整数 k。
 * 对于每个下标 i，定义它的 不稳定值 为 max(nums[0..i]) - min(nums[i..n - 1])。
 * 换句话说：
 *  * max(nums[0..i]) 表示从下标 0 到下标 i 的元素中的 最大值 。
 *  * min(nums[i..n - 1]) 表示从下标 i 到下标 n - 1 的元素中的 最小值 。
 * 如果某个下标 i 的不稳定值 小于等于 k，则称该下标为 稳定下标 。
 * 返回 最小 的稳定下标。如果不存在这样的下标，则返回 -1。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    let maxLeft = Math.max(...nums.slice(0, i + 1));
    let minRight = Math.min(...nums.slice(i));
    let unstableValue = maxLeft - minRight;
    if (unstableValue <= k) {
      return i;
    }
  }
  return -1;
};
/**
 * 执行用时：3 ms, 在所有 JavaScript 提交中击败了25.00%的用户
 * 内存消耗：59.01 MB, 在所有 JavaScript 提交中击败了00.00%的用户
 */
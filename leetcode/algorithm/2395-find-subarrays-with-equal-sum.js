/**
 * 2395. 和相等的子数组
 *
 * 给你一个下标从 0 开始的整数数组 nums ，判断是否存在 两个 长度为 2 的子数组且它们的 和 相等。注意，这两个子数组起始位置的下标必须 不相同 。
 *
 * 如果这样的子数组存在，请返回 true，否则返回 false 。
 *
 * 子数组 是一个数组中一段连续非空的元素组成的序列。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
  let len = nums.length;
  let set = new Set();
  for (let i = 1; i < len; i++) {
    let sum = nums[i] + nums[i - 1];
    if (set.has(sum)) {
      return true;
    }
    set.add(sum);
  }
  return false;
};
/**
 * 执行用时：56 ms, 在所有 JavaScript 提交中击败了86.27%的用户
 * 内存消耗：41.1 MB, 在所有 JavaScript 提交中击败了43.14%的用户
 */
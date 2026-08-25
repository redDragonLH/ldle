/**
 * 3718. 缺失的最小倍数
 *
 * 给你一个整数数组 nums 和一个整数 k，请返回从 nums 中缺失的、最小的正整数 k 的倍数。
 * 倍数 指能被 k 整除的任意正整数。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function (nums, k) {
  nums = nums.sort((a, b) => a - b);
  if (nums[0] > k) return k;
  if (nums[nums.length - 1] < k) return k;
  let multiple = k;
  while (true) {
    if (!nums.includes(multiple)) {
      return multiple;
    }
    multiple += k;
  }
};
/**
 * 执行用时 :1 ms, 在所有 JavaScript 提交中击败了66.67%的用户
 * 内存消耗 :56.09 MB, 在所有 JavaScript 提交中击败了66.67%的用户
 */
/**
 * 3162. 优质数对的总数 I
 *
 * 给你两个整数数组 nums1 和 nums2，长度分别为 n 和 m。同时给你一个正整数 k。
 * 如果 nums1[i] 可以被 nums2[j] * k 整除，则称数对 (i, j) 为 优质数对（0 <= i <= n - 1, 0 <= j <= m - 1）。
 * 返回 优质数对 的总数。
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, k) {
  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] % (nums2[j] * k) === 0) {
        count++;
      }
    }
  }
  return count;
};
/**
 * 执行用时：71 ms, 在所有 JavaScript 提交中击败了64.44%的用户
 * 内存消耗：51.61 MB, 在所有 JavaScript 提交中击败了93.33%的用户
 */
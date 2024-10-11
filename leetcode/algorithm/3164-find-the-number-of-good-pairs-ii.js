/**
 * 3164. 优质数对的总数 II
 *
 * 给你两个整数数组 nums1 和 nums2，长度分别为 n 和 m。同时给你一个正整数 k。
 * 如果 nums1[i] 可以被 nums2[j] * k 整除，则称数对 (i, j) 为 优质数对（0 <= i <= n - 1, 0 <= j <= m - 1）。
 * 返回 优质数对 的总数。
 */

/**
 * 超时
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, k) {
  let count = 0;
  for (const num of nums2) {
    let divisor = num * k;
    for (const num1 of nums1) {
      if (num1 % divisor === 0) {
        count++;
      }
    }
  }
  return count;
};

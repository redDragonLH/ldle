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

/**
 * 官方题解
 */
var numberOfPairs = function (nums1, nums2, k) {
  const count = {};
  const count2 = {};
  let res = 0,
    max1 = 0;
  // 压缩,合并同类项
  for (let num of nums1) {
    count[num] = (count[num] || 0) + 1;
    max1 = Math.max(max1, num);
  }
  for (let num of nums2) {
    count2[num] = (count2[num] || 0) + 1;
  }
  for (let a in count2) {
    let cnt = count2[a];
    // 缩小b 的范围,肯定不会超过max1,不能小于a*k
    for (let b = a * k; b <= max1; b += a * k) {
      if (b in count) {
        res += count[b] * cnt;
      }
    }
  }
  return res;
};

/**
 * 1855. 下标对中的最大距离
 *
 * 给你两个 非递增 的整数数组 nums1​​​​​​ 和 nums2​​​​​​ ，数组下标均 从 0 开始 计数。
 * 下标对 (i, j) 中 0 <= i < nums1.length 且 0 <= j < nums2.length 。如果该下标对同时满足 i <= j 且 nums1[i] <= nums2[j] ，则称之为 有效 下标对，该下标对的 距离 为 j - i​​ 。​​
 * 返回所有 有效 下标对 (i, j) 中的 最大距离 。如果不存在有效下标对，返回 0 。
 * 一个数组 arr ，如果每个 1 <= i < arr.length 均有 arr[i-1] >= arr[i] 成立，那么该数组是一个 非递增 数组。
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
  let i = 0,
    j = 0,
    maxDist = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      maxDist = Math.max(maxDist, j - i);
      j++;
    } else {
      i++;
    }
  }
  return maxDist;
};
/**
 * 执行用时 : 3ms, 在所有 JavaScript 提交中击败了66.67%的用户
 * 内存消耗 : 68.25MB, 在所有 JavaScript 提交中击败了33.33%的用户
 */
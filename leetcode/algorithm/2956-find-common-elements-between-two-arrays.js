/**
 * 2956. 找到两个数组中的公共元素
 *
 * 给你两个下标从 0 开始的整数数组 nums1 和 nums2 ，它们分别含有 n 和 m 个元素。
 * 请你计算以下两个数值：
 *  * 统计 0 <= i < n 中的下标 i ，满足 nums1[i] 在 nums2 中 至少 出现了一次。
 *  * 统计 0 <= i < m 中的下标 i ，满足 nums2[i] 在 nums1 中 至少 出现了一次。
 * 请你返回一个长度为 2 的整数数组 answer ，按顺序 分别为以上两个数值。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  let map = new Map();
  let result = [0, 0];
  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], 1);
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      result[0] += 1;
    }
  }
  map.clear();
  for (let i = 0; i < nums2.length; i++) {
    map.set(nums2[i], 1);
  }
  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      result[1] += 1;
    }
  }
  return result;
};
/**
 * 执行用时：90 ms, 在所有 JavaScript 提交中击败了66.67%的用户
 * 内存消耗：55.96 MB, 在所有 JavaScript 提交中击败了8.33%的用户
 */
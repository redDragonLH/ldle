/**
 * 3131. 找出与数组相加的整数 I
 *
 * 给你两个长度相等的数组 nums1 和 nums2。
 * 数组 nums1 中的每个元素都与变量 x 所表示的整数相加。如果 x 为负数，则表现为元素值的减少。
 * 在与 x 相加后，nums1 和 nums2 相等 。当两个数组中包含相同的整数，并且这些整数出现的频次相同时，两个数组 相等 。
 * 返回整数 x 。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  return nums2[0] - nums1[0];
};
/**
 * 真是连循环都不用啊,按这个思路还可以优化,不用排序
 *
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了15.31%的用户
 * 内存消耗：51.63 MB, 在所有 JavaScript 提交中击败了15.31%的用户
 */
var addedInteger = function (nums1, nums2) {
  return Math.min(...nums2) - Math.min(...nums1);
};
/**
 * 怎么时间还长了
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了10.20%的用户
 * 内存消耗：50.68 MB, 在所有 JavaScript 提交中击败了67.35%的用户
 */
/**
 * 496. 下一个更大元素 I
 *
 * 给你两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。
 *
 * 请你找出 nums1 中每个元素在 nums2 中的下一个比其大的值。
 *
 * nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let mapping = new Map();
  nums2.forEach((e, i) => mapping.set(e, i));
  let result = new Array(nums1.length).fill(-1);
  let nums2Len = nums2.length;
  nums1.forEach((e, index) => {
    for (let i = mapping.get(e); i < nums2Len; i++) {
      if (nums2[i] > e) {
        result[index] = nums2[i];
        break;
      }
    }
  });
  return result;
};

/**
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了93.16%的用户
 * 内存消耗：39.6 MB, 在所有 JavaScript 提交中击败了49.77%的用户
 */

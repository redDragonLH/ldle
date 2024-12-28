/**
 * 3046. 分割数组
 *
 * 给你一个长度为 偶数 的整数数组 nums 。你需要将这个数组分割成 nums1 和 nums2 两部分，要求：
 *  * nums1.length == nums2.length == nums.length / 2 。
 *  * nums1 应包含 互不相同 的元素。
 *  * nums2也应包含 互不相同 的元素。
 * 如果能够分割数组就返回 true ，否则返回 false 。
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
  let map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) > 2) return false;
  }
  return true
};
/**
 * 执行用时：4 ms, 在所有 JavaScript 提交中击败了73.53%的用户
 * 内存消耗：51.55 MB, 在所有 JavaScript 提交中击败了47.74%的用户
 */
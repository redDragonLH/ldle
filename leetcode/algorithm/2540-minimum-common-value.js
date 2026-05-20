/**
 * 2540. 最小公共值
 *
 * 给你两个整数数组 nums1 和 nums2 ，它们已经按非降序排序，请你返回两个数组的 最小公共整数 。如果两个数组 nums1 和 nums2 没有公共整数，请你返回 -1 。
 * 如果一个整数在两个数组中都 至少出现一次 ，那么这个整数是数组 nums1 和 nums2 公共 的。
 */
/**
 * 双指针可以解决这个问题。我们维护两个指针 i 和 j，分别指向 nums1 和 nums2 的当前元素。我们比较 nums1[i] 和 nums2[j]：
- 如果 nums1[i] < nums2[j]，说明 nums1[i] 不可能是公共元素，我们将 i 向右移动一位。
- 如果 nums1[i] > nums2[j]，说明 nums2[j] 不可能是公共元素，我们将 j 向右移动一位。
- 如果 nums1[i] == nums2[j]，说明我们找到了一个公共元素，我们直接返回这个元素。

如果我们遍历完两个数组都没有找到公共元素，我们返回 -1。

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      return nums1[i];
    }
  }
  return -1;
};
/**
 * 执行用时 :0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :63.57 MB, 在所有 JavaScript 提交中击败34.48%的用户
 */
/**
 * 3132. 找出与数组相加的整数 II
 *
 * 给你两个整数数组 nums1 和 nums2。
 * 从 nums1 中移除两个元素，并且所有其他元素都与变量 x 所表示的整数相加。如果 x 为负数，则表现为元素值的减少。
 * 执行上述操作后，nums1 和 nums2 相等 。当两个数组中包含相同的整数，并且这些整数出现的频次相同时，两个数组 相等 。
 * 返回能够实现数组相等的 最小 整数 x 。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  // 枚举保留 nums1[2] 或者 nums1[1] 或者 nums1[0]
  // 倒着枚举是因为 nums1[i] 越大答案越小，第一个满足的就是答案
  for (let i = 2; i > 0; i--) {
    const x = nums2[0] - nums1[i];
    // 在 {nums1[i] + x} 中找子序列 nums2
    let j = 0;
    for (let k = i; k < nums1.length; k++) {
      if (nums2[j] === nums1[k] + x && ++j === nums2.length) {
        // nums2 是 {nums1[i] + x} 的子序列
        return x;
      }
    }
  }
  // 题目保证答案一定存在
  return nums2[0] - nums1[0];
};

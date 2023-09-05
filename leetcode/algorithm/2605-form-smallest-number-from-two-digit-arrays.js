/**
 * 2605. 从两个数字数组里生成最小数字
 *
 * 给你两个只包含 1 到 9 之间数字的数组 nums1 和 nums2 ，每个数组中的元素 互不相同 ，请你返回 最小 的数字，两个数组都 至少 包含这个数字的某个数位。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
  const same = () => {
    const s = new Set(nums1);
    let x = 10;
    for (const m of nums2) {
      if (s.has(m)) {
        x = Math.min(x, m);
      }
    }
    return x == 10 ? -1 : x;
  };
  const count = same();
  if (count != -1) {
    return count;
  }
  const x = Math.min(...nums1);
  const y = Math.min(...nums2);
  return Math.min(x * 10 + y, y * 10 + x);
};

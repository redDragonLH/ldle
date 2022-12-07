/**
 * 1775. 通过最少操作次数使数组的和相等
 *
 * 给你两个长度可能不等的整数数组 nums1 和 nums2 。两个数组中的所有值都在 1 到 6 之间（包含 1 和 6）。
 *
 * 每次操作中，你可以选择 任意 数组中的任意一个整数，将它变成 1 到 6 之间 任意 的值（包含 1 和 6）。
 *
 * 请你返回使 nums1 中所有数的和与 nums2 中所有数的和相等的最少操作次数。如果无法使两个数组的和相等，请返回 -1 。
 */

/**
 *先要确认能否相等,但是数量不一样的情况下怎样确定能否相等?平均数么,或者最大值最小值是否有重合么
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
  let num1Len = nums1.length;
  let nums2Len = nums2.length;
};

/**
 * 官方 贪心+ 哈希
 */
var minOperations = function (nums1, nums2) {
  const n = nums1.length,
    m = nums2.length;
  // nums1的最大值 小于 nums2的最小值
  // 或者 nums2 的最大值 小于 nums1的最小值
  // 否则没有相交的域,无法相等
  if (6 * n < m || 6 * m < n) {
    return -1;
  }
  // 判断当前两个数组是否相等
  const cnt1 = new Array(7).fill(0);
  const cnt2 = new Array(7).fill(0);
  let diff = 0;
  for (const i of nums1) {
    ++cnt1[i];
    diff += i;
  }
  for (const i of nums2) {
    ++cnt2[i];
    diff -= i;
  }
  // 相等条件,不用修改
  if (diff === 0) {
    return 0;
  }
  // 大于零说明是 nums1 大于nums2
  if (diff > 0) {
    return help(cnt2, cnt1, diff);
  }
  return help(cnt1, cnt2, -diff);
};

const help = (h1, h2, diff) => {
  const h = new Array(7).fill(0);
  for (let i = 1; i < 7; ++i) {
    h[6 - i] += h1[i];
    h[i - 1] += h2[i];
  }
  let res = 0;
  for (let i = 5; i > 0 && diff > 0; --i) {
    let t = Math.min(Math.floor((diff + i - 1) / i), h[i]);
    res += t;
    diff -= t * i;
  }
  return res;
};

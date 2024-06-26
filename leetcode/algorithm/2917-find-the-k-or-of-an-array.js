/**
 * 2917. 找出数组中的 K-or 值
 *
 * 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。
 * nums 中的 K-or 是一个满足以下条件的非负整数：
 * 只有在 nums 中，至少存在 k 个元素的第 i 位值为 1 ，那么 K-or 中的第 i 位的值才是 1 。
 * 返回 nums 的 K-or 值。
 * 注意 ：对于整数 x ，如果 (2i AND x) == 2i ，则 x 中的第 i 位值为 1 ，其中 AND 为按位与运算符。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function (nums, k) {
  let ans = 0;
  for (let i = 0; i < 31; ++i) {
    let cnt = 0;
    for (const num of nums) {
      if ((num >> i) & 1) {
        ++cnt;
      }
    }
    if (cnt >= k) {
      ans |= 1 << i;
    }
  }
  return ans;
};

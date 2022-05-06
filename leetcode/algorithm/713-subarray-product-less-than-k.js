/**
 * 713. 乘积小于 K 的子数组
 *
 * 给你一个整数数组 nums 和一个整数 k ，请你返回子数组内所有元素的乘积严格小于 k 的连续子数组的数目。
 */

/**
 * 还是要先确定连续子数组的概念
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let n = nums.length,
    ret = 0;
  let prod = 1,
    i = 0;
    // 主要是i-j的之间的数据处理
  for (let j = 0; j < n; j++) {
    prod *= nums[j];
    while (i <= j && prod >= k) {
      prod /= nums[i];
      i++;
    }
    ret += j - i + 1;
  }
  return ret;
};

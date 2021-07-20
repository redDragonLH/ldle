/**
 * 1877. 数组中最大数对和的最小值
 *
 * 一个数对 (a,b) 的 数对和 等于 a + b 。最大数对和 是一个数对数组中最大的 数对和 。
 *  * 比方说，如果我们有数对 (1,5) ，(2,3) 和 (4,4)，最大数对和 为 max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8 。
 *
 * 给你一个长度为 偶数 n 的数组 nums ，请你将 nums 中的元素分成 n / 2 个数对，使得：
 *  * n * ums 中每个元素 恰好 在 一个 数对中，且
 *  * 最大数对和 的值 最小 。
 *
 * 请你在最优数对划分的方案下，返回最小的 最大数对和 。
 */

/**
 * 
 * 对于n 个数的情况,即第k大与第k小组成的 n/2 个数对,同样可以使得最大数对和最小
 * 
 * 根据上述思路,要将数组排序,排序后遍历每一个第k大与第k小组成的数对,计算它们的和,维护最大值
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  const n = nums.length;
  let res = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < Math.floor(n / 2); i++) {
    res = Math.max(res, nums[i] + nums[n - 1 - i]);
  }
  return res;
};

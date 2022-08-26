/**
 * 1464. 数组中两元素的最大乘积
 *
 * 给你一个整数数组 nums，请你选择数组的两个不同下标 i 和 j，使 (nums[i]-1)*(nums[j]-1) 取得最大值。
 *
 * 请你计算并返回该式的最大值。
 */
/**
 * 排序
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length < 2) return nums[0];
  nums.sort((a, b) => a - b);
  let len = nums.length;
  return (nums[len - 1] - 1) * (nums[len - 2] - 1);
};
/**
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了37.63%的用户
 * 内存消耗：41.7 MB, 在所有 JavaScript 提交中击败了29.57%的用户
 */

/**
 * 直接遍历
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let len = nums.length;
  if (len < 2) return nums[0];
  let max = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      max = Math.max(max, (nums[i] - 1) * (nums[j] - 1));
    }
  }
  return max;
};
/**
 * 效率更低
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了14.52%的用户
 * 内存消耗：41.2 MB, 在所有 JavaScript 提交中击败了78.50%的用户
 */

/**
 * 一次遍历找到最大的前几个值~~
 * @param {number[]} nums
 * @return {number}
 */
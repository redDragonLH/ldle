/**
 * 3264. K 次乘运算后的最终数组 I
 * 
 * 给你一个整数数组 nums ，一个整数 k  和一个整数 multiplier 。

 * 你需要对 nums 执行 k 次操作，每次操作中：

 *  * 找到 nums 中的 最小 值 x ，如果存在多个最小值，选择最 前面 的一个。
 *  * 将 x 替换为 x * multiplier 。
 * 请你返回执行完 k 次乘运算之后，最终的 nums 数组。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  let min = Math.min(...nums);
  let index = nums.indexOf(min);
  nums[index] = min * multiplier;
  if (k > 1) {
    return getFinalState(nums, k - 1, multiplier);
  }
  return nums;
};

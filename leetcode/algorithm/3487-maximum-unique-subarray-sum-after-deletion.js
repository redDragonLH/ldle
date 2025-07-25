/**
 * 3487. 删除后的最大子数组元素和
 *
 * 给你一个整数数组 nums 。
 * 你可以从数组 nums 中删除任意数量的元素，但不能将其变为 空 数组。执行删除操作后，选出 nums 中满足下述条件的一个子数组：
 *  * 子数组中的所有元素 互不相同 。
 *  * 最大化 子数组的元素和。
 * 返回子数组的 最大元素和 。
 * 子数组 是数组的一个连续、非空 的元素序列。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  let max = Math.max(...nums);
  if (max <= 0) {
    return max;
  }
  return new Set(nums).values().reduce((acc, cur) => {
    return acc + (cur > 0 ? cur : 0);
  }, 0);
};
/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：55.83 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */
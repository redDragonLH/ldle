/**
 * 3689. 最大子数组总值 I
 *
 * 给定一个长度为 n 的整数数组 nums 和一个整数 k。
 * 你必须从 nums 中选择 恰好 k 个非空子数组 nums[l..r]。子数组可以重叠，同一个子数组（相同的 l 和 r）可以 被选择超过一次。
 * 子数组 nums[l..r] 的 值 定义为：max(nums[l..r]) - min(nums[l..r])。
 * 总值 是所有被选子数组的 值 之和。
 * 返回你能实现的 最大 可能总值。
 * 子数组 是数组中连续的 非空 元素序列。
 */
/**
 * 直接找最小值最大值
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function (nums, k) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return (max - min) * k;
};
/**
 * 执行用时 : 3 ms, 在所有 JavaScript 提交中击败了 100.00% 的用户
 * 内存消耗 : 66.55 MB, 在所有 JavaScript 提交中击败了 66.67% 的用户
 */
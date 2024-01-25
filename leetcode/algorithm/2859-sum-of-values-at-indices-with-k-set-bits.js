/**
 * 2859. 计算 K 置位下标对应元素的和
 *
 * 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。
 * 请你用整数形式返回 nums 中的特定元素之 和 ，这些特定元素满足：其对应下标的二进制表示中恰存在 k 个置位。
 * 整数的二进制表示中的 1 就是这个整数的 置位 。
 * 例如，21 的二进制表示为 10101 ，其中有 3 个置位。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  let result = 0;
  nums.forEach((e, i) => {
    let arr = [...i.toString(2).matchAll(/1/g)];
    if (arr.length === k) {
      result += e;
    }
  });
  return result;
};
/**
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了31.58%的用户
 * 内存消耗：56.16 MB, 在所有 JavaScript 提交中击败了5.26%的用户
 */
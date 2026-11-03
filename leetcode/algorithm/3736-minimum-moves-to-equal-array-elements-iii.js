/**
 * 3736. 最小操作次数使数组元素相等 III
 *
 * 给你一个整数数组 nums。
 * 在一步操作中，你可以将任意单个元素 nums[i] 的值 增加 1。
 * 返回使数组中的所有元素都 相等 所需的 最小总操作次数 。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  nums.sort((a, b) => a - b);
  let max = nums[nums.length - 1];
  let moves = 0;
  for (let i = 0; i < nums.length; i++) {
    moves += max - nums[i];
  }
  return moves;
};
/**
 * 执行用时 :2 ms, 在所有 JavaScript 提交中击败了62.50%的用户
 * 内存消耗 :56.05 MB, 在所有 JavaScript 提交中击败了75.00%的用户
 */
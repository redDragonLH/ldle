/**
 * 2717. 半有序排列
 *
 * 给你一个下标从 0 开始、长度为 n 的整数排列 nums 。
 * 如果排列的第一个数字等于 1 且最后一个数字等于 n ，则称其为 半有序排列 。你可以执行多次下述操作，直到将 nums 变成一个 半有序排列 ：
 *  * 选择 nums 中相邻的两个元素，然后交换它们。
 * 返回使 nums 变成 半有序排列 所需的最小操作次数。
 * 排列 是一个长度为 n 的整数序列，其中包含从 1 到 n 的每个数字恰好一次。
 */

/**
 * 找到1,找到n;
 * 需要考虑1和n的位置，如果1在后，n在前,那么有个交换是算一次的
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {
  let nPos = nums.indexOf(nums.length);
  let onePos = nums.indexOf(1);
  if (onePos > nPos) {
    return onePos + (nums.length - 1 - nPos) - 1;
  }
  return onePos + (nums.length - 1 - nPos);
};
/**
 * 只有在1和n需要交换的情况下,这次交换只算一次操作
 * 执行用时：1 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：53.16 MB, 在所有 JavaScript 提交中击败了31.43%的用户
 */
/**
 * 3038. 相同分数的最大操作数目 I
 *
 * 给你一个整数数组 nums ，如果 nums 至少 包含 2 个元素，你可以执行以下操作：
 *  * 选择 nums 中的前两个元素并将它们删除。
 *  * 一次操作的 分数 是被删除元素的和。
 * 在确保 所有操作分数相同 的前提下，请你求出 最多 能进行多少次操作。
 * 请你返回按照上述要求 最多 可以进行的操作次数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function (nums) {
  let result = 1;
  let count = nums[0] + nums[1];
  for (let i = 3; i < nums.length; i += 2) {
    if (nums[i] + nums[i - 1] === count) {
      result++;
    } else {
      return result;
    }
  }
  return result;
};
/**
 * 执行用时：63 ms, 在所有 JavaScript 提交中击败了50.00%的用户
 * 内存消耗：49.73 MB, 在所有 JavaScript 提交中击败了12.50%的用户
 */
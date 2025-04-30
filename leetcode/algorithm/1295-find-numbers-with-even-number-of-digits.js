/**
 * 1295. 统计位数为偶数的数字
 *
 * 给你一个整数数组 nums，请你返回其中包含 偶数 个数位的数字的个数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (String(nums[i]).length % 2 === 0) {
      count++;
    }
  }
  return count;
};
/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：54.64 MB, 在所有 JavaScript 提交中击败了46.15%的用户
 */

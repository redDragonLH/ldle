/**
 * 2903. 找出满足差值条件的下标 I
 *
 * 给你一个下标从 0 开始、长度为 n 的整数数组 nums ，以及整数 indexDifference 和整数 valueDifference 。
 * 你的任务是从范围 [0, n - 1] 内找出  2 个满足下述所有条件的下标 i 和 j ：
 *  * abs(i - j) >= indexDifference 且
 *  * abs(nums[i] - nums[j]) >= valueDifference
 *
 * 返回整数数组 answer。如果存在满足题目要求的两个下标，则 answer = [i, j] ；否则，answer = [-1, -1] 。如果存在多组可供选择的下标对，只需要返回其中任意一组即可。
 * 注意：i 和 j 可能 相等 。
 */

/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function (nums, indexDifference, valueDifference) {
  let len = nums.length;
  for (let i = indexDifference; i < len; i++) {
    for (let j = 0; j <= i - indexDifference; j++) {
      if (Math.abs(nums[i] - nums[j]) >= valueDifference) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};
/**
 * 执行用时：62 ms, 在所有 JavaScript 提交中击败了75.61%的用户
 * 内存消耗：50.80 MB, 在所有 JavaScript 提交中击败了43.90%的用户
 */
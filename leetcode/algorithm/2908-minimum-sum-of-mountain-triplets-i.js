/**
 * 2908. 元素和最小的山形三元组 I
 *
 * 给你一个下标从 0 开始的整数数组 nums 。
 * 如果下标三元组 (i, j, k) 满足下述全部条件，则认为它是一个 山形三元组 ：
 *  * i < j < k
 *  * nums[i] < nums[j] 且 nums[k] < nums[j]
 * 请你找出 nums 中 元素和最小 的山形三元组，并返回其 元素和 。如果不存在满足条件的三元组，返回 -1 。
 */

/**
 * 最菜的方案,三层遍历
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
  let len = nums.length;
  if (len < 3) return -1;
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[i] < nums[j] && nums[j] > nums[k]) {
          result = Math.min(result, nums[i] + nums[j] + nums[k]);
        }
      }
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? -1 : result;
};
/**
 * 竟然过了?
 * 执行用时：75 ms, 在所有 JavaScript 提交中击败了35.71%的用户
 * 内存消耗：50.02 MB, 在所有 JavaScript 提交中击败了75.00%的用户
 */
/**
 * 2367. 算术三元组的数目
 *
 * 给你一个下标从 0 开始、严格递增 的整数数组 nums 和一个正整数 diff 。如果满足下述全部条件，则三元组 (i, j, k) 就是一个 算术三元组 ：
 *  * i < j < k ，
 *  * nums[j] - nums[i] == diff 且
 *  * nums[k] - nums[j] == diff
 * 返回不同 算术三元组 的数目。
 */

/**
 * 三层循环~~
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let len = nums.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[j] - nums[i] == diff && nums[k] - nums[j] == diff) result++;
      }
    }
  }
  return result
};
/**
 * 暴力遍历
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了54.44%的用户
 * 内存消耗：41.1 MB, 在所有 JavaScript 提交中击败了76.67%的用户
 */
/**
 * 2824. 统计和小于目标的下标对数目
 *
 * 给你一个下标从 0 开始长度为 n 的整数数组 nums 和一个整数 target ，请你返回满足 0 <= i < j < n 且 nums[i] + nums[j] < target 的下标对 (i, j) 的数目。
 */

/**
 * 可以用 target 与num的差查找数据
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
    let result = 0
  for (let i = 0; i < nums.length; i++) {
    let t = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
        if(t>nums[j]){
            result++
        }
    }
  }
  return result
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了84.91%的用户
 * 内存消耗：41.62 MB, 在所有 JavaScript 提交中击败了42.45%的用户
 */
/**
 * 2357. 使数组中所有元素都等于零
 *
 * 给你一个非负整数数组 nums 。在一步操作中，你必须：
 *  * 选出一个正整数 x ，x 需要小于或等于 nums 中 最小 的 非零 元素。
 *  * nums 中的每个正整数都减去 x。
 * 返回使 nums 中所有元素都等于 0 需要的 最少 操作数。
 */

/**
 * 模拟?
 * 不对.最少不就是元素数量,除非有相等的
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  nums.sort((a, b) => a - b);
  let result = nums.length;
  let len = result;
  if (nums[0] === 0) {
    result--;
  }
  for (let i = 1; i < len; i++) {
    console.log(nums[i], result);
    if (nums[i] === 0) {
      result--;
      continue;
    }
    if (nums[i] === nums[i - 1]) {
      result--;
    }
  }
};
/**
 * 这还这么低的效率,难道其他算法整个算法都是 O(1)?
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了14%的用户
 * 内存消耗：43.7 MB, 在所有 JavaScript 提交中击败了13%的用户
 */
/**
 * 3727. 最大交替平方和
 *
 * 给你一个整数数组 nums。你可以以任意顺序 重新排列元素 。
 * 数组 arr 的 交替得分 定义为：
 *  * score = arr[0]2 - arr[1]2 + arr[2]2 - arr[3]2 + ...
 * 在对 nums 重新排列后，返回其 最大可能的交替得分。
 */
/**
 * 两头相减
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
  nums = nums.map((x) => x * x);
  nums.sort((a, b) => b - a);
  let score = 0;
  for (let i = 0; i < Math.floor(nums.length / 2); i++) {
    let endi = nums.length - 1 - i;
    score += nums[i] - nums[endi];
  }
  if (nums.length % 2 === 1) {
    score += nums[Math.floor(nums.length / 2)];
  }
  return score;
};
/**
 * 执行用时 :149 ms, 在所有 JavaScript 提交中击败了50.00%的用户
 * 内存消耗 :81.18 MB, 在所有 JavaScript 提交中击败了0%的用户
 */
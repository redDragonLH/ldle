/**
 * 3191. 使二进制数组全部等于 1 的最少操作次数 I
 *
 * 给你一个二进制数组 nums 。
 * 你可以对数组执行以下操作 任意 次（也可以 0 次）：
 *  * 选择数组中 任意连续 3 个元素，并将它们 全部反转 。
 *  * 反转 一个元素指的是将它的值从 0 变 1 ，或者从 1 变 0 。
 * 请你返回将 nums 中所有元素变为 1 的 最少 操作次数。如果无法全部变成 1 ，返回 -1 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let n = nums.length;
  let res = 0;
  for (let i = 0; i < n; ++i) {
    if (nums[i] === 1) {
      continue;
    }
    // 翻转到最后选不了三个了,就反会-1
    if (i + 2 >= n) {
      return -1;
    }
    nums[i] = 1;
    nums[i + 1] = 1 - nums[i + 1];
    nums[i + 2] = 1 - nums[i + 2];
    res++;
  }
  return res;
};
/**
 * 这就是纯贪心了吧,一个一个的遍历翻转,最多nums.length次
 * 
 * 还以为会是很复杂的算法,但是又有了一个疑问,为什么贪心可以解决这个问题
 * 
 * Copilot 推荐的解法第一次通过了,惊了,是进化了?
 */
/**
 * 1218. 最长定差子序列
 *
 * 给你一个整数数组 arr 和一个整数 difference，请你找出并返回 arr 中最长等差子序列的长度，该子序列中相邻元素之间的差等于 difference 。
 *
 * 子序列 是指在不改变其余元素顺序的情况下，通过删除一些元素或不删除任何元素而从 arr 派生出来的序列。
 */

/**
 * 遍历全部,然后记录连续等差数量,进行比大小
 * 不对,是可以越过元素的~~,那就得递归全部分支了
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {};

/**
 * 动态规划
 */
var longestSubsequence = function (arr, difference) {
  let ans = 0;
  const dp = new Map();
  for (const v of arr) {
      // 核心代码
    dp.set(v, (dp.get(v - difference) || 0) + 1);
    ans = Math.max(ans, dp.get(v));
  }
  return ans;
};

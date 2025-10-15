/**
 * 3350. 检测相邻递增子数组 II
 *
 * 给你一个由 n 个整数组成的数组 nums ，请你找出 k 的 最大值，使得存在 两个 相邻 且长度为 k 的 严格递增 子数组。具体来说，需要检查是否存在从下标 a 和 b (a < b) 开始的 两个 子数组，并满足下述全部条件：
 *  * 这两个子数组 nums[a..a + k - 1] 和 nums[b..b + k - 1] 都是 严格递增 的。
 *  * 这两个子数组必须是 相邻的，即 b = a + k。
 * 返回 k 的 最大可能 值。
 * 子数组 是数组中的一个连续 非空 的元素序列。
 */

/**
 * 首先遍历严格递增的子数组，记录每个位置的最长递增子数组长度
 * 找到后，遍历这个长度数组，找到相邻且长度相等的两个子数组
 * 取出长度的最大值
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function (nums) {
  const n = nums.length;
  if (n < 2) return 0;

  // right[i]: 以i为起点的最长严格递增子数组长度
  const right = Array(n).fill(1);
  for (let i = n - 2; i >= 0; --i) {
    if (nums[i] < nums[i + 1]) {
      right[i] = right[i + 1] + 1;
    }
  }

  // left[i]: 以i为终点的最长严格递增子数组长度
  const left = Array(n).fill(1);
  for (let i = 1; i < n; ++i) {
    if (nums[i - 1] < nums[i]) {
      left[i] = left[i - 1] + 1;
    }
  }

  let res = 0;
  // 枚举分界点i，i是第一个子数组的结尾，i+1是第二个子数组的开头
  for (let i = 0; i < n - 1; ++i) {
    // 两个相邻递增子数组的长度
    let k = Math.min(left[i], right[i + 1]);
    res = Math.max(res, k);
  }
  return res;
};
/**
 * 执行用时 :146 ms, 在所有 JavaScript 提交中击败了30.00%的用户
 * 内存消耗 :85.61 MB, 在所有 JavaScript 提交中击败了30.00%的用户
 */
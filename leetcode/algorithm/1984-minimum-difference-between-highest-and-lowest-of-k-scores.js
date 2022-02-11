/**
 * 1984. 学生分数的最小差值
 *
 * 给你一个 下标从 0 开始 的整数数组 nums ，其中 nums[i] 表示第 i 名学生的分数。另给你一个整数 k 。
 *
 * 从数组中选出任意 k 名学生的分数，使这 k 个分数间 最高分 和 最低分 的 差值 达到 最小化 。
 *
 * 返回可能的 最小差值 。
 */
/**
 * 排序+滑动窗口?
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  let len = nums.length;

  nums.sort((a, b) => a - b);
  let start = 0,
    end = k - 1;
  let result = nums[end] - nums[start];
  for (let i = k; i < len; i++) {
    start++;
    end++;
    result = Math.min(result, nums[end] - nums[start]);
  }
  return result;
};
/**
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了75.00%的用户
 * 内存消耗：43.1 MB, 在所有 JavaScript 提交中击败了13.89%的用户
 */
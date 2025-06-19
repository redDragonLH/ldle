/**
 * 2294. 划分数组使最大差为 K
 *
 * 给你一个整数数组 nums 和一个整数 k 。你可以将 nums 划分成一个或多个 子序列 ，使 nums 中的每个元素都 恰好 出现在一个子序列中。
 * 在满足每个子序列中最大值和最小值之间的差值最多为 k 的前提下，返回需要划分的 最少 子序列数目。
 * 子序列 本质是一个序列，可以通过删除另一个序列中的某些元素（或者不删除）但不改变剩下元素的顺序得到。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function (nums, k) {
  // 首先对数组进行排序
  nums.sort((a, b) => a - b);

  let count = 1; // 至少需要一个子序列
  let min = nums[0]; // 当前子序列的最小值

  for (let i = 1; i < nums.length; i++) {
    // 如果当前元素与当前子序列的最小值的差大于 k，则需要新建一个子序列
    if (nums[i] - min > k) {
      count++;
      min = nums[i]; // 更新当前子序列的最小值
    }
  }

  return count;
};
/**
 * 执行用时：143 ms, 在所有 JavaScript 提交中击败了37.50%的用户
 * 内存消耗：67.93 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */

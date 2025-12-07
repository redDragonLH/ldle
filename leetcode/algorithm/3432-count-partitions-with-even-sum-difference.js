/**
 * 3432. 统计元素和差值为偶数的分区方案
 *
 * 给你一个长度为 n 的整数数组 nums 。
 * 分区 是指将数组按照下标 i （0 <= i < n - 1）划分成两个 非空 子数组，其中：
 *  * 左子数组包含区间 [0, i] 内的所有下标。
 *  * 右子数组包含区间 [i + 1, n - 1] 内的所有下标。
 * 对左子数组和右子数组先求元素 和 再做 差 ，统计并返回差值为 偶数 的 分区 方案数。
 */

/**
 * 前缀和吗？
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
  let n = nums.length;
  let prefixSum = new Array(n).fill(0);
  prefixSum[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }
  let totalSum = prefixSum[n - 1];
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    let leftSum = prefixSum[i];
    let rightSum = totalSum - leftSum;
    if ((leftSum - rightSum) % 2 === 0) {
      count++;
    }
  }
  return count;
};
/**
 * 执行用时 :0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :57.91 MB, 在所有 JavaScript 提交中击败了9.09%的用户
 */
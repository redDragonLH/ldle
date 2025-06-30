/**
 * 2099. 找到和最大的长度为 K 的子序列
 *
 * 给你一个整数数组 nums 和一个整数 k 。你需要找到 nums 中长度为 k 的 子序列 ，且这个子序列的 和最大 。
 * 请你返回 任意 一个长度为 k 的整数子序列。
 * 子序列 定义为从一个数组里删除一些元素后，不改变剩下元素的顺序得到的数组。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
  // 创建一个数组来存储元素和它们的索引
  const indexedNums = nums.map((num, index) => ({ num, index }));

  // 按照 num 的值降序排序
  indexedNums.sort((a, b) => b.num - a.num);

  // 取前 k 个最大的元素
  const topK = indexedNums.slice(0, k);

  // 按照原始索引升序排序
  topK.sort((a, b) => a.index - b.index);

  // 返回这些元素的值
  return topK.map((item) => item.num);
};
/**
 * 执行用时：5 ms, 在所有 JavaScript 提交中击败了87.50%的用户
 * 内存消耗：56.18 MB, 在所有 JavaScript 提交中击败了95.83%的用户
 */
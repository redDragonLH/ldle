/**
 * 3731. 找出缺失的元素
 *
 * 给你一个整数数组 nums ，数组由若干 互不相同 的整数组成。
 * 数组 nums 原本包含了某个范围内的 所有整数 。但现在，其中可能 缺失 部分整数。
 * 该范围内的 最小 整数和 最大 整数仍然存在于 nums 中。
 * 返回一个 有序 列表，包含该范围内缺失的所有整数，并 按从小到大排序。如果没有缺失的整数，返回一个 空 列表。
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const missing = [];
  for (let i = min; i <= max; i++) {
    if (!nums.includes(i)) {
      missing.push(i);
    }
  }
  return missing;
};
/**
 * 找出最大最小值然后遍历还是比我想的先排序在判断好很多,排序了最后也要落到最大最小值上
 * 执行用时 :1 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :58.11 MB, 在所有 JavaScript 提交中击败了55.56%的用户
 */
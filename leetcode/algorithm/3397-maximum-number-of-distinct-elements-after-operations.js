/**
 * 3397. 执行操作后不同元素的最大数量
 *
 * 给你一个整数数组 nums 和一个整数 k。
 * 你可以对数组中的每个元素 最多 执行 一次 以下操作：
 *  * 将一个在范围 [-k, k] 内的整数加到该元素上。
 * 返回执行这些操作后，nums 中可能拥有的不同元素的 最大 数量。
 */
/**
 * 失败，如此贪心还是解决不了相邻数据重复过多的问题
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function (nums, k) {
  const distinctElements = new Map();
  let count = k * 2 + 1; // 可用的不同整数数量范围从 -k 到 k，共有 2k + 1 个整数
  for (const num of nums) {
    if (!distinctElements.has(num)) {
      distinctElements.set(num, 1);
    } else {
      distinctElements.set(num, distinctElements.get(num) + 1);
    }
  }
  let result = 0;
  for (const [num, freq] of distinctElements) {
    if (freq <= count) {
      result += freq; // 该元素已经是不同的，直接计数
    } else {
      result += count; // 只能使用 count 个不同的整数
    }
  }
  return result;
};

var maxDistinctElements = function (nums, k) {
  // 排序
  nums.sort((a, b) => a - b);
  let cnt = 0;
  let prev = -Number.MAX_SAFE_INTEGER;
  // 一个一个遍历需改，能修改的就加到结果里
  for (const num of nums) {
    const curr = Math.min(Math.max(num - k, prev + 1), num + k);
    if (curr > prev) {
      cnt++;
      prev = curr;
    }
  }
  return cnt;
};
/**
 * 执行用时：9149ms, 在所有 JavaScript 提交中击败了44.44%的用户
 * 内存消耗：67.23 MB, 在所有 JavaScript 提交中击败了77.78%的用户
 */
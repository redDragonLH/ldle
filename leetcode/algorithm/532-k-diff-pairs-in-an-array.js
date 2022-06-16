/**
 * 532. 数组中的 k-diff 数对
 *
 * 给定一个整数数组和一个整数 k，你需要在数组里找到 不同的 k-diff 数对，并返回不同的 k-diff 数对 的数目。
 *
 * 这里将 k-diff 数对定义为一个整数对 (nums[i], nums[j])，并满足下述全部条件：
 *  * 0 <= i < j < nums.length
 *  * |nums[i] - nums[j]| == k
 *
 * 注意，|val| 表示 val 的绝对值。
 */

/**
 * 哈希表
 * 最后判断的是被k处理过的数据，这样就只要判断有无就可以，不需要双重循环
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  const visited = new Set();
  const res = new Set();
  for (const num of nums) {
    if (visited.has(num - k)) {
      res.add(num - k);
    }
    if (visited.has(num + k)) {
      res.add(num);
    }
    visited.add(num);
  }
  return res.size;
};

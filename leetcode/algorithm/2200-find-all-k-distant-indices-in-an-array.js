/**
 * 2200. 找出数组中的所有 K 近邻下标
 *
 * 给你一个下标从 0 开始的整数数组 nums 和两个整数 key 和 k 。K 近邻下标 是 nums 中的一个下标 i ，并满足至少存在一个下标 j 使得 |i - j| <= k 且 nums[j] == key 。
 * 以列表形式返回按 递增顺序 排序的所有 K 近邻下标。
 */
/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  const result = [];
  const n = nums.length;

  // 找到所有等于 key 的下标
  const keyIndices = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] === key) {
      keyIndices.push(i);
    }
  }

  // 对每个下标 i，检查是否满足 K 近邻条件
  for (let i = 0; i < n; i++) {
    for (const j of keyIndices) {
      if (Math.abs(i - j) <= k) {
        result.push(i);
        break; // 找到一个满足条件的 j 后就可以跳出内层循环
      }
    }
  }

  // 去重并排序
  return Array.from(new Set(result)).sort((a, b) => a - b);
};
/**
 * 执行用时：7 ms, 在所有 JavaScript 提交中击败了57.14%的用户
 * 内存消耗：58.84 MB, 在所有 JavaScript 提交中击败了19.05%的用户
 */

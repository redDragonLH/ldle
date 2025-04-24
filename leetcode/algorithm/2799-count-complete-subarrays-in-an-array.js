/**
 * 2799. 统计完全子数组的数目
 *
 * 给你一个由 正 整数组成的数组 nums 。
 * 如果数组中的某个子数组满足下述条件，则称之为 完全子数组 ：
 * 子数组中 不同 元素的数目等于整个数组不同元素的数目。
 * 返回数组中 完全子数组 的数目。
 * 子数组 是数组中的一个连续非空序列。
 */

/**
 * 双层遍历可以解决这个问题
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  const n = nums.length;
  const set = new Set(nums);
  const m = set.size;
  let res = 0;
  for (let i = 0; i < n; i++) {
    const s = new Set();
    for (let j = i; j < n; j++) {
      s.add(nums[j]);
      if (s.size === m) {
        res++;
      }
    }
  }
  return res;
};
/**
 * 执行用时：214 ms, 在所有 JavaScript 提交中击败了 13.46%的用户
 * 内存消耗：60.54 MB, 在所有 JavaScript 提交中击败了 11.54%的用户
 */
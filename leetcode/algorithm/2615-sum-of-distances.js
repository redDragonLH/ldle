/**
 * 2615. 等值距离和
 *
 * 给你一个下标从 0 开始的整数数组 nums 。现有一个长度等于 nums.length 的数组 arr 。对于满足 nums[j] == nums[i] 且 j != i 的所有 j ，arr[i] 等于所有 |i - j| 之和。如果不存在这样的 j ，则令 arr[i] 等于 0 。
 * 返回数组 arr 。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
  const n = nums.length;
  const groups = new Map();
  for (let i = 0; i < n; i++) {
    if (!groups.has(nums[i])) {
      groups.set(nums[i], []);
    }
    groups.get(nums[i]).push(i);
  }
  const res = new Array(n).fill(0);
  for (const group of groups.values()) {
    let total = 0;
    for (const idx of group) {
      total += idx;
    }
    let prefixTotal = 0;
    const sz = group.length;
    for (let i = 0; i < sz; i++) {
      const idx = group[i];
      res[idx] = total - prefixTotal * 2 + idx * (2 * i - sz);
      prefixTotal += idx;
    }
  }
  return res;
};
/**
 * 执行用时 : 100 ms , 在所有 JavaScript 提交中击败了 85.71% 的用户
 * 内存消耗 : 100.97 MB , 在所有 JavaScript 提交中击败了 57.14% 的用户
 */

/**
 * 2364. 统计坏数对的数目
 *
 * 给你一个下标从 0 开始的整数数组 nums 。如果 i < j 且 j - i != nums[j] - nums[i] ，那么我们称 (i, j) 是一个 坏数对 。
 * 请你返回 nums 中 坏数对 的总数目。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  let totalPairs = (nums.length * (nums.length - 1)) / 2;
  let goodPairs = 0;
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = nums[i] - i;
    if (map.has(diff)) {
      goodPairs += map.get(diff);
      map.set(diff, map.get(diff) + 1);
    } else {
      map.set(diff, 1);
    }
  }

  return totalPairs - goodPairs;
};

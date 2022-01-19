/**
 * 219. 存在重复元素 II
 *
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。
 * 如果存在，返回 true ；否则，返回 false 。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.get(nums[i])
      ? map.set(nums[i], [...map.get(nums[i]), i])
      : map.set(nums[i], [i]);
  }
  for (let [key, value] of map) {
    if (value.length < 2) continue;
    // 还要在value里面循环
    for (let i = 1; i < value.length; i++) {
      if (value[i] - value[i - 1] <= k) return true;
    }
  }
  return false;
};
/**
 * 速度很慢,是转成map不必要还是内部循环不必要,或者是有其他逻辑解法
 * 
 * 执行用时：212 ms, 在所有 JavaScript 提交中击败了35.75%的用户
 * 内存消耗：65 MB, 在所有 JavaScript 提交中击败了5.08%的用户
 */
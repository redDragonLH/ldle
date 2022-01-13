/**
 * 747. 至少是其他数字两倍的最大数
 *
 * 给你一个整数数组 nums ，其中总是存在 唯一的 一个最大整数 。
 *
 * 请你找出数组中的最大元素并检查它是否 至少是数组中每个其他数字的两倍 。如果是，则返回 最大元素的下标 ，否则返回 -1 。
 */

/**
 * 双指针一次遍历
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length === 1) return 0;
  let first = nums[0];
  let second = 0;
  for (const num of nums) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }
  if (!second) return nums.findIndex((e) => e === first);
  return first / second >= 2 ? nums.findIndex((e) => e === first) : -1;
};
/**
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了68.39%的用户
 * 内存消耗：39.2 MB, 在所有 JavaScript 提交中击败了20.12%的用户
 */
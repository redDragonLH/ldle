/**
 * 1752. 检查数组是否经排序和轮转得到
 *
 * 给你一个数组 nums 。nums 的源数组中，所有元素与 nums 相同，但按非递减顺序排列。
 *
 * 如果 nums 能够由源数组轮转若干位置（包括 0 个位置）得到，则返回 true ；否则，返回 false 。
 *
 * 源数组中可能存在 重复项 。
 *
 * 注意：我们称数组 A 在轮转 x 个位置后得到长度相同的数组 B ，当它们满足 A[i] == B[(i+x) % A.length] ，其中 % 为取余运算。
 */

/**
 * 轮转的数组
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let map = [...nums, ...nums];
  nums.sort((a, b) => a - b);
  let index = map.indexOf(nums[0]);
  let start = index;
  while (start > -1) {
    let i = 0;
    for (; i < nums.length; i++) {
      if (nums[i] !== map[start++]) {
        index = map.indexOf(nums[0], index + 1);
        start = index;
        break;
      }
    }
    console.log(i, nums.length);
    if (i === nums.length) return true;
  }

  return false;
};
/**
 * 执行用时：52 ms, 在所有 JavaScript 提交中击败了97.73%的用户
 * 内存消耗：42.6 MB, 在所有 JavaScript 提交中击败了6.82%的用户
 */
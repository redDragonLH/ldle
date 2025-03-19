/**
 * 2610. 转换二维数组
 *
 * 给你一个整数数组 nums 。请你创建一个满足以下条件的二维数组：
 *  * 二维数组应该 只 包含数组 nums 中的元素。
 *  * 二维数组中的每一行都包含 不同 的整数。
 *  * 二维数组的行数应尽可能 少 。
 * 返回结果数组。如果存在多种答案，则返回其中任何一种。
 * 请注意，二维数组的每一行上可以存在不同数量的元素。
 */

/**
 * 也就是筛掉数组重的重复元素,这就是第一行,然后其他行都仿照第一行,过程中的问题是要获取不重复的元素,还要把剩余的元素也获取到
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  let result = [];
  let map = new Map();
  let row = [];
  let caculated = 0;
  while (nums.length > caculated) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] && !map.has(nums[i])) {
        map.set(nums[i], 1);
        row.push(nums[i]);
        nums[i] = 0;
        caculated++;
      }
    }
    result.push(row);
    row = [];
    map.clear();
  }

  return result;
};
/**
 * 执行用时：3 ms, 在所有 JavaScript 提交中击败了94.74%的用户
 * 内存消耗：61.48 MB, 在所有 JavaScript 提交中击败了5.26%的用户
 */
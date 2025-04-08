/**
 * 3396. 使数组元素互不相同所需的最少操作次数
 *
 * 给你一个整数数组 nums，你需要确保数组中的元素 互不相同 。为此，你可以执行以下操作任意次：
 *  * 从数组的开头移除 3 个元素。如果数组中元素少于 3 个，则移除所有剩余元素。
 * 注意：空数组也视作为数组元素互不相同。返回使数组元素互不相同所需的 最少操作次数 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let map = new Map();
  let posi = 0;
  let len = nums.length - 1;
  for (let i = len; i > -1; i--) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      posi = i + 1;
      break;
    }
  }
  return Math.ceil(posi / 3);
};
/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：56.14 MB, 在所有 JavaScript 提交中击败了31.43%的用户
 */

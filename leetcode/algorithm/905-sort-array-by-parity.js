/**
 * 905. 按奇偶排序数组
 *
 * 给你一个整数数组 nums，将 nums 中的的所有偶数元素移动到数组的前面，后跟所有奇数元素。
 *
 * 返回满足此条件的 任一数组 作为答案。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let start = 0,
    end = nums.length - 1;
  while (start < end) {
    if (nums[start] % 2) {
      let temp = nums[end];
      nums[end] = nums[start];
      nums[start] = temp;
      end--;
    } else {
      start++;
    }
  }
  return nums;
};
/**
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了91.58%的用户
 * 内存消耗：43.6 MB, 在所有 JavaScript 提交中击败了66.94%的用户
 */

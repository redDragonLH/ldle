/**
 * 1493. 删掉一个元素以后全为 1 的最长子数组
 *
 * 给你一个二进制数组 nums ，你需要从中删掉一个元素。
 * 请你在删掉元素的结果数组中，返回最长的且只包含 1 的非空子数组的长度。
 * 如果不存在这样的子数组，请返回 0 。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let left = 0,
    right = 0;
  let zeroCount = 0; // 记录窗口内0的数量
  let maxLength = 0; // 记录最长子数组长度

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    // 当窗口内0的数量超过1时，移动左指针缩小窗口
    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    // 更新最长子数组长度（减去一个删除的元素）
    maxLength = Math.max(maxLength, right - left);
    right++;
  }

  return maxLength;
};
/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了 100.00 %的用户
 * 内存消耗：59.73 MB, 在所有 JavaScript 提交中击败了34.58%的用户
 */
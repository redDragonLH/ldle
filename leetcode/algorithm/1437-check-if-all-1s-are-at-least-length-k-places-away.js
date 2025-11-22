/**
 * 1437. 是否所有 1 都至少相隔 k 个元素
 * 给你一个由若干 0 和 1 组成的数组 nums 以及整数 k。如果所有 1 都至少相隔 k 个元素，则返回 true ；否则，返回 false 。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let lastOneIndex = -1; // 上一个1的位置
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      // 遇到1了
      if (lastOneIndex === -1) {
        lastOneIndex = i; // 第一个1
      } else {
        if (i - lastOneIndex - 1 < k) {
          // 计算距离
          return false;
        } else {
          lastOneIndex = i; // 更新位置
        }
      }
    }
  }
  return true;
};
/**
 * 执行用时：1 ms, 在所有 JavaScript 提交中击败了87.88%的用户
 * 内存消耗：61.83 MB, 在所有 JavaScript 提交中击败了27.27%的用户
 */
/**
 * 1460. 通过翻转子数组使两个数组相等
 *
 * 给你两个长度相同的整数数组 target 和 arr 。每一步中，你可以选择 arr 的任意 非空子数组 并将它翻转。你可以执行此过程任意次。
 *
 * 如果你能让 arr 变得与 target 相同，返回 True；否则，返回 False 。
 */

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  // 判断长度是否相等
  if (target.length !== arr.length) return false;
  // 最大长度是1000~~
  let box = new Array(1000).fill(0);
  let len = target.length;
  for (let i = 0; i < len; i++) {
    box[target[i]]++;
    box[arr[i]]--;
  }
  for (let i = 0; i < 1000; i++) {
    if (box[i]) return false;
  }
  return true;
};

/**
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了75.28%的用户
 * 内存消耗：44 MB, 在所有 JavaScript 提交中击败了23.60%的用户
 */

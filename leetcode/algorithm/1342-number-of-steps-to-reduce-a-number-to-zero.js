/**
 * 1342. 将数字变成 0 的操作次数
 *
 * 给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。
 */

/**
 * 暴力遍历
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let result = 0;
  while (num) {
    result++;
    if (num % 2) {
      num--;
    } else {
      num /= 2;
    }
  }
  return result;
};
/**
 * 
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了89.65%的用户
 * 内存消耗：40.5 MB, 在所有 JavaScript 提交中击败了5.51%的用户
 */

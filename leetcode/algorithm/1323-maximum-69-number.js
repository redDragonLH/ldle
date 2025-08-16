/**
 * 1323. 6 和 9 组成的最大数字
 *
 * 给你一个仅由数字 6 和 9 组成的正整数 num。
 * 你最多只能翻转一位数字，将 6 变成 9，或者把 9 变成 6 。
 * 请返回你可以得到的最大数字。
 */
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let str = num.toString();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "6") {
      // 找到第一个6，替换为9
      return parseInt(str.slice(0, i) + "9" + str.slice(i + 1), 10);
    }
  }
  // 如果没有6，直接返回原数
  return num;
};
/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：54.21 MB, 在所有 JavaScript 提交中击败了13.16%的用户
 */

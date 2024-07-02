/**
 * 2710. 移除字符串中的尾随零
 *
 * 给你一个用字符串表示的正整数 num ，请你以字符串形式返回不含尾随零的整数 num 。
 */

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  let len = num.length - 1;
  let i = len;
  for (i = len; i > -1; i--) {
    if (num[i] !== "0") {
      break;
    }
  }

  return num.substring(0, i + 1);
};
/**
 * 执行用时：63 ms, 在所有 JavaScript 提交中击败了88.00%的用户
 * 内存消耗：51.68 MB, 在所有 JavaScript 提交中击败了66.00%的用户
 */
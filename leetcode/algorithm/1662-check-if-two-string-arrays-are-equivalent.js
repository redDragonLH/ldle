/**
 * 1662. 检查两个字符串数组是否相等
 *
 * 给你两个字符串数组 word1 和 word2 。如果两个数组表示的字符串相同，返回 true ；否则，返回 false 。
 *
 * 数组表示的字符串 是由数组中的所有元素 按顺序 连接形成的字符串。
 */
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("");
};
/**
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了68.94%的用户
 * 内存消耗：41.2 MB, 在所有 JavaScript 提交中击败了28.03%的用户
 */
/**
 * 434. 字符串中的单词数
 *
 * 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。
 *
 * 请注意，你可以假定字符串里不包括任何不可打印的字符。
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  s = s + " ";
  let len = s.length;
  let result = 0;
  for (let i = 1; i < len; i++) {
    if (s[i] === " " && s[i - 1] !== " ") result++;
  }
  return result;
};
/**
 * split 不能用,因为有连起来的空格
 * 
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了61.24%的用户
 * 内存消耗：37.8 MB, 在所有 JavaScript 提交中击败了23.78%的用户
 */
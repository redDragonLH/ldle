/**
 * 2414. 最长的字母序连续子字符串的长度
 *
 * 字母序连续字符串 是由字母表中连续字母组成的字符串。换句话说，字符串 "abcdefghijklmnopqrstuvwxyz" 的任意子字符串都是 字母序连续字符串 。
 *  * 例如，"abc" 是一个字母序连续字符串，而 "acb" 和 "za" 不是。
 * 给你一个仅由小写英文字母组成的字符串 s ，返回其 最长 的 字母序连续子字符串 的长度。
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
  let max = 1;
  let cur = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i].charCodeAt() === s[i - 1].charCodeAt() + 1) {
      cur++;
    } else {
      cur = 1;
    }
    max = Math.max(max, cur);
  }
  return max;
};
/**
 * 执行用时：78 ms, 在所有 JavaScript 提交中击败了61.54%的用户
 * 内存消耗：55.55 MB, 在所有 JavaScript 提交中击败了11.54%的用户
 */
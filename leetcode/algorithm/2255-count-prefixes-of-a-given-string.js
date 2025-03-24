/**
 * 2255. 统计是给定字符串前缀的字符串数目
 *
 * 给你一个字符串数组 words 和一个字符串 s ，其中 words[i] 和 s 只包含 小写英文字母 。
 * 请你返回 words 中是字符串 s 前缀 的 字符串数目 。
 * 一个字符串的 前缀 是出现在字符串开头的子字符串。子字符串 是一个字符串中的连续一段字符序列。
 */

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (s.startsWith(words[i])) {
      count++;
    }
  }
  return count;
};
/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：54.65 MB, 在所有 JavaScript 提交中击败了25.00%的用户
 */
/**
 * 2828. 判别首字母缩略词
 *
 * 给你一个字符串数组 words 和一个字符串 s ，请你判断 s 是不是 words 的 首字母缩略词 。
 * 如果可以按顺序串联 words 中每个字符串的第一个字符形成字符串 s ，则认为 s 是 words 的首字母缩略词。例如，"ab" 可以由 ["apple", "banana"] 形成，但是无法从 ["bear", "aardvark"] 形成。
 * 如果 s 是 words 的首字母缩略词，返回 true ；否则，返回 false 。
 */

/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  let sLen = s.length;

  if (words.length !== sLen) return false;
  for (let i = 0; i < sLen; i++) {
    if (s[i] !== words[i][0]) return false;
  }
  return true;
};
/**
 * 执行用时：92 ms, 在所有 JavaScript 提交中击败了17.65%的用户
 * 内存消耗：52.2 MB, 在所有 JavaScript 提交中击败了5.15%的用户
 */
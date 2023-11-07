/**
 * 2586. 统计范围内的元音字符串数
 *
 * 给你一个下标从 0 开始的字符串数组 words 和两个整数：left 和 right 。
 *
 * 如果字符串以元音字母开头并以元音字母结尾，那么该字符串就是一个 元音字符串 ，其中元音字母是 'a'、'e'、'i'、'o'、'u' 。
 *
 * 返回 words[i] 是元音字符串的数目，其中 i 在闭区间 [left, right] 内。
 */

/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const vowel = ["a", "e", "i", "o", "u"];
  let result = 0;
  while (left <= right) {
    let word = words[left];
    if (vowel.includes(word[0]) && vowel.includes(word[word.length - 1])) {
      result++;
    }
    left++;
  }
  return result
};
/**
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了34.09%的用户
 * 内存消耗：43.14 MB, 在所有 JavaScript 提交中击败了39.77%的用户
 */
/**
 * 792. 匹配子序列的单词数
 *
 * 给定字符串 s 和字符串数组 words, 返回  words[i] 中是s的子序列的单词个数 。
 *
 * 字符串的 子序列 是从原始字符串中生成的新字符串，可以从中删去一些字符(可以是none)，而不改变其余字符的相对顺序。
 *  * 例如， “ace” 是 “abcde” 的子序列。
 */

/**
 * 双层遍历可以解决
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let result = 0;
  let len = words.length;
  for (let i = 0; i < len; i++) {
    let word = words[i];
    let index = -1;

    for (let j = 0; j < word.length; j++) {
      index = s.indexOf(word[j], index + 1);
      if (index === -1) {
        break;
      }
      if (j === word.length - 1) {
        result++;
      }
    }
  }
  return result;
};
/**
 * 双层遍历,遍历优化,不会遍历全部
 * 执行用时：100 ms, 在所有 JavaScript 提交中击败了98.33%的用户
 * 内存消耗：39 MB, 在所有 JavaScript 提交中击败了78.33%的用户
 */

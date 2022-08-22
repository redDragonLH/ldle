/**
 * 1455. 检查单词是否为句中其他单词的前缀
 *
 * 给你一个字符串 sentence 作为句子并指定检索词为 searchWord ，其中句子由若干用 单个空格 分隔的单词组成。请你检查检索词 searchWord 是否为句子 sentence 中任意单词的前缀。
 * 如果 searchWord 是某一个单词的前缀，则返回句子 sentence 中该单词所对应的下标（下标从 1 开始）。如果 searchWord 是多个单词的前缀，则返回匹配的第一个单词的下标（最小下标）。如果 searchWord 不是任何单词的前缀，则返回 -1 。
 * 字符串 s 的 前缀 是 s 的任何前导连续子字符串。
 */
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  let position = -1; // 起点要注意，因为indexof 会从第二个参数所定位的位置开始，而不是跳过这里
  while ((position = sentence.indexOf(searchWord, position + 1)) !== -1) {
    if (position === 0 || sentence[position - 1] === " ") {
      break;
    }
  }
  if (position === -1) return position;
  let result = 1;
  for (let i = 0; i < position; i++) {
    if (sentence[i] === " ") result++;
  }
  return result;
};
/**
 * "hellohello hellohellohello"
 * "ell"
 * 超出时间限制
 */
/**
 * 执行用时：48 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：40.8 MB, 在所有 JavaScript 提交中击败了78.48%的用户
 */
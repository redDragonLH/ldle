/**
 * 1408. 数组中的字符串匹配
 *
 * 给你一个字符串数组 words ，数组中的每个字符串都可以看作是一个单词。请你按 任意 顺序返回 words 中是其他单词的子字符串的所有单词。
 * 如果你可以删除 words[j] 最左侧和/或最右侧的若干字符得到 word[i] ，那么字符串 words[i] 就是 words[j] 的一个子字符串。
 */
/**
 * 这直接嵌套循环看看是不是存在就可以了
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  let result = [];
  let len = words.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      i !== j &&
        words[i].includes(words[j]) &&
        !result.includes(words[j]) &&
        result.push(words[j]);
    }
  }
  return result;
};

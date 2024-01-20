/**
 * 2744. 最大字符串配对数目
 *
 * 给你一个下标从 0 开始的数组 words ，数组中包含 互不相同 的字符串。
 * 如果字符串 words[i] 与字符串 words[j] 满足以下条件，我们称它们可以匹配：
 *  * 字符串 words[i] 等于 words[j] 的反转字符串。
 *  * 0 <= i < j < words.length
 *
 * 请你返回数组 words 中的 最大 匹配数目。
 * 注意，每个字符串最多匹配一次。
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let reverseWords = words.map((e) => e.split("").reverse().join(""));
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word === "") continue;
    let index = reverseWords.indexOf(word);
    if (index === i) continue;
    if (index > -1) {
      result++;
      reverseWords[index] = "";
      words[index] = "";
    }
  }
  return result;
};
/**
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了67.16%的用户
 * 内存消耗：50.43 MB, 在所有 JavaScript 提交中击败了8.96%的用户
 */
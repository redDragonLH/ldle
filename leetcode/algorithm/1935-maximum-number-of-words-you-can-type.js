/**
 * 1935. 可以输入的最大单词数
 *
 * 键盘出现了一些故障，有些字母键无法正常工作。而键盘上所有其他键都能够正常工作。
 * 给你一个由若干单词组成的字符串 text ，单词间由单个空格组成（不含前导和尾随空格）；另有一个字符串 brokenLetters ，由所有已损坏的不同字母键组成，返回你可以使用此键盘完全输入的 text 中单词的数目。
 */

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const brokenSet = new Set(brokenLetters);
  const words = text.split(" ");
  let count = 0;

  for (const word of words) {
    let canType = true;
    for (const char of word) {
      if (brokenSet.has(char)) {
        canType = false;
        break;
      }
    }
    if (canType) count++;
  }
  return count;
};
/**
 * 执行用时：6 ms, 在所有 JavaScript 提交中击败了44.44%的用户
 * 内存消耗：57.76 MB, 在所有 JavaScript 提交中击败了7.41%的用户
 */

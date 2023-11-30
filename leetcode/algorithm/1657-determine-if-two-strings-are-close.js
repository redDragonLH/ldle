/**
 * 1657. 确定两个字符串是否接近
 *
 * 如果可以使用以下操作从一个字符串得到另一个字符串，则认为两个字符串 接近 ：
 *  * 操作 1：交换任意两个 现有 字符。
 *  *  * 例如，abcde -> aecdb
 *
 *  * 操作 2：将一个 现有 字符的每次出现转换为另一个 现有 字符，并对另一个字符执行相同的操作。
 *  *  * 例如，aacabb -> bbcbaa（所有 a 转化为 b ，而所有的 b 转换为 a ）
 *
 * 你可以根据需要对任意一个字符串多次使用这两种操作。
 * 给你两个字符串，word1 和 word2 。如果 word1 和 word2 接近 ，就返回 true ；否则，返回 false 。
 */

/**
 * 思路肯定不是真的去试,简单思路就是比较元素种类是否是一样的,然后判断数量是否能交换
 *
 * 但是交换的判断有点麻烦
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const word = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var closeStrings = function (word1, word2) {
  if (word1 === word2) return true;
  if (word1.length !== word2.length) return false;
  let word1Chat = new Array(26).fill(0);
  let word2Chat = new Array(26).fill(0);
  let len = word1.length;
  for (let i = 0; i < len; i++) {
    if (word1[i]) {
      word1Chat[word1[i].charCodeAt() - 97]++;
    }
    if (word2[i]) {
      word2Chat[word2[i].charCodeAt() - 97]++;
    }
  }
  for (let i = 0; i < 26; i++) {
    if (
      (word2Chat[i] > 0 && word1Chat[i] == 0) ||
      (word1Chat[i] > 0 && word2Chat[i] == 0)
    ) {
      return false;
    }
  }
  // 说白了就是数字必须得对的上
  word1Chat.sort();
  word2Chat.sort();
  return word1Chat.toString() == word2Chat.toString();
};
/**
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了84.16%的用户
 * 内存消耗：47.38 MB, 在所有 JavaScript 提交中击败了84.16%的用户
 */
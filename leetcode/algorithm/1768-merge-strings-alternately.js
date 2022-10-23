/**
 * 1768. 交替合并字符串
 *
 * 给你两个字符串 word1 和 word2 。请你从 word1 开始，通过交替添加字母来合并字符串。如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。
 *
 * 返回 合并后的字符串 。
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let len = word1.length > word2.length ? word1.length : word2.length;
  let i = 0;
  let result = "";
  while (i < len) {
    if (word1[i]) result += word1[i];
    if (word2[i]) result += word2[i];
    i++;
  }
  return result;
};
/**
 * 还可以优化，在超出最短字符串之后的剩余字符串不需要遍历，可以一次性插后边
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了45.29%的用户
 * 内存消耗：41.3 MB, 在所有 JavaScript 提交中击败了65.29%的用户
 */
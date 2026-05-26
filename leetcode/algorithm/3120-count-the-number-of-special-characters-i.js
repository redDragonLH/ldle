/**
 * 3120. 统计特殊字母的数量 I
 *
 * 给你一个字符串 word。如果 word 中同时存在某个字母的小写形式和大写形式，则称这个字母为 特殊字母 。
 * 返回 word 中 特殊字母 的数量。
 */

/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  let set = new Set();
  for (let i = 0; i < word.length; i++) {
    set.add(word[i]);
  }
  let isUsed = new Set();
  let count = 0;
  for (let char of set) {
    if (isUsed.has(char)) {
      continue;
    }
    if (set.has(char.toLowerCase()) && set.has(char.toUpperCase())) {
      count++;
    }
    isUsed.add(char.toLowerCase());
    isUsed.add(char.toUpperCase());
  }
  return count;
};
/**
 * 执行用时：6 ms, 在所有 JavaScript 提交中击败了37.50%的用户
 * 内存消耗：56.63 MB, 在所有 JavaScript 提交中击败了25.00%的用户
 */
/**
 * 3121. 统计特殊字母的数量 II
 *
 * 给你一个字符串 word。如果 word 中同时出现某个字母 c 的小写形式和大写形式，并且 每个 小写形式的 c 都出现在第一个大写形式的 c 之前，则称字母 c 是一个 特殊字母 。
 * 返回 word 中 特殊字母 的数量。
 */
/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  let count = 0;

  for (let i = 0; i < 26; i++) {
    let lower = String.fromCharCode(97 + i);
    let upper = String.fromCharCode(65 + i);
    let lastIndex = word.lastIndexOf(lower);
    let firstIndex = word.indexOf(upper);
    if (lastIndex !== -1 && firstIndex !== -1) {
      if (lastIndex < firstIndex) {
        count++;
      }
    }
  }

  return count;
};
/**
 * 执行用时 :13 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :62.20 MB, 在所有 JavaScript 提交中击败了92.31%的用户
 */
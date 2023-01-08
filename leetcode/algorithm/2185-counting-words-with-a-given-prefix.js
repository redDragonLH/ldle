/**
 * 2185. 统计包含给定前缀的字符串
 *
 * 给你一个字符串数组 words 和一个字符串 pref 。
 *
 * 返回 words 中以 pref 作为 前缀 的字符串的数目。
 *
 * 字符串 s 的 前缀 就是  s 的任一前导连续字符串。
 */
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let result = 0;
  for (const item of words) {
    if (item.indexOf(pref) === 0) result++;
  }
  return result;
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了52.27%的用户
 * 内存消耗：41.8 MB, 在所有 JavaScript 提交中击败了51.14%的用户
 */

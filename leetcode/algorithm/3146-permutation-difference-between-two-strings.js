/**
 * 3146. 两个字符串的排列差
 *
 * 给你两个字符串 s 和 t，每个字符串中的字符都不重复，且 t 是 s 的一个排列。
 * 排列差 定义为 s 和 t 中每个字符在两个字符串中位置的绝对差值之和。
 * 返回 s 和 t 之间的 排列差 。
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  let len = s.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    result += Math.abs(i - t.indexOf(s[i]));
  }
  return result;
};
/**
 * 执行用时：79 ms, 在所有 JavaScript 提交中击败了36.84%的用户
 * 内存消耗：50.96 MB, 在所有 JavaScript 提交中击败了90.53%的用户
 */

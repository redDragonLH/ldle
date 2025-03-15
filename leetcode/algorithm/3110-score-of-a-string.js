/**
 * 3110. 字符串的分数
 *
 * 给你一个字符串 s 。一个字符串的 分数 定义为相邻字符 ASCII 码差值绝对值的和。
 * 请你返回 s 的 分数 。
 */
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let score = 0;
  for (let i = 1; i < s.length; i++) {
    score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
  }
  return score;
};
/**
 * 执行用时：2 ms, 在所有 JavaScript 提交中击败了69.81%的用户
 * 内存消耗：54.58 MB, 在所有 JavaScript 提交中击败了26.41%的用户
 */
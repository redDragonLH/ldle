/**
 * 1784. 检查二进制字符串字段
 *
 * 给你一个二进制字符串 s ，该字符串 不含前导零 。
 *
 * 如果 s 包含 零个或一个由连续的 '1' 组成的字段 ，返回 true​​​ 。否则，返回 false 。
 *
 * 如果 s 中 由连续若干个 '1' 组成的字段 数量不超过 1，返回 true​​​ 。否则，返回 false 。
 */

/**
 * 官方题解
 * 这语文，我吐了
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  return s.indexOf("01") === -1;
};

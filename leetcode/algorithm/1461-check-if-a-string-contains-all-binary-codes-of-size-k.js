/**
 * 1461. 检查一个字符串是否包含所有长度为 K 的二进制子串
 *
 * 给你一个二进制字符串 s 和一个整数 k 。如果所有长度为 k 的二进制字符串都是 s 的子串，请返回 true ，否则请返回 false 。
 *
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  let set = new Set();
  for (let i = 0; i <= s.length - k; i++) {
    set.add(s.substring(i, i + k));
  }
  return set.size === Math.pow(2, k);
};
/**
 * 执行用时：281 ms, 在所有 JavaScript 提交中击败了22.22%的用户
 * 内存消耗：84.02 MB, 在所有 JavaScript 提交中击败了64.44%的用户
 */

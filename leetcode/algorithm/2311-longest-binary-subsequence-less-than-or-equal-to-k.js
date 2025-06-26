/**
 * 2311. 小于等于 K 的最长二进制子序列
 *
 * 给你一个二进制字符串 s 和一个正整数 k 。
 * 请你返回 s 的 最长 子序列的长度，且该子序列对应的 二进制 数字小于等于 k 。
 * 注意：
 *  * 子序列可以有 前导 0 。
 *  * 空字符串视为 0 。
 *  * 子序列 是指从一个字符串中删除零个或者多个字符后，不改变顺序得到的剩余字符序列。
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function (s, k) {
  let sm = 0;
  let cnt = 0;
  let bits = Math.log2(k) + 1;

  for (let i = 0; i < s.length; i++) {
    const ch = s[s.length - 1 - i];
    if (ch === "1") {
      // 如果当前位是 1，且 sm + 2^i <= k，则可以将该位加入子序列
      if (i < bits && sm + (1 << i) <= k) {
        sm += 1 << i;
        cnt++;
      }
    } else {
      // 如果当前位是 0，则可以将该位加入子序列
      cnt++;
    }
  }
  return cnt;
};
/**
 *  执行用时：2 ms, 在所有 JavaScript 提交中击败了83.33%的用户
 *  内存消耗：54.42 MB, 在所有 JavaScript 提交中 击败了66.67%的用户
 */

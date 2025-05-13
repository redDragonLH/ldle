/**
 * 3335. 字符串转换后的长度 I
 *
 * 给你一个字符串 s 和一个整数 t，表示要执行的 转换 次数。每次 转换 需要根据以下规则替换字符串 s 中的每个字符：
 *  * 如果字符是 'z'，则将其替换为字符串 "ab"。
 *  * 否则，将其替换为字母表中的下一个字符。例如，'a' 替换为 'b'，'b' 替换为 'c'，依此类推。
 *  * 返回 恰好 执行 t 次转换后得到的字符串的 长度。
 * 由于答案可能非常大，返回其对 109 + 7 取余的结果。
 */
/**
 * 
 * 
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function (s, t) {
  const MOD = 1000000007;
  let cnt = new Array(26).fill(0);
  // 统计每个字母出现的次数
  // a = 0, b = 1, c = 2, ..., z = 25
  for (const ch of s) {
    cnt[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
    // cnt[i] 表示字母 i 出现的次数
    // 0 <= i < 26
  for (let round = 0; round < t; round++) {
    let nxt = new Array(26).fill(0);
    nxt[0] = cnt[25];
    nxt[1] = (cnt[25] + cnt[0]) % MOD;

    for (let i = 2; i < 26; i++) {
      nxt[i] = cnt[i - 1];
    }
    cnt = nxt;
  }
  let ans = 0;
  for (let i = 0; i < 26; i++) {
    ans = (ans + cnt[i]) % MOD;
  }
  return ans;
};
/**
 * 执行用时：249 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：64.45 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */
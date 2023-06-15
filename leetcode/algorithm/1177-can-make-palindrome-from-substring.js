/**
 * 1177. 构建回文串检测
 *
 * 给你一个字符串 s，请你对 s 的子串进行检测。
 *
 * 每次检测，待检子串都可以表示为 queries[i] = [left, right, k]。我们可以 重新排列 子串 s[left], ..., s[right]，并从中选择 最多 k 项替换成任何小写英文字母。
 *
 * 如果在上述检测过程中，子串可以变成回文形式的字符串，那么检测结果为 true，否则结果为 false。
 *
 * 返回答案数组 answer[]，其中 answer[i] 是第 i 个待检子串 queries[i] 的检测结果。
 *
 * 注意：在替换时，子串中的每个字母都必须作为 独立的 项进行计数，也就是说，如果 s[left..right] = "aaa" 且 k = 2，我们只能替换其中的两个字母。（另外，任何检测都不会修改原始字符串 s，可以认为每次检测都是独立的）
 */
/**
 * 官方题解 前缀和
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {
  const n = s.length;
  const count = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    count[i + 1] = count[i] ^ (1 << (s[i].charCodeAt(0) - "a".charCodeAt(0)));
  }
  const res = [];
  for (const query of queries) {
    const l = query[0],
      r = query[1],
      k = query[2];
    let bits = 0,
      x = count[r + 1] ^ count[l];
    while (x > 0) {
      x &= x - 1;
      bits++;
    }
    res.push(bits <= k * 2 + 1);
  }
  return res;
};

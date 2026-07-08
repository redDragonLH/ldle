/**
 * 3756. 连接非零数字并乘以其数字和 II
 *
 * 给你一个长度为 m 的字符串 s，其中仅包含数字。另给你一个二维整数数组 queries，其中 queries[i] = [li, ri]。
 * 对于每个 queries[i]，提取 子串 s[li..ri]，然后执行以下操作：
 *  * 将子串中所有 非零数字 按照原始顺序连接起来，形成一个新的整数 x。如果没有非零数字，则 x = 0。
 *  * 令 sum 为 x 中所有数字的 数字和 。答案为 x * sum。
 * 返回一个整数数组 answer，其中 answer[i] 是第 i 个查询的答案。
 * 由于答案可能非常大，请返回其对 109 + 7 取余数的结果。
 * 子串 是字符串中的一个连续、非空 字符序列。
 */
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function (s, queries) {
  const mod = 1e9 + 7;
  const answer = [];
  for (const range of queries) {
    const [l, r] = range;
    for (let i = l; i <= r; i++) {
      if (s[i] !== "0") {
        let x = "";
        let sum = 0;
        for (let j = i; j <= r; j++) {
          if (s[j] !== "0") {
            x += s[j];
            sum += Number(s[j]);
          }
        }
        answer.push((Number(x) * sum) % mod);
        break;
      }
      if (i === r) {
        answer.push(0);
      }
    }
  }
  return answer;
};

const MOD = 1000000007;
const MAX_N = 100001;
const pow10 = new Array(MAX_N);

pow10[0] = 1n;
for (let i = 1; i < MAX_N; ++i) {
  pow10[i] = (pow10[i - 1] * 10n) % BigInt(MOD);
}

var sumAndMultiply = function (s, queries) {
  const n = s.length;
  const sum = new Array(n + 1).fill(0);
  const x = new Array(n + 1).fill(0n);
  const cnt = new Array(n + 1).fill(0);
  for (let i = 0; i < n; ++i) {
    const d = s.charCodeAt(i) - 48;
    sum[i + 1] = sum[i] + d;
    x[i + 1] = d > 0 ? (x[i] * 10n + BigInt(d)) % BigInt(MOD) : x[i];
    cnt[i + 1] = cnt[i] + (d > 0 ? 1 : 0);
  }
  const m = queries.length;
  const res = new Array(m);
  for (let i = 0; i < m; ++i) {
    const l = queries[i][0];
    const r = queries[i][1] + 1;
    const length = cnt[r] - cnt[l];
    const val_x =
      (x[r] - ((x[l] * pow10[length]) % BigInt(MOD)) + BigInt(MOD)) %
      BigInt(MOD);
    const val_sum = BigInt(sum[r] - sum[l]);
    res[i] = Number((val_x * val_sum) % BigInt(MOD));
  }
  return res;
};

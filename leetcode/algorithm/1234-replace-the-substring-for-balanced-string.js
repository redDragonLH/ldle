/**
 * 1234. 替换子串得到平衡字符串
 *
 * 有一个只含有 'Q', 'W', 'E', 'R' 四种字符，且长度为 n 的字符串。
 *
 * 假如在该字符串中，这四个字符都恰好出现 n/4 次，那么它就是一个「平衡字符串」。
 *
 *
 * 给你一个这样的字符串 s，请通过「替换一个子串」的方式，使原字符串 s 变成一个「平衡字符串」。
 *
 * 你可以用和「待替换子串」长度相同的 任何 其他字符串来完成替换。
 *
 * 请返回待替换子串的最小可能长度。
 *
 * 如果原字符串自身就是一个平衡字符串，则返回 0。
 */
/**
 *
 * 先定位到多的和少的位置,
 * 找到这几个元素最近的位置就行吧
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
  const cnt = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    cnt[idx(c)]++;
  }

  const partial = s.length / 4;
  let res = s.length;

  if (check(cnt, partial)) {
    return 0;
  }
  for (let l = 0, r = 0; l < s.length; l++) {
    while (r < s.length && !check(cnt, partial)) {
      cnt[idx(s[r])]--;
      r++;
    }
    if (!check(cnt, partial)) {
      break;
    }
    res = Math.min(res, r - l);
    cnt[idx(s[l])]++;
  }
  return res;
};

const idx = (c) => {
  return c.charCodeAt() - "A".charCodeAt();
};

const check = (cnt, partial) => {
  if (
    cnt[idx("Q")] > partial ||
    cnt[idx("W")] > partial ||
    cnt[idx("E")] > partial ||
    cnt[idx("R")] > partial
  ) {
    return false;
  }
  return true;
};

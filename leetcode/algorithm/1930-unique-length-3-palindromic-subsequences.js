/**
 * 1930. 长度为 3 的不同回文子序列
 *
 * 给你一个字符串 s ，返回 s 中 长度为 3 的不同回文子序列 的个数。
 * 即便存在多种方法来构建相同的子序列，但相同的子序列只计数一次。
 * 回文 是正着读和反着读一样的字符串。
 * 子序列 是由原字符串删除其中部分字符（也可以不删除）且不改变剩余字符之间相对顺序形成的一个新字符串。
 *  * 例如，"ace" 是 "abcde" 的一个子序列。
 */
/**
 * 跳出字符串的禁锢，从更大的视野来看问题。
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  const n = s.length;
  let res = 0;
  // 枚举两侧字符
  for (let ch = "a".charCodeAt(0); ch <= "z".charCodeAt(0); ch++) {
    const c = String.fromCharCode(ch);
    let l = 0,
      r = n - 1;
    // 寻找该字符第一次出现的下标
    while (l < n && s[l] !== c) {
      ++l;
    }
    // 寻找该字符最后一次出现的下标
    while (r >= 0 && s[r] !== c) {
      --r;
    }
    if (r - l < 2) {
      // 该字符未出现，或两下标中间的子串不存在
      continue;
    }
    // 利用哈希集合统计 s[l+1..r-1] 子串的字符总数，并更新答案
    const charset = new Set();
    for (let k = l + 1; k < r; k++) {
      charset.add(s[k]);
    }
    res += charset.size;
  }
  return res;
};

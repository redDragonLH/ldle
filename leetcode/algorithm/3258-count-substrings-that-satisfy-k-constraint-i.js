/**
 * 3258. 统计满足 K 约束的子字符串数量 I
 *
 * 给你一个 二进制 字符串 s 和一个整数 k。
 * 如果一个 二进制字符串 满足以下任一条件，则认为该字符串满足 k 约束：
 *  * 字符串中 0 的数量最多为 k。
 *  * 字符串中 1 的数量最多为 k。
 * 返回一个整数，表示 s 的所有满足 k 约束 的子字符串的数量。
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
  const n = s.length;
  let res = 0;
  for (let i = 0; i < n; ++i) {
    const count = [0, 0];
    for (let j = i; j < n; ++j) {
      count[parseInt(s[j], 10)]++;
      if (count[0] > k && count[1] > k) {
        break;
      }
      res++;
    }
  }
  return res;
};

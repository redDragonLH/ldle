/**
 * 791. 自定义字符串排序
 *
 * 给定两个字符串 order 和 s 。order 的所有单词都是 唯一 的，并且以前按照一些自定义的顺序排序。
 *
 * 对 s 的字符进行置换，使其与排序的 order 相匹配。更具体地说，如果在 order 中的字符 x 出现字符 y 之前，那么在排列后的字符串中， x 也应该出现在 y 之前。
 *
 * 返回 满足这个性质的 s 的任意排列 。
 */

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const val = new Array(26).fill(0);
  for (let i = 0; i < order.length; ++i) {
    val[order[i].charCodeAt() - "a".charCodeAt()] = i + 1;
  }
  const arr = new Array(s.length).fill(0).map((_, i) => s[i]);
  // 借用原生方法的逻辑框架
  arr.sort(
    (c0, c1) =>
      val[c0.charCodeAt() - "a".charCodeAt()] -
      val[c1.charCodeAt() - "a".charCodeAt()]
  );
  let ans = "";
  for (let i = 0; i < s.length; ++i) {
    ans += arr[i];
  }
  return ans;
};

/**
 * 1415. 长度为 n 的开心字符串中字典序第 k 小的字符串
 *
 * 一个 「开心字符串」定义为：
 *  * 仅包含小写字母 ['a', 'b', 'c'].
 *  * 对所有在 1 到 s.length - 1 之间的 i ，满足 s[i] != s[i + 1] （字符串的下标从 1 开始）。
 * 比方说，字符串 "abc"，"ac"，"b" 和 "abcbabcbcb" 都是开心字符串，但是 "aa"，"baa" 和 "ababbc" 都不是开心字符串。
 * 给你两个整数 n 和 k ，你需要将长度为 n 的所有开心字符串按字典序排序。
 * 请你返回排序后的第 k 个开心字符串，如果长度为 n 的开心字符串少于 k 个，那么请你返回 空字符串 。
 */

/**
 * 可以遍历生成所有长度为 n 的开心字符串，存储在数组中，然后返回第 k 个元素。
 * 但是这种方法的时间复杂度较高，尤其当 n 较大时，生成的开心字符串数量会迅速增加。
 * 
 * 数学法
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  const chs = ["a", "b", "c"];
  let res = [];
  if (k > 3 * (1 << (n - 1))) {
    return res.join("");
  }
  for (let i = 0; i < n; i++) {
    let count = 1 << (n - i - 1);
    for (let c of chs) {
      if (res.length > 0 && res[res.length - 1] === c) {
        continue;
      }
      if (k <= count) {
        res.push(c);
        break;
      }
      k -= count;
    }
  }
  return res.join("");
};

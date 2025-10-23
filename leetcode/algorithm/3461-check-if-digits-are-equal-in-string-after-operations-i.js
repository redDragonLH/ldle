/**
 * 3461. 判断操作后字符串中的数字是否相等 I
 *
 * 给你一个由数字组成的字符串 s 。重复执行以下操作，直到字符串恰好包含 两个 数字：
 *  * 从第一个数字开始，对于 s 中的每一对连续数字，计算这两个数字的和 模 10。
 *  * 用计算得到的新数字依次替换 s 的每一个字符，并保持原本的顺序。
 * 如果 s 最后剩下的两个数字 相同 ，返回 true 。否则，返回 false。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
  while (s.length > 2) {
    let newS = "";
    for (let i = 0; i < s.length - 1; i++) {
      newS += (parseInt(s[i]) + parseInt(s[i + 1])) % 10;
    }
    s = newS;
  }
  return s[0] === s[1];
};
/**
 * 执行用时 :12 ms, 在所有 JavaScript 提交中击败了61.54%的用户
 * 内存消耗 :60.24 MB, 在所有 JavaScript 提交中击败了30.77%的用户
 */
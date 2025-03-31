/**
 * 2278. 字母在字符串中的百分比
 *
 * 给你一个字符串 s 和一个字符 letter ，返回在 s 中等于 letter 字符所占的 百分比 ，向下取整到最接近的百分比。
 */
/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === letter) {
      count++;
    }
  }
  return Math.floor((count / s.length) * 100);
};
/**
 * 执行用时 : 0 ms, 在所有 JavaScript 提交中击败了 100.00% 的用户
 * 内存消耗 : 53.91 MB, 在所有 JavaScript 提交中击败了 38.10% 的用户
 */
/**
 * 2734. 执行子串操作后的字典序最小字符串
 *
 * 给你一个仅由小写英文字母组成的字符串 s 。在一步操作中，你可以完成以下行为：
 *  * 选择 s 的任一非空子字符串，可能是整个字符串，接着将字符串中的每一个字符替换为英文字母表中的前一个字符。例如，'b' 用 'a' 替换，'a' 用 'z' 替换。
 * 返回执行上述操作 恰好一次 后可以获得的 字典序最小 的字符串。
 * 子字符串 是字符串中的一个连续字符序列。
 * 现有长度相同的两个字符串 x 和 字符串 y ，在满足 x[i] != y[i] 的第一个位置 i 上，如果  x[i] 在字母表中先于 y[i] 出现，则认为字符串 x 比字符串 y 字典序更小 。
 */
/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function (s) {
  let len = s.length;
  let res = "";
  let isOver = false;
  let start = -1;
  for (let i = 0; i < len; i++) {
    if (s[i] !== "a") {
      start = i;
      break;
    }
    res += s[i];
  }
  if (start === -1) {
    return res.replace(/a$/, "z");
  }
  for (let i = start; i < len; i++) {
    if (s[i] !== "a" && !isOver) {
      res += String.fromCharCode(s[i].charCodeAt() - 1);
    } else {
      res += s[i];

      isOver = true;
    }
  }
  return res;
};
/**
 * 执行用时：268 ms, 在所有 JavaScript 提交中击败了44.44%的用户
 * 内存消耗：83.37 MB, 在所有 JavaScript 提交中击败了11.11%的用户
 */

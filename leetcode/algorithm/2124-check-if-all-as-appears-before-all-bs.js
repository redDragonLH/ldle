/**
 * 2124. 检查是否所有 A 都在 B 之前
 * 给你一个 仅 由字符 'a' 和 'b' 组成的字符串  s 。如果字符串中 每个 'a' 都出现在 每个 'b' 之前，返回 true ；否则，返回 false 。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  if (s.length === 0) return true;
  let foundB = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "b") {
      foundB = true;
    } else if (foundB && s[i] === "a") {
      return false;
    }
  }
  return true;
};
/**
 * 执行用时：1 ms, 在所有 JavaScript 提交中击败了37.50%的用户
 * 内存消耗：56.94 MB, 在所有 JavaScript 提交中击败了12.50%的用户
 */

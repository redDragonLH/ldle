/**
 * 3517. 最小回文排列 I
 *
 * 给你一个 回文 字符串 s。
 * 返回 s 的按字典序排列的 最小 回文排列。
 * 如果一个字符串从前往后和从后往前读都相同，那么这个字符串是一个 回文 字符串。
 * 排列 是字符串中所有字符的重排。
 *
 * 如果字符串 a 按字典序小于字符串 b，则表示在第一个不同的位置，a 中的字符比 b 中的对应字符在字母表中更靠前。
 * 如果在前 min(a.length, b.length) 个字符中没有区别，则较短的字符串按字典序更小。
 */
/**
 * 那肯定是成对出现,顶多一个奇数字符
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function (s) {
  if (s.length === 1) return s;
  let arr = s.split("").sort();
  let left = "";
  let mid = "";
  let right = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      left += arr[i];
      right = arr[i] + right;
      i++;
    } else {
      mid = arr[i];
    }
  }
  return left + mid + right;
};
/**
 * 执行用时：853 ms, 在所有 JavaScript 提交中击败了-%的用户
 * 内存消耗：82.86 MB, 在所有 JavaScript 提交中击败了-%的用户
 */
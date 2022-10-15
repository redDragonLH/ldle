/**
 * 面试题 01.02. 判定是否互为字符重排
 *
 * 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
 */

/**
 * 判断长度以及字符种类数量都一样
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  if (s1.length !== s2.length) return false;
  let len = s1.length;
  let map = new Array(26).fill(0);
  while (len--) {
    let aCode = "a".charCodeAt();
    map[s1[len].charCodeAt() - aCode]++;
    map[s2[len].charCodeAt() - aCode]--;
  }
  for (const item of map) {
    if (item !== 0) return false;
  }
  return true;
};
/**
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了58.80%的用户
 * 内存消耗：40.9 MB, 在所有 JavaScript 提交中击败了53.40%的用户
 */
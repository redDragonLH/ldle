/**
 * 524. 通过删除字母匹配到字典里最长单词
 *
 * 给你一个字符串 s 和一个字符串数组 dictionary 作为字典，找出并返回字典中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。
 *
 * 如果答案不止一个，返回长度最长且字典序最小的字符串。如果答案不存在，则返回空字符串。
 */

/**
 * 核心问题是确认字典内元素是否为字符串的子串
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  let result = "";
  let Slen = s.length;
  dictionary.forEach((e) => {
    let len = e.length;
    let e_pointer = 0;
    let s_pointer = 0;
    while (s_pointer !== Slen && e_pointer !== len) {
      if (e[e_pointer] === s[s_pointer]) {
        e_pointer++;
        s_pointer++;
      } else {
        s_pointer++;
      }
    }
    if (e_pointer === len && result.length <= len) {
      if (result.length === len) {
        result = [result, e].sort()[0];
      } else {
        result = e;
      }
    }
  });
  return result;
};

/**
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了91.69%的用户
 * 内存消耗：43.2 MB, 在所有 JavaScript 提交中击败了39.53%的用户
 */
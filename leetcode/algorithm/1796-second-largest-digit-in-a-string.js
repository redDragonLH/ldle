/**
 * 1796. 字符串中第二大的数字
 *
 * 给你一个混合字符串 s ，请你返回 s 中 第二大 的数字，如果不存在第二大的数字，请你返回 -1 。
 *
 * 混合字符串 由小写英文字母和数字组成。
 */
/**
 * 先能辨别数字，然后就遍历判断是否数字然后查找
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let len = s.length;
  let max = -1,
    second = -1;
  for (let i = 0; i < len; i++) {
    let code = s[i].charCodeAt();
    if (isNumber(code)) {
      if (code > max) {
        second = max;
        max = code;
        continue;
      }
      if (code < max && code > second) {
        second = code;
      }
    }
  }
  if (second === -1) return second;
  return String.fromCharCode(second);
};

let isNumber = (code) => {
  return code >= 48 && code <= 57;
};
/**
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了42.74%的用户
 * 内存消耗：41.2 MB, 在所有 JavaScript 提交中击败了100%的用户
 */
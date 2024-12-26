/**
 * 3083. 字符串及其反转中是否存在同一子字符串
 *
 * 给你一个字符串 s ，请你判断字符串 s 是否存在一个长度为 2 的子字符串，在其反转后的字符串中也出现。
 * 如果存在这样的子字符串，返回 true；如果不存在，返回 false 。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
  for (let i = 0; i < s.length - 1; i++) {
    let subStr = s.slice(i, i + 2);
    if (s.includes(subStr.split("").reverse().join(""))) {
      return true;
    }
  }
  return false;
};
/**
 * 反向思路
 */
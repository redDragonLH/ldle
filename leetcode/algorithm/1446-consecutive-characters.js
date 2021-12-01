/**
 * 1446. 连续字符
 *
 * 给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。
 *
 * 请你返回字符串的能量。
 */

/**
 * 暴力
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let result = 1;
  let power = "";
  let powerLen = 0;
  for (let i = 0; i < s.length; i++) {
    if (power === s[i]) {
      powerLen++;
      result = Math.max(result, powerLen);
    } else {
      power = s[i];
      powerLen = 1;
    }
  }
  return result;
};
/**
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了49.66%的用户
 * 内存消耗：39.5 MB, 在所有 JavaScript 提交中击败了51.02%的用户
 */
/**
 * 2283. 判断一个数的数字计数是否等于数位的值
 *
 * 给你一个下标从 0 开始长度为 n 的字符串 num ，它只包含数字。
 * 如果对于 每个 0 <= i < n 的下标 i ，都满足数位 i 在 num 中出现了 num[i]次，那么请你返回 true ，否则返回 false 。
 */

/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const h = new Map();
  const n = num.length;
  for (let i = 0; i < n; i++) {
    const digit = num[i].charCodeAt() - "0".charCodeAt();
    h.set(digit, (h.get(digit) || 0) + 1);
  }
  for (let i = 0; i < n; i++) {
    const v = num[i].charCodeAt() - "0".charCodeAt();
    if ((h.get(i) || 0) !== v) {
      return false;
    }
  }
  return true;
};
/**
 * 题目绕的我想吐~~~
 */
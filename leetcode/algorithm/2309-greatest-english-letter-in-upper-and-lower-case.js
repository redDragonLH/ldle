/**
 * 2309. 兼具大小写的最好英文字母
 *
 * 给你一个由英文字母组成的字符串 s ，请你找出并返回 s 中的 最好 英文字母。返回的字母必须为大写形式。如果不存在满足条件的字母，则返回一个空字符串。
 *
 * 最好 英文字母的大写和小写形式必须 都 在 s 中出现。
 *
 * 英文字母 b 比另一个英文字母 a 更好 的前提是：英文字母表中，b 在 a 之 后 出现。
 */

/**
 * 也就是同时存在大小写的字母
 *
 *一般就是code 等于某个数
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let mapping = new Array(100);
  let len = s.length;
  let spacing = 32;
  let aCode = 97,
    Acode = 65;
  let result = 0;
  for (let i = 0; i < len; i++) {
    let code = s[i].charCodeAt();
    if (code >= aCode) {
      if (mapping[code - spacing - Acode]) {
        result = Math.max(code - spacing, result);
      } else {
        mapping[code - Acode] = 1;
      }
    } else {
      if (mapping[code + spacing - Acode]) {
        result = Math.max(code, result);
      } else {
        mapping[code - Acode] = 1;
      }
    }
  }
  return result ? String.fromCharCode(result) : "";
};
/**
 * 优化空间还挺大，数据结构应该够简单了，那就是处理逻辑还能优化
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了55.56%的用户
 * 内存消耗：42.5 MB, 在所有 JavaScript 提交中击败了68.52%的用户
 */

/**
 * 2351. 第一个出现两次的字母
 *
 * 给你一个由小写英文字母组成的字符串 s ，请你找出并返回第一个出现 两次 的字母。
 * 注意：
 *  * 如果 a 的 第二次 出现比 b 的 第二次 出现在字符串中的位置更靠前，则认为字母 a 在字母 b 之前出现两次。
 *  * s 包含至少一个出现两次的字母。
 */
/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  let mapping = new Map();
  let sLen = s.length;
  for (let i = 0; i < sLen; i++) {
    if (mapping.has(s[i])) return s[i];
    mapping.set(s[i], true);
  }
};
/**
 * 执行用时：56 ms, 在所有 JavaScript 提交中击败了84.55%的用户
 * 内存消耗：41.3 MB, 在所有 JavaScript 提交中击败了9.9%的用户
 */

/**
 * 3136. 有效单词
 *
 * 有效单词 需要满足以下几个条件：
 *  * 至少 包含 3 个字符。
 *  * 由数字 0-9 和英文大小写字母组成。（不必包含所有这类字符。）
 *  * 至少 包含一个 元音字母 。
 *  * 至少 包含一个 辅音字母 。
 *  * 给你一个字符串 word 。如果 word 是一个有效单词，则返回 true ，否则返回 false 。
 * 注意：
 *  * 'a'、'e'、'i'、'o'、'u' 及其大写形式都属于 元音字母 。
 *  * 英文中的 辅音字母 是指那些除元音字母之外的字母。
 */
/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
  if (word.length < 3) return false;
  if (!/^[a-zA-Z0-9]+$/.test(word)) return false;

  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let hasVowel = false,
    hasConsonant = false;

  for (const ch of word) {
    if (/[a-zA-Z]/.test(ch)) {
      if (vowels.has(ch)) {
        hasVowel = true;
      } else {
        hasConsonant = true;
      }
    }
    if (hasVowel && hasConsonant) break;
  }

  return hasVowel && hasConsonant;
};
/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：55.85 MB, 在所有 JavaScript 提交中击败了56.25%的用户
 */

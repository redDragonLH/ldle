/**
 * 3305. 元音辅音字符串计数 I
 *
 * 给你一个字符串 word 和一个 非负 整数 k。
 * 返回 word 的 子字符串 中，每个元音字母（'a'、'e'、'i'、'o'、'u'）至少 出现一次，并且 恰好 包含 k 个辅音字母的子字符串的总数。
 */

/**
 * 滑动窗口?
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const count = (m) => {
    let n = word.length,
      consonants = 0,
      res = 0;
    let occur = new Map();
    for (let i = 0, j = 0; i < n; i++) {
      while (j < n && (consonants < m || occur.size < 5)) {
        let ch = word[j];
        if (vowels.has(ch)) {
          occur.set(ch, (occur.get(ch) || 0) + 1);
        } else {
          consonants++;
        }
        j++;
      }
      if (consonants >= m && occur.size === 5) {
        res += n - j + 1;
      }
      let left = word[i];
      if (vowels.has(left)) {
        occur.set(left, occur.get(left) - 1);
        if (occur.get(left) === 0) {
          occur.delete(left);
        }
      } else {
        consonants--;
      }
    }
    return res;
  };
  return count(k) - count(k + 1);
};

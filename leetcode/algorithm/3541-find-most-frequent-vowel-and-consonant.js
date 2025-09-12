/**
 * 3541. 找到频率最高的元音和辅音
 *
 * 给你一个由小写英文字母（'a' 到 'z'）组成的字符串 s。你的任务是找出出现频率 最高 的元音（'a'、'e'、'i'、'o'、'u' 中的一个）和出现频率最高的辅音（除元音以外的所有字母），并返回这两个频率之和。
 * 注意：如果有多个元音或辅音具有相同的最高频率，可以任选其中一个。如果字符串中没有元音或没有辅音，则其频率视为 0。
 * 一个字母 x 的 频率 是它在字符串中出现的次数。
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const freq = {};
  for (const ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let maxVowel = 0,
    maxConsonant = 0;
  for (const [ch, count] of Object.entries(freq)) {
    if (vowels.has(ch)) {
      if (count > maxVowel) maxVowel = count;
    } else {
      if (count > maxConsonant) maxConsonant = count;
    }
  }
  return maxVowel + maxConsonant;
};
/**
 * 执行用时：14 ms, 在所有 JavaScript 提交中击败了5.56%的用户
 * 内存消耗：59.22 MB, 在所有 JavaScript 提交中击败了5.55%的用户
 */
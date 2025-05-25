/**
 * 2131. 连接两字母单词得到的最长回文串
 *
 * 给你一个字符串数组 words 。words 中每个元素都是一个包含 两个 小写英文字母的单词。
 * 请你从 words 中选择一些元素并按 任意顺序 连接它们，并得到一个 尽可能长的回文串 。每个元素 至多 只能使用一次。
 * 请你返回你能得到的最长回文串的 长度 。如果没办法得到任何一个回文串，请你返回 0 。
 * 回文串 指的是从前往后和从后往前读一样的字符串。
 */
/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  const freq = new Map();
  for (const word of words) {
    freq.set(word, (freq.get(word) || 0) + 1);
  }
  let res = 0;
  let mid = false;
  for (const [word, cnt] of freq.entries()) {
    // 如果 word 是回文的
    // 例如 "aa" 或 "bb"，则可以使用它们的数量的一半来构建回文串
    const rev = word[1] + word[0];
    if (word === rev) {
      if (cnt % 2 === 1) {
        mid = true;
      }
      res += 2 * (Math.floor(cnt / 2) * 2);
    } else if (word > rev) {
        // 如果 word 不是回文的，且 word > rev，说明已经处理过了
      res += 4 * Math.min(freq.get(word) || 0, freq.get(rev) || 0);
    }
  }
  if (mid) {
    // 如果有回文的单词可以作为中间部分，则增加 2
    res += 2;
  }
  return res;
};

/**
 * 执行用时 : 36 ms, 在所有 JavaScript 提交中击败了 42.86% 的用户
 * 内存消耗 : 69.91 MB, 在所有 JavaScript 提交中击败了 28.57% 的用户
 */
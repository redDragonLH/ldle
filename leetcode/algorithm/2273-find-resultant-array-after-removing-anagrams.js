/**
 * 2273. 移除字母异位词后的结果数组
 *
 * 给你一个下标从 0 开始的字符串 words ，其中 words[i] 由小写英文字符组成。
 * 在一步操作中，需要选出任一下标 i ，从 words 中 删除 words[i] 。其中下标 i 需要同时满足下述两个条件：
 * 1. 0 < i < words.length
 * 2. words[i - 1] 和 words[i] 是 字母异位词 。
 * 只要可以选出满足条件的下标，就一直执行这个操作。
 * 在执行所有操作后，返回 words 。可以证明，按任意顺序为每步操作选择下标都会得到相同的结果。
 * 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。例如，"dacb" 是 "abdc" 的一个字母异位词。
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  let res = [words[0]]; // 结果数组
  let n = words.length;

  for (let i = 1; i < n; i++) {
    if (!compare(words[i], words[i - 1])) {
      res.push(words[i]);
    }
  }
  return res;
};

// 判断两个单词是否为字母异位词
function compare(word1, word2) {
  let freq = new Array(26).fill(0);
  for (let ch of word1) {
    freq[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  for (let ch of word2) {
    freq[ch.charCodeAt(0) - "a".charCodeAt(0)]--;
  }
  return freq.every((x) => x === 0);
}
/**
 * 执行用时 :9 ms, 在所有 JavaScript 提交中击败了69.44%的用户
 * 内存消耗 :58.11 MB, 在所有 JavaScript 提交中击败了86.11%的用户
 */
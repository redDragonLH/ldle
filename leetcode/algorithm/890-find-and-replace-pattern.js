/**
 * 890. 查找和替换模式
 *
 * 你有一个单词列表 words 和一个模式  pattern，你想知道 words 中的哪些单词与模式匹配。
 *
 * 如果存在字母的排列 p ，使得将模式中的每个字母 x 替换为 p(x) 之后，我们就得到了所需的单词，那么单词与模式是匹配的。
 *
 * （回想一下，字母的排列是从字母到字母的双射：每个字母映射到另一个字母，没有两个字母映射到同一个字母。）
 *
 * 返回 words 中与给定模式匹配的单词列表。
 *
 * 你可以按任何顺序返回答案。
 */

/**
 * 说的挺绕，主要就是重现映射字符串，看能不能一对一映射起来
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const ans = [];
  for (const word of words) {
    if (match(word, pattern) && match(pattern, word)) {
      ans.push(word);
    }
  }
  return ans;
};

const match = (word, pattern) => {
  const map = new Map();
  for (let i = 0; i < word.length; ++i) {
    const x = word[i],
      y = pattern[i];
    if (!map.has(x)) {
      map.set(x, y);
    } else if (map.get(x) !== y) {
      // word 中的同一字母必须映射到 pattern 中的同一字母上
      return false;
    }
  }
  return true;
};

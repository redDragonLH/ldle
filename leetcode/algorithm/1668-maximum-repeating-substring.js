/**
 * 1668. 最大重复子字符串
 *
 * 给你一个字符串 sequence ，如果字符串 word 连续重复 k 次形成的字符串是 sequence 的一个子字符串，那么单词 word 的 重复值为 k 。
 * 单词 word 的 最大重复值 是单词 word 在 sequence 中最大的重复值。如果 word 不是 sequence 的子串，那么重复值 k 为 0 。
 *
 * 给你一个字符串 sequence 和 word ，请你返回 最大重复值 k 。
 */

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  const regexp = RegExp(word, "g");
  const matches = sequence.matchAll(regexp);
  let wordLen = word.length;
  let positions = [];
  for (const match of matches) {
    console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
    positions.push(match.index);
  }
  let len = positions.length;
  if (!len) return 0;
  let maxRepeating = 1;
  let repeating = 1;
  for (let i = 1; i < len; i++) {

    if (positions[i - 1] + wordLen === positions[i]) {
      repeating++;

    } else {

      maxRepeating = Math.max(maxRepeating, repeating);
      repeating = 1;
    }
  }
  return Math.max(maxRepeating, repeating);
};

/**
 * 失败,无法获取字母有重复的子串
 * console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba"));
 * 
 */

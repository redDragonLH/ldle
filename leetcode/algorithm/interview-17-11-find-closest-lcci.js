/**
 * 面试题 17.11. 单词距离
 *
 * 有个内含单词的超大文本文件，给定任意两个不同的单词，找出在这个文件中这两个单词的最短距离(相隔单词数)。如果寻找过程在这个文件中会重复多次，而每次寻找的单词不同，你能对此优化吗?
 */

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function (words, word1, word2) {
  let len = words.length;
  // posi1 和posi2 初始不能相等,否则相减为0,不能更小了
  let posi1 = 200000;
  let posi2 = 100000; // words max to 100000
  let index = 0;
  let result = 100000; // 同上
  while (index < len) {
    if (words[index] === word1) {
      posi1 = index;
    }
    if (words[index] === word2) {
      posi2 = index;
    }
    result = Math.min(result, Math.abs(posi1 - posi2));
    index++;
  }
  return result;
};
/**
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了89.53%的用户
 * 内存消耗：48.3 MB, 在所有 JavaScript 提交中击败了90.70%的用户
 */
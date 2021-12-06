/**
 * 1816. 截断句子
 *
 * 句子 是一个单词列表，列表中的单词之间用单个空格隔开，且不存在前导或尾随空格。每个单词仅由大小写英文字母组成（不含标点符号）。
 *
 * 例如，"Hello World"、"HELLO" 和 "hello world hello world" 都是句子。
 *
 * 给你一个句子 s​​​​​​ 和一个整数 k​​​​​​ ，请你将 s​​ 截断 ​，​​​使截断后的句子仅含 前 k​​​​​​ 个单词。返回 截断 s​​​​​​ 后得到的句子。
 */

/**
 * 暴力,或者由空格分割为数组
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let sLen = s.length;
  let index = 0;
  let space = 0;
  for (let i = 0; i < sLen; i++) {
    if (s[i] === " ") {
      space++;
      index = i;
    }
    if (space === k) {
      return s.slice(0, index);
    }
  }
  return s;
};
/**
 * 暴力遍历
 * 
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了88.49%的用户
 * 内存消耗：37.2 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */
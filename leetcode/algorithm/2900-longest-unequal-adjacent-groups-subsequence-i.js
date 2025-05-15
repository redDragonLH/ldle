/**
 * 2900. 最长相邻不相等子序列 I
 *
 * 给你一个下标从 0 开始的字符串数组 words ，和一个下标从 0 开始的 二进制 数组 groups ，两个数组长度都是 n 。
 * 你需要从 words 中选出 最长子序列。如果对于序列中的任何两个连续串，二进制数组 groups 中它们的对应元素不同，则 words 的子序列是不同的。
 * 正式来说，你需要从下标 [0, 1, ..., n - 1] 中选出一个 最长子序列 ，将这个子序列记作长度为 k 的 [i0, i1, ..., ik - 1] ，对于所有满足 0 <= j < k - 1 的 j 都有 groups[ij] != groups[ij + 1] 。
 * 请你返回一个字符串数组，它是下标子序列 依次 对应 words 数组中的字符串连接形成的字符串数组。如果有多个答案，返回 任意 一个。
 * 注意：words 中的元素是不同的 。
 */
/**
 * 子序列 是可以通过从另一个数组删除或不删除某些元素，但不更改其余元素的顺序得到的数组。
 *
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function (words, groups) {
  const result = [];
  let lastGroup = -1;
  for (let i = 0; i < words.length; i++) {
    if (groups[i] !== lastGroup) {
      result.push(words[i]);
      lastGroup = groups[i];
    }
  }
  return result;
};
/**
 * 题目看不懂~~
 * 执行用时：1 ms, 在所有 JavaScript 提交中击败了80%的用户
 * 内存消耗：58.2 MB, 在所有 JavaScript 提交中击败了60%的用户
 */
/**
 * 2559. 统计范围内的元音字符串数
 *
 * 给你一个下标从 0 开始的字符串数组 words 以及一个二维整数数组 queries 。
 *
 * 每个查询 queries[i] = [li, ri] 会要求我们统计在 words 中下标在 li 到 ri 范围内（包含 这两个值）并且以元音开头和结尾的字符串的数目。
 *
 * 返回一个整数数组，其中数组的第 i 个元素对应第 i 个查询的答案。
 *
 * 注意：元音字母是 'a'、'e'、'i'、'o' 和 'u' 。
 */

/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
const vowel = ["a", "e", "i", "o", "u"];
var vowelStrings = function (words, queries) {
  let prefixData = [0];

  words.forEach((e, i) => {
    let count = prefixData[i] || 0;
    if (isPass(e)) {
      count = count + 1;
    }
    prefixData.push(count);
  });

  console.log(prefixData);

  let result = [];
  queries.forEach((e) => {
    // 加个1,因为是闭区间
    result.push(prefixData[e[1] + 1] - prefixData[e[0]]);
  });
  return result;
};
let isPass = (word) => {
  if (vowel.includes(word[0]) && vowel.includes(word[word.length - 1])) {
    return true;
  }
  return false;
};
/**
 * 速度很慢
 * 执行用时：152 ms, 在所有 JavaScript 提交中击败了21.74%的用户
 * 内存消耗：70 MB, 在所有 JavaScript 提交中击败了17.39%的用户
 */
/**
 * 2047. 句子中的有效单词数
 *
 * 句子仅由小写字母（'a' 到 'z'）、数字（'0' 到 '9'）、连字符（'-'）、标点符号（'!'、'.' 和 ','）以及空格（' '）组成。每个句子可以根据空格分解成 一个或者多个 token ，这些 token 之间由一个或者多个空格 ' ' 分隔。
 *
 * 如果一个 token 同时满足下述条件，则认为这个 token 是一个有效单词：
 *  * 仅由小写字母、连字符和/或标点（不含数字）。
 *  * 至多一个 连字符 '-' 。如果存在，连字符两侧应当都存在小写字母（"a-b" 是一个有效单词，但 "-ab" 和 "ab-" 不是有效单词）。
 *  * 至多一个 标点符号。如果存在，标点符号应当位于 token 的 末尾 。
 *
 * 这里给出几个有效单词的例子："a-b."、"afad"、"ba-c"、"a!" 和 "!" 。
 *
 * 给你一个字符串 sentence ，请你找出并返回 sentence 中 有效单词的数目 。
 */

/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
  let sentenceArr = sentence.split(" ");
  let result = 0;
  sentenceArr.forEach((e) => {
    let numberReg = /[0-9]/g;
    let hyphenReg = /[a-z]\-[a-z]/;
    let hyphenRepeatedReg = /\-/g;
    // hyphenReg 和 hyphenRepeatedReg 数量不一样说明有问题
    if (
      e.length &&
      !numberReg.test(e) &&
      (e.match(hyphenReg) || []).length ===
        (e.match(hyphenRepeatedReg) || []).length
    ) {
      let symbolReg = /\!|\,|\./g;
      let lastSymbolReg = /\!$|\,$|\.$/g;

      let arr = e.match(symbolReg) || [];

      if (!arr.length) {
        result++;
      } else if (arr.length === 1 && lastSymbolReg.test(e)) {
        result++;
      }
    }
  });
  return result;
};

/**
 * 速度这么慢~~
 *
 * 就当复习了下正则吧
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了19.21%的用户
 * 内存消耗：43.6 MB, 在所有 JavaScript 提交中击败了13.53%的用户
 */

/**
 * 第三方题解
 * 
 * 正则有点复杂
 * @param {string} sentence
 * @return {number}
 */
const countValidWords = (sentence) => {
  const reg = /(^[a-z]+(?:(?<=[a-z])-(?=[a-z]))?[a-z]*[\!\,\.]?$|^[\!\,\.]$)/;
  return sentence.split(" ").filter((s) => reg.test(s)).length;
};

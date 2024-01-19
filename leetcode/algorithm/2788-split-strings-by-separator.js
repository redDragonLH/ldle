/**
 * 2788. 按分隔符拆分字符串
 *
 * 给你一个字符串数组 words 和一个字符 separator ，请你按 separator 拆分 words 中的每个字符串。
 * 返回一个由拆分后的新字符串组成的字符串数组，不包括空字符串 。
 * 注意
 *  * separator 用于决定拆分发生的位置，但它不包含在结果字符串中。
 *  * 拆分可能形成两个以上的字符串。
 *  * 结果字符串必须保持初始相同的先后顺序。
 */

/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  let result = [];
  words.forEach(e=>{
    result.push(...e.split(separator).filter((v, i) => v !== ""));
  });
  return result;
};
/**
 * 执行用时：109 ms, 在所有 JavaScript 提交中击败了24.00%的用户
 * 内存消耗：57.91 MB, 在所有 JavaScript 提交中击败了6.00%的用户
 */

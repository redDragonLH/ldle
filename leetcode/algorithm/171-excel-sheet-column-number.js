/**
 * 171. Excel表列序号
 *
 * 给定一个Excel表格中的列名称，返回其相应的列序号。
 * 例如，
 *
 *     A -> 1
 *     B -> 2
 *     C -> 3
 *     ...
 *     Z -> 26
 *     AA -> 27
 *    AB -> 28
 */
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let zero = "A".charCodeAt() - 1;
  let len = columnTitle.length;
  let result = 0;
  let bit = 1;
  for (let i = len - 1; i >= 0; i--) {
    result += (columnTitle[i].charCodeAt() - zero) * bit;
    bit *= 26;
  }
  return result;
};
titleToNumber("AB");
/**
 * 执行用时：120 ms, 在所有 JavaScript 提交中击败了12.97%的用户
 * 内存消耗：39 MB, 在所有 JavaScript 提交中击败了92.71%的用户
 */
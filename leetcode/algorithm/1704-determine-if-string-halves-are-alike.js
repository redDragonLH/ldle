/**
 * 1704. 判断字符串的两半是否相似
 *
 * 给你一个偶数长度的字符串 s 。将其拆分成长度相同的两半，前一半为 a ，后一半为 b 。
 *
 * 两个字符串 相似 的前提是它们都含有相同数目的元音（'a'，'e'，'i'，'o'，'u'，'A'，'E'，'I'，'O'，'U'）。注意，s 可能同时含有大写和小写字母。
 *
 * 如果 a 和 b 相似，返回 true ；否则，返回 false 。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let vowel = ["a", "e", "i", "o", "u"];
  let left = 0,
    right = 0;
  let len = s.length;
  let rightStartPoint = len / 2;
  let leftStartPoint = 0;

  s = s.toLowerCase();
  while (rightStartPoint !== len) {
    if (vowel.indexOf(s[leftStartPoint]) > -1) {
      left++;
    }
    leftStartPoint++;


    if ( vowel.indexOf(s[rightStartPoint]) > -1) {
      right++;
    }
    rightStartPoint++;
  }
  return left === right;
};
/**
 * 数量对上就行，还以为要和字母对应上
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了89.4%的用户
 * 内存消耗：41.6 MB, 在所有 JavaScript 提交中击败了76.71%的用户
 */
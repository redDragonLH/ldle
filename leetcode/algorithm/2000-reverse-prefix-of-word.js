/**
 * 2000. 反转单词前缀
 *
 * 给你一个下标从 0 开始的字符串 word 和一个字符 ch 。找出 ch 第一次出现的下标 i ，反转 word 中从下标 0 开始、直到下标 i 结束（含下标 i ）的那段字符。如果 word 中不存在字符 ch ，则无需进行任何操作。
 *  * 例如，如果 word = "abcdefd" 且 ch = "d" ，那么你应该 反转 从下标 0 开始、直到下标 3 结束（含下标 3 ）。结果字符串将会是 "dcbaefd" 。
 *
 * 返回 结果字符串 。
 */

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let posi = word.indexOf(ch);
  let result = "";
  let len = word.length;
  if (posi !== -1) {
    posi += 1;
    for (let i = 0; i < len; i++) {
      if (posi) {
        result = word[i] + result;
        posi--;
      } else {
        result += word[i];
      }
    }
  } else {
    result = word;
  }
  return result;
};
/**
 * 基本没用自带的数据操作方法
 * 
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了94.70%的用户
 * 内存消耗：41.2 MB, 在所有 JavaScript 提交中击败了5.30%的用户
 */
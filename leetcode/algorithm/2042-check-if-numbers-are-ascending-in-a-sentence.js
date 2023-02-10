/**
 * 2042. 检查句子中的数字是否递增
 *
 * 句子是由若干 token 组成的一个列表，token 间用 单个 空格分隔，句子没有前导或尾随空格。每个 token 要么是一个由数字 0-9 组成的不含前导零的 正整数 ，要么是一个由小写英文字母组成的 单词 。
 *
 *  * 示例，"a puppy has 2 eyes 4 legs" 是一个由 7 个 token 组成的句子："2" 和 "4" 是数字，其他像 "puppy" 这样的 tokens 属于单词。
 *
 * 给你一个表示句子的字符串 s ，你需要检查 s 中的 全部 数字是否从左到右严格递增（即，除了最后一个数字，s 中的 每个 数字都严格小于它 右侧 的数字）。
 * 如果满足题目要求，返回 true ，否则，返回 false 。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let arr = s.split(" ");
  let current = Number.MIN_SAFE_INTEGER;
  for (const str of arr) {
    if (!isNaN(str)) {
      if (current < parseInt(str)) {
        current = parseInt(str);
      } else {
        return false;
      }
    }
  }
  return true;
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了48.89%的用户
 * 内存消耗：41.1 MB, 在所有 JavaScript 提交中击败了64.44%的用户
 */

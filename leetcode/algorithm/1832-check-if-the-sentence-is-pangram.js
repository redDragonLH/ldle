/**
 * 1832. 判断句子是否为全字母句
 *
 * 全字母句 指包含英语字母表中每个字母至少一次的句子。
 * 给你一个仅由小写英文字母组成的字符串 sentence ，请你判断 sentence 是否为 全字母句 。
 * 如果是，返回 true ；否则，返回 false 。
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let len = sentence.length;
  if (len < 26) return false;
  let map = new Array(26).fill(0);
  let count = 26;
  let aCode = "a".charCodeAt();
  for (let i = 0; i < len; i++) {
    let code = sentence[i].charCodeAt() - aCode;
    if (!map[code]) {
      count--;
      map[code]++;
    }
  }
  return !count;
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了51.10%的用户
 * 内存消耗：41.5 MB, 在所有 JavaScript 提交中击败了35.71%的用户
 */
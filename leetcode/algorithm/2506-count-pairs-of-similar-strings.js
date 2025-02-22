/**
 * 2506. 统计相似字符串对的数目
 * 
 * 给你一个下标从 0 开始的字符串数组 words 。

 * 如果两个字符串由相同的字符组成，则认为这两个字符串 相似 。

 *  * 例如，"abca" 和 "cba" 相似，因为它们都由字符 'a'、'b'、'c' 组成。
 *  * 然而，"abacba" 和 "bcfd" 不相似，因为它们不是相同字符组成的。
 * 请你找出满足字符串 words[i] 和 words[j] 相似的下标对 (i, j) ，并返回下标对的数目，其中 0 <= i < j <= words.length - 1 。
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  let len = words.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (isSimilar(words[i], words[j])) {
        result++;
      }
    }
  }
  return result;
};
let isSimilar = (s, t) => {
    let len = s.length > t.length ? s.length : t.length;
    let sMap = new Array(26).fill(0);
    let tMap = new Array(26).fill(0);
    for (let i = 0; i < len; i++) {
      s[i] && (sMap[s[i].charCodeAt() - 97]=1);
      t[i] && (tMap[t[i].charCodeAt() - 97]=1);
    }
    for (let i = 0; i < 26; i++) {
      if (sMap[i] !== tMap[i]) {
        return false;
      }
    }
    return true;
  };

/**
 * 执行用时：116 ms, 在所有 JavaScript 提交中击败了19.44%的用户
 * 内存消耗：62.07 MB, 在所有 JavaScript 提交中击败了5.55%的用户
 */
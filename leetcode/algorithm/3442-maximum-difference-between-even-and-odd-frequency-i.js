/**
 * 3442. 奇偶频次间的最大差值 I
 *
 * 给你一个由小写英文字母组成的字符串 s 。
 * 请你找出字符串中两个字符 a1 和 a2 的出现频次之间的 最大 差值 diff = a1 - a2，这两个字符需要满足：
 *  * a1 在字符串中出现 奇数次 。
 *  * a2 在字符串中出现 偶数次 。
 * 返回 最大 差值。
 */
/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
  let freq = new Array(26).fill(0);
  for (let char of s) {
    freq[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  let maxOdd = -1,
    minEven = Infinity;
  for (let count of freq) {
    if (count % 2 === 1) {
      maxOdd = Math.max(maxOdd, count);
    } else if (count > 0) {
      minEven = Math.min(minEven, count);
    }
  }

  return maxOdd === -1 || minEven === Infinity ? 0 : maxOdd - minEven;
};
/**
 * 执行用时：5 ms, 在所有 JavaScript 提交中击败了90.48%的用户
 * 内存消耗：56.25 MB, 在所有 JavaScript 提交中击败了95.24%的用户
 */

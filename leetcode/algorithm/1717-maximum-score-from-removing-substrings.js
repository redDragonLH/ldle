/**
 * 1717. 删除子字符串的最大得分
 *
 * 给你一个字符串 s 和两个整数 x 和 y 。你可以执行下面两种操作任意次。
 *  * 删除子字符串 "ab" 并得到 x 分。
 *  *  * 比方说，从 "cabxbae" 删除 ab ，得到 "cxbae" 。
 *  * 删除子字符串"ba" 并得到 y 分。
 *  *  * 比方说，从 "cabxbae" 删除 ba ，得到 "cabxe" 。
 * 请返回对 s 字符串执行上面操作若干次能得到的最大得分。
 */
/**
 * Calculates the maximum score by repeatedly removing either "ab" or "ba" substrings from the input string `s`.
 * The score for removing "ab" is `x`, and for "ba" is `y`. The function prioritizes the higher scoring substring
 * to maximize the total score. It processes the string in a single pass, greedily removing the higher value substring first,
 * and then processes the remaining possible substrings of the other type.
 *
 * @param {string} s - The input string consisting of lowercase English letters.
 * @param {number} x - The score for removing each "ab" substring.
 * @param {number} y - The score for removing each "ba" substring.
 * @returns {number} The maximum score achievable by removing substrings as described.
 */
function maximumGain(s, x, y) {
  let [a, b] = ["a", "b"];
  if (x < y) {
    [x, y] = [y, x];
    [a, b] = [b, a];
  }

  let [ans, cnt1, cnt2] = [0, 0, 0];
  for (let c of s) {
    if (c === a) {
      cnt1++;
    } else if (c === b) {
      if (cnt1) {
        ans += x;
        cnt1--;
      } else {
        cnt2++;
      }
    } else {
      ans += Math.min(cnt1, cnt2) * y;
      cnt1 = 0;
      cnt2 = 0;
    }
  }
  ans += Math.min(cnt1, cnt2) * y;
  return ans;
}
/**
 * 执行用时：34 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：64.07 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */
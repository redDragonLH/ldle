/**
 * 3228. 将 1 移动到末尾的最大操作次数
 *
 * 给你一个 二进制字符串 s。
 * 你可以对这个字符串执行 任意次 下述操作：
 *  * 选择字符串中的任一下标 i（ i + 1 < s.length ），该下标满足 s[i] == '1' 且 s[i + 1] == '0'。
 *  * 将字符 s[i] 向 右移 直到它到达字符串的末端或另一个 '1'。例如，对于 s = "010010"，如果我们选择 i = 1，结果字符串将会是 s = "000110"。
 * 返回你能执行的 最大 操作次数。
 */
/**
 * @param {string} s
 * @return {number}
 */
var maxOperations = function (s) {
  let countOne = 0;
  let ans = 0;
  let i = 0;
  while (i < s.length) {
    if (s[i] === "0") {
      while (i + 1 < s.length && s[i + 1] === "0") {
        i++;
      }
      ans += countOne;
    } else {
      countOne++;
    }
    i++;
  }
  return ans;
};
/**
 * 执行用时 :8 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :58.59 MB, 在所有 JavaScript 提交中击败了40.00%的用户
 */
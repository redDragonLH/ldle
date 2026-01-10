/**
 * 712. 两个字符串的最小ASCII删除和
 *
 * 给定两个字符串s1 和 s2，返回 使两个字符串相等所需删除字符的 ASCII 值的最小和 。
 */

/**
 * 比较麻烦的点是怎么判断相等，这个过程中可以获取需要删除的字符
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  const m = s1.length,
    n = s2.length;
  // dp[i][j]表示s1的前i个字符和s2的前j个字符相等所需删除字符的ASCII值的最小和
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  // 初始化第一行和第一列
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
  }
  // 状态转移
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + s1.charCodeAt(i - 1), // 删除s1的字符
          dp[i][j - 1] + s2.charCodeAt(j - 1) // 删除s2的字符
        );
      }
    }
  }
  return dp[m][n];
};
/**
 * 执行用时 :28 ms, 在所有 JavaScript 提交中击败了77.78%的用户
 * 内存消耗 :60.73 MB, 在所有 JavaScript 提交中击败了83.33%的用户
 */
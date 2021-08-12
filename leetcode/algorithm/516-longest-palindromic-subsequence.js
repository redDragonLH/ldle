/**
 * 516. 最长回文子序列
 *
 * 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。
 *
 * 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。
 */

/**
 *
 * 还可以删字符串~有啥算法可以解决么
 *
 * 官方题解: 动态规划
 *  对于一个子序列而言,如果它是回文子序列并且长度大于2,那么将它首尾的两个字符去除之后,仍然是个回文子序列
 *
 *  用 dp[i][j] 表示字符串 s 的下标范围[i,j]内的最长回文子序列的长度.假设字符串 s 的长度为n,则只有当 0<= i <= j时,才会有 dp[i][j] > 0,否则 dp[i][j] = 0
 *
 *  由于任何长度为1的子序列都是回文子序列,因此动态规划的边界情况是,对任意 0 <= i < n ,都有dp[i][j] =1;
 *
 *  当 i<j 时,计算 dp[i][j]需要分别考虑 s[i] 和 s[j] 相等和不想等的情况:
 *      * 如果 s[i] = s[j],则首先得到s 的下标范围[i+1,j-1]内的最长回文子序列,然后在该子序列的首尾分别添加 s[i] 和 s[j],即可得到 s 的下标范围[i,j]内的最长回文子序列,因此 dp[i][j] = dp[i+1][j-1]+2
 *      * 如果 s[i] != s[j],则 s[i] 和 s[j] 不可能同时作为同一个回文子序列的首尾,因此 dp[i][j] = max(dp[i + i][j],dp[i][j - 1])
 *
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  // 倒着循环
  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1;
    const c1 = s[i];
    for (let j = i + 1; j < n; j++) {
      const c2 = s[j];
      if (c1 === c2) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][n - 1];
};

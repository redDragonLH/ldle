/**
 * 313. 超级丑数
 *
 * 超级丑数 是一个正整数，并满足其所有质因数都出现在质数数组 primes 中。
 *
 * 给你一个整数 n 和一个整数数组 primes ，返回第 n 个 超级丑数 。
 *
 * 题目数据保证第 n 个 超级丑数 在 32-bit 带符号整数范围内。
 */

/**
 *
 * 质因数: 在数论里是指能整除给定正整数的质数.除了1以外,两个没有其他共同质因子的正数称为互质
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  const m = primes.length;
  const pointers = new Array(m).fill(1);
  for (let i = 2; i <= n; i++) {
    const nums = new Array(m).fill(m);
    let minNum = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < m; j++) {
      nums[j] = dp[pointers[j]] * primes[j];
      minNum = Math.min(minNum, nums[j]);
    }
    dp[i] = minNum;
    for (let j = 0; j < m; j++) {
      if (minNum == nums[j]) {
        pointers[j]++;
      }
    }
  }
  return dp[n];
};

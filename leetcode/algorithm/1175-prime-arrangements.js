/**
 * 1175. 质数排列
 *
 * 请你帮忙给从 1 到 n 的数设计排列方案，使得所有的「质数」都应该被放在「质数索引」（索引从 1 开始）上；你需要返回可能的方案总数。
 *
 * 让我们一起来回顾一下「质数」：质数一定是大于 1 的，并且不能用两个小于它的正整数的乘积来表示。
 *
 * 由于答案可能会很大，所以请你返回答案 模 mod 10^9 + 7 之后的结果即可。
 */

/**
 * 所有质数都放在质数索引上,所有合数都放到合数索引上,质数放置和合数放置是相互独立的,总的方案即为「所有质数都放在质数索引上的方案」✖️ 「所有合数都放在合数索引上的方案」
 * 求「所有质数都放在质数索引上的方案数」,即求质数个数 numPrimes的阶乘,合数数同理
 * 求质数个数时,可以使用试除法
 * @param {number} n
 * @return {number}
 */
const MOD = 1000000007;
var numPrimeArrangements = function (n) {
  let numPrimes = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      numPrimes++;
    }
  }
  let res = 1;
  let m = n - numPrimes;
  // 质数的阶乘
  while (numPrimes > 0) {
    res = res % MOD;// 每次都除是没想到的
    res *= numPrimes;
    numPrimes--;
  }
  // 合数阶乘
  while (m > 0) {
    res = res % MOD;
    res *= m;
    m--;
  }
  return res;
};
// 是否质数
const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  // 试除法: 尝试用所有数除一遍
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

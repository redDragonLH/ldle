/**
 * 1447. 最简分数
 * 给你一个整数 n ，请你返回所有 0 到 1 之间（不包括 0 和 1）满足分母小于等于  n 的 最简 分数 。分数可以以 任意 顺序返回。
 */
/**
 * 没有余数?有公约数也不行
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (j === 1 || i % j) {
        result.push(j + "/" + i);
      }
    }
  }
  return result;
};

/**
 * 必须要考虑有公约数的情况,质数队列?
 * 难道要每个数据去除么
 *
 * 互为质数
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  const ans = [];
  for (let denominator = 2; denominator <= n; ++denominator) {
    for (let numerator = 1; numerator < denominator; ++numerator) {
      if (gcd(numerator, denominator) == 1) {
        ans.push(numerator + "/" + denominator);
      }
    }
  }
  return ans;
};
// 计算两数的最大公约数
/**
 * 欧几里得算法(辗转相除法)
 * 原理: 两个整数的最大公约数等于其中较小的数和两数的差的最大公约数
 * 
 * 在数学中一般使用求余运算替换差运算
 */
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

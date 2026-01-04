/**
 * 1390. 四因数
 *
 * 给你一个整数数组 nums，请你返回该数组中恰有四个因数的这些整数的各因数之和。如果数组中不存在满足题意的整数，则返回 0 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function (nums) {
  let res = 0;
  for (let num of nums) {
    res += getDivisors(num);
  }
  return res;
};
function getDivisors(n) {
  let divisors = new Set();
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divisors.add(i);
      divisors.add(n / i);
      if (divisors.size > 4) break;
    }
  }
  return divisors.size === 4
    ? Array.from(divisors).reduce((a, b) => a + b, 0)
    : 0;
}
/**
 * 执行用时 :28 ms, 在所有 JavaScript 提交中击败了41.67%的用户
 * 内存消耗 :61.18 MB, 在所有 JavaScript 提交中击败了8.33%的用户
 */
/**
 * 1979. 找出数组的最大公约数
 * 给你一个整数数组 nums ，返回数组中最大数和最小数的 最大公约数 。
 * 两个数的 最大公约数 是能够被两个数整除的最大正整数。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return gcd(max, min);
};

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：54.52 MB, 在所有 JavaScript 提交中击败了91.67%的用户
 */
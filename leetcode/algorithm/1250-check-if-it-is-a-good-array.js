/**
 * 1250. 检查「好数组」
 *
 * 给你一个正整数数组 nums，你需要从中任选一些子集，然后将子集中每一个数乘以一个 任意整数，并求出他们的和。
 *
 * 假如该和结果为 1，那么原数组就是一个「好数组」，则返回 True；否则请返回 False。
 */

/**
 * 裴蜀定理:
 *      对于不全为零的任意整数 a 和 b,记 g= gcd(a,b),其中 gcd(a,b) 为a 和 b的最小公约数,则对于任意整数 x 和y都满足 a ✖️ x + b ✖️ y是 g 的倍数,特别地,存在整数x和y满足 a ✖️ x + b ✖️ y = g
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function (nums) {
  let divisor = nums[0];
  for (const num of nums) {
    divisor = gcd(divisor, num);
    if (divisor === 1) {
      break;
    }
  }
  return divisor === 1;
};

const gcd = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num1;
    num1 = num2;
    num2 = temp % num2;
  }
  return num1;
};

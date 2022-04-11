/**
 * 357. 统计各位数字都不同的数字个数
 *
 * 给你一个整数 n ，统计并返回各位数字都不同的数字 x 的个数，其中 0 <= x < 10n 。
 */

/**
 * 数学题吧,计算在n为多少时有重复数字
 *  * 一位时没有,0
 *  * 二位时有两个, 9
 *  * 三位时最多有三个, 9 * 2 + 9
 *  * 四位时最多有四个, 9 * 3 + 9 * 2+ 9
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {};

/**
 * 官方题解
 * @param {}} n
 * @returns
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) {
    return 1;
  }
  // 一个就是都相等
  if (n === 1) {
    return 10;
  }
  let res = 10,// 一位数 10
    cur = 9;// 基数
  // 算得是不同的
  for (let i = 0; i < n - 1; i++) {
    cur *= 9 - i;
    res += cur;
  }
  return res;
};

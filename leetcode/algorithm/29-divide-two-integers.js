/**
 * 29. 两数相除
 *
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 *
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 *
 * 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
 */

/**
 * 除法的结果就是得倒被除数里面包含多少个除数,要处理负数的问题
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let result = 0;
  while (dividend > divisor) {
    dividend -= divisor;
    result++;
  }
  return result;
};

var divide = function (dividend, divisor) {
  const MIN_VALUE = -2147483648;
  const MAX_VALUE = 2147483648;
  if (dividend == 0) return 0;
  if (divisor == 1) return dividend;
  if (divisor == -1) {
    if (dividend > MIN_VALUE) return -dividend; // 只要不是最小的那个整数，都是直接返回相反数就好啦
    return MIN_VALUE; // 是最小的那个，那就返回最大的整数啦
  }
  let a = dividend;
  let b = divisor;
  let sign = 1;
  if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
    sign = -1;
  }
  a = a > 0 ? a : -a;
  b = b > 0 ? b : -b;
  let res = div(a, b);
  if (sign > 0) return res > MAX_VALUE ? MAX_VALUE : res;
  return -res;
};
let div = (a, b) => {
  // 似乎精髓和难点就在于下面这几句
  if (a < b) return 0;
  let count = 1;
  let tb = b; // 在后面的代码中不更新b
  while (tb + tb <= a) {
    count = count + count; // 最小解翻倍
    tb = tb + tb; // 当前测试的值也翻倍
  }
  return count + div(a - tb, b);
};

/**
 * -2147483648
 * -1
 *
 * 输出: -2147483648
 *
 * 预期: 2147483647
 */

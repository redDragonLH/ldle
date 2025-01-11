/**
 * 3270. 求出数字答案
 *
 * 给你三个 正 整数 num1 ，num2 和 num3 。
 * 数字 num1 ，num2 和 num3 的数字答案 key 是一个四位数，定义如下：
 *  * 一开始，如果有数字 少于 四位数，给它补 前导 0 。
 *  * 答案 key 的第 i 个数位（1 <= i <= 4）为 num1 ，num2 和 num3 第 i 个数位中的 最小 值。
 * 请你返回三个数字 没有 前导 0 的数字答案。
 */
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function (num1, num2, num3) {
  let key = 0;
  for (let p = 1; num1 > 0 && num2 > 0 && num3 > 0; p *= 10) {
    key += Math.min(num1 % 10, num2 % 10, num3 % 10) * p;
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
    num3 = Math.floor(num3 / 10);
  }
  return key;
};
/**
 * 没看懂题目
 */
/**
 * 400. 第 N 位数字
 *
 * 给你一个整数 n ，请你在无限的整数序列 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...] 中找出并返回第 n 位数字。
 */

/**
 * 这~~一个一个数有点二啊
 *
 * 也差不多一个个数了
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let d = 1,
    count = 9;
  while (n > d * count) {
    n -= d * count;
    d++;
    // 9,90,900
    count *= 10;
  }
  const index = n - 1;
  const start = Math.floor(Math.pow(10, d - 1));
  const num = start + Math.floor(index / d);
  const digitIndex = index % d;
  const digit =
    Math.floor(num / Math.floor(Math.pow(10, d - digitIndex - 1))) % 10;
  return digit;
};

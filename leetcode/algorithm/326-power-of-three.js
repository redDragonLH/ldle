/**
 * 326. 3的幂
 *
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。
 *
 * 整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3x
 */
/**
 * 最简单的逻辑,递归
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  // 1是3的0次幂吧~~但是如果最后是1,则不是3的幂次方,这就得先单独处理输入,在用单独的函数递归
  if (n === 1) return true;
  return recursion(n);
};

const recursion = (n) => {
  if (n < 3) return false;
  if (n === 3) return true;
  return recursion(n / 3); // 不能用parseInt,会导致数据误差
};

/**
 * 官方题解 判断是否为最大3的幂的约数
 *
 * 判断n是否为 3的19次方的约数即可
 * 
 * 在给定的32位有符号整数的范围内,最大的3的幂就是3的19次方
 * 
 * 约数: 整数a除以整数b(b != 0)除得的商正好是整数而没有余数
 */
var isPowerOfThree = function (n) {
  return n > 0 && 1162261467 % n === 0;
};

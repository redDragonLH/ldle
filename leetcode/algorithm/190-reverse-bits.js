/**
 * 190. 颠倒二进制位
 * 颠倒给定的 32 位有符号整数的二进制位。
 */
/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result <<= 1; // 左移一位，为下一位腾出空间
    result |= n & 1; // 将 n 的最低位添加到 result 的最低位
    n >>>= 1; // 无符号右移 n，处理下一位
  }
  return result >>> 0; // 转换为无符号整数
};

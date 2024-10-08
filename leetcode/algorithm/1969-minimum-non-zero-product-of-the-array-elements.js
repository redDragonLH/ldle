/**
 * 1969. 数组元素的最小非零乘积
 *
 * 给你一个正整数 p 。你有一个下标从 1 开始的数组 nums ，这个数组包含范围 [1, 2p - 1] 内所有整数的二进制形式（两端都 包含）。你可以进行以下操作 任意 次：
 * 从 nums 中选择两个元素 x 和 y  。
 * 选择 x 中的一位与 y 对应位置的位交换。对应位置指的是两个整数 相同位置 的二进制位。
 * 比方说，如果 x = 1101 且 y = 0011 ，交换右边数起第 2 位后，我们得到 x = 1111 和 y = 0001 。
 * 请你算出进行以上操作 任意次 以后，nums 能得到的 最小非零 乘积。将乘积对 109 + 7 取余 后返回。
 * 注意：答案应为取余 之前 的最小值。
 */
/**
 * @param {number} p
 * @return {number}
 */
var minNonZeroProduct = function (p) {
  if (p === 1) {
    return 1;
  }
  const mod = BigInt(1e9 + 7);
  const x = fastpow(2n, BigInt(p), mod) - 1n;
  const y = 1n << BigInt(p - 1);
  return (fastpow(x - 1n, y - 1n, mod) * x) % mod;
};

function fastpow(x, n, mod) {
  let res = BigInt(1);
  while (n > 0) {
    if (n & 1n) {
      res = (res * x) % mod;
    }
    x = (x * x) % mod;
    n >>= 1n;
  }
  return res;
}
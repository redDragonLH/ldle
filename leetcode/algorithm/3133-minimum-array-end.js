/**
 * 3133. 数组最后一个元素的最小值
 *
 * 给你两个整数 n 和 x 。你需要构造一个长度为 n 的 正整数 数组 nums ，对于所有 0 <= i < n - 1 ，满足 nums[i + 1] 大于 nums[i] ，
 * 并且数组 nums 中所有元素的按位 AND 运算结果为 x 。
 *
 * 返回 nums[n - 1] 可能的 最小 值。
 */
/**
 * AND/& 运算的性质：对于任意的 a 和 b，有 a & b <= a <= b。更细一些就是 1&1=1，1&0=0，0&0=0。
 *
 * 那么所有的数按位与的结果是 x，那么 x 的二进制表示中的 1 的位置，就是所有数的二进制表示中的 1 的位置。
 * 其他位必须是0,或者是奇数个1,这样AND下依旧是0.不会影响最终结果
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function (n, x) {
  const bitCount = 64 - leadingZeros(n) - leadingZeros(x);
  let res = BigInt(x);
  let j = 0;
  n--;
  for (let i = 0; i < bitCount; ++i) {
    if (((res >> BigInt(i)) & 1n) === 0n) {
      if (((BigInt(n) >> BigInt(j)) & 1n) != 0n) {
        res |= 1n << BigInt(i);
      }
      j++;
    }
  }
  return Number(res);
};

function leadingZeros(x) {
  return x === 0 ? 32 : 31 - Math.floor(Math.log2(x));
}
/**
 * 没理解~
 */
/**
 * 868. 二进制间距
 *
 * 给定一个正整数 n，找到并返回 n 的二进制表示中两个 相邻 1 之间的 最长距离 。如果不存在两个相邻的 1，返回 0 。
 *
 * 如果只有 0 将两个 1 分隔开（可能不存在 0 ），则认为这两个 1 彼此 相邻 。两个 1 之间的距离是它们的二进制表示中位置的绝对差。例如，"1001" 中的两个 1 的距离为 3 。
 */

/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  let last = -1,
    ans = 0;
  for (let i = 0; n != 0; ++i) {
      // 二进制位是1,则进入处理
    if ((n & 1) === 1) {
      if (last !== -1) {
        ans = Math.max(ans, i - last);
      }
      last = i;
    }
    // 右移
    n >>= 1;
  }
  return ans;
};

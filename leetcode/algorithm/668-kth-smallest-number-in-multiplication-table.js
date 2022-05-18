/**
 * 668. 乘法表中第k小的数
 *
 * 几乎每一个人都用 乘法表。但是你能在乘法表中快速找到第k小的数字吗？
 *
 * 给定高度m 、宽度n 的一张 m * n的乘法表，以及正整数k，你需要返回表中第k 小的数字。
 */

/**
 * 二分查找
 *
 *  由于 m 和 n 很大,直接求出所有数字然后找的第 k 小会超出时间限制.不妨考虑一个反向问题:对于乘法表中的数字 x ,他是乘法表中的第几小的数字?
 *
 *  求第几小等价于求有多少数字不超过 x.可以遍历乘法表的每一行,对于乘法表的第i行,其数字均为i的倍数,因此不超过 x 的数字有 min(|e/i,n|) 个,所以整个乘法
 * 表不超过 x 的数字个数为
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
  let left = 1,
    right = m * n;
  while (left < right) {
    const x = left + Math.floor((right - left) / 2);
    let count = Math.floor(x / n) * n;
    for (let i = Math.floor(x / n) + 1; i <= m; ++i) {
      count += Math.floor(x / i);
    }
    if (count >= k) {
      right = x;
    } else {
      left = x + 1;
    }
  }
  return left;
};

/**
 * 2829. k-avoiding 数组的最小总和
 *
 * 给你两个整数 n 和 k 。
 * 对于一个由 不同 正整数组成的数组，如果其中不存在任何求和等于 k 的不同元素对，则称其为 k-avoiding 数组。
 * 返回长度为 n 的 k-avoiding 数组的可能的最小总和。
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function (n, k) {
  if (n <= Math.floor(k / 2)) {
    return arithmeticSeriesSum(1, 1, n);
  } else {
    return (
      arithmeticSeriesSum(1, 1, Math.floor(k / 2)) +
      arithmeticSeriesSum(k, 1, n - Math.floor(k / 2))
    );
  }
};

function arithmeticSeriesSum(a1, d, n) {
  return ((a1 + a1 + (n - 1) * d) * n) / 2;
}

/**
 * 3871. 统计范围内的逗号 II
 *
 * 给你一个整数 n。
 * 返回将所有从 [1, n]（包含两端）范围内的整数以 标准 数字格式书写时所用到的 逗号总数。
 * 在 标准 格式中：
 * 从右边开始，每 三位 数字后插入一个逗号。
 * 位数 少于四位 的数字不包含逗号。
 *
 * 1 <= n <= 10^15
 */
/**
 * 这得分长度处理了吧
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
  let p = 1000,
    res = 0;
  while (p <= n) {
    res += n - p + 1;
    p *= 1000;
  }
  return res;
};

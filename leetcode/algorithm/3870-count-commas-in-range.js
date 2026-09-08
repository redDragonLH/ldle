/**
 * 3870. 统计范围内的逗号
 *
 * 给你一个整数 n。
 * 返回将所有从 [1, n]（包含两端）范围内的整数以 标准 数字格式书写时所用到的 逗号总数。
 * 在 标准 格式中：
 *  * 从右边开始，每 三位 数字后插入一个逗号。
 *  * 位数 少于四位 的数字不包含逗号。
 */
/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
  if (n < 1000) return 0;
  let count = 0;
  for (let i = 1000; i <= n; i++) {
    // 统计每个数字中的逗号数量
    let str = i.toLocaleString();
    count += (str.match(/,/g) || []).length;
  }
  return count;
};
/**
 * 这肯定超时
 */
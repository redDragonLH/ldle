/**
 * 1281. 整数的各位积和之差
 *
 * 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。
 */
/**
 * 余10是最简单的办法,如果用移位的办法呢
 *
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let temp = n;
  let c = 1;
  let sum = 0;
  while (temp) {
    let y = parseInt(temp % 10);
    console.log(y);
    c *= y;
    sum += y;
    temp = parseInt(temp / 10);
  }
  return c - sum;
};
/**
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了72.93%的用户
 * 内存消耗：41.87 MB, 在所有 JavaScript 提交中击败了5.26%的用户
 */
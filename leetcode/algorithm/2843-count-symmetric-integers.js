/**
 * 2843. 统计对称整数的数目
 *
 * 给你两个正整数 low 和 high 。
 * 对于一个由 2 * n 位数字组成的整数 x ，如果其前 n 位数字之和与后 n 位数字之和相等，则认为这个数字是一个对称整数。
 * 返回在 [low, high] 范围内的 对称整数的数目 。
 */
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    let str = String(i);
    let len = str.length;
    if (len % 2 === 0) {
      let left = str.slice(0, len / 2);
      let right = str.slice(len / 2);
      let leftSum = left.split("").reduce((a, b) => a + Number(b), 0);
      let rightSum = right.split("").reduce((a, b) => a + Number(b), 0);
      if (leftSum === rightSum) {
        count++;
      }
    }
  }
  return count;
};
/**
 * 执行用时：67 ms, 在所有 JavaScript 提交中击败了35.29%的用户
 * 内存消耗：60.59 MB, 在所有 JavaScript 提交中击败了11.76%的用户
 */

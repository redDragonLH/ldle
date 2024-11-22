/**
 * 3233. 统计不是特殊数字的数字数量
 *
 * 给你两个 正整数 l 和 r。对于任何数字 x，x 的所有正因数（除了 x 本身）被称为 x 的 真因数。
 * 如果一个数字恰好仅有两个 真因数，则称该数字为 特殊数字。例如：
 *  * 数字 4 是 特殊数字，因为它的真因数为 1 和 2。
 *  * 数字 6 不是 特殊数字，因为它的真因数为 1、2 和 3。
 * 返回区间 [l, r] 内 不是 特殊数字 的数字数量。
 */

/**
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var nonSpecialCount = function (l, r) {
  let count = 0;
  for (let i = l; i <= r; i++) {
    if (getDivisors(i) !== 2) {
      count++;
    }
  }
  return count;
};
let map = {};
let getDivisors = (num) => {
  if (map[num]) return map[num];
  let count = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  map[num] = count;
  return count;
};
/**
 * 超时,
 */

/**
 * 1291. 顺次数
 *
 * 我们定义「顺次数」为：每一位上的数字都比前一位上的数字大 1 的整数。
 * 请你返回由 [low, high] 范围内所有顺次数组成的 有序 列表（从小到大排序）。
 */
/**
 * 从1开始，每次加1，直到9，然后从2开始，每次加1，直到9，依次类推
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  let res = [];
  for (let i = 1; i <= 9; i++) {
    let num = i;
    for (let j = i + 1; j <= 9; j++) {
      num = num * 10 + j;
      if (num >= low && num <= high) {
        res.push(num);
      }
    }
  }
  return res.sort((a, b) => a - b);
};
/**
 * 执行用时 :0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :54.16 MB, 在所有 JavaScript 提交中击败了57.14%的用户
 */
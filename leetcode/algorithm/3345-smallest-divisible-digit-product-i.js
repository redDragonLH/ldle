/**
 * 3345. 最小可整除数位乘积 I
 *
 * 给你两个整数 n 和 t 。请你返回大于等于 n 的 最小 整数，且该整数的 各数位之积 能被 t 整除。
 */
/**
 * 最笨的方法是从 n 开始，逐个检查每个整数，直到找到一个满足条件的整数。我们可以使用一个循环来实现这一点，并在每次迭代中计算当前整数的数位乘积，然后检查是否能被 t 整除。
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function (n, t) {
  // 定义一个函数来计算一个整数的数位乘积
  function digitProduct(num) {
    let product = 1;
    while (num > 0) {
      product *= num % 10;
      num = Math.floor(num / 10);
    }
    return product;
  }

  // 从 n 开始，逐个检查每个整数
  let current = n;
  while (true) {
    if (digitProduct(current) % t === 0) {
      return current;
    }
    current++;
  }
  return -1; // 如果没有找到满足条件的整数，返回 -1
};
/**
 * 执行用时：1 ms, 在所有 JavaScript 提交中击败了75.00%的用户
 * 内存消耗：56.01 MB, 在所有 JavaScript 提交中击败了75.00%的用户
 */
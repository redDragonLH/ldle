/**
 * 2749. 得到整数零需要执行的最少操作数
 *
 * 给你两个整数：num1 和 num2 。
 * 在一步操作中，你需要从范围 [0, 60] 中选出一个整数 i ，并从 num1 减去 2i + num2 。
 * 请你计算，要想使 num1 等于 0 需要执行的最少操作数，并以整数形式返回。
 * 如果无法使 num1 等于 0 ，返回 -1 。
 */

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function (num1, num2) {
  let k = 1;
  while (true) {
    let x = BigInt(num1) - BigInt(num2) * BigInt(k);
    if (x < BigInt(k)) {
      return -1;
    }
    if (k >= bitCount(x)) {
      return k;
    }
    k++;
  }
};

function bitCount(n) {
  let count = 0;
  while (n !== 0n) {
    count++;
    n &= n - 1n;
  }
  return count;
}
/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：56.27 MB, 在所有 JavaScript 提交中击败了-%的用户
 */
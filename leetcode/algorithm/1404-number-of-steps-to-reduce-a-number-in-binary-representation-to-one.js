/**
 * 1404. 将二进制表示减到 1 的步骤数
 *
 * 给你一个以二进制形式表示的数字 s 。请你返回按下述规则将其减少到 1 所需要的步骤数：
 *  * 如果当前数字为偶数，则将其除以 2 。
 *  * 如果当前数字为奇数，则将其加上 1 。
 * 题目保证你总是可以按上述规则将测试用例变为 1 。
 */

/**
 * Calculates the number of steps to reduce a binary number (given as a string) to 1,
 * following these rules:
 * - If the number is even, divide it by 2.
 * - If the number is odd, add 1.
 *
 * The function uses BigInt for arbitrary-length integer arithmetic.
 *
 * @param {string} s - The binary representation of the number as a string.
 * @returns {number} The number of steps required to reduce the number to 1.
 *
 * @example
 * numSteps("1101"); // returns 6
 *
 * Note: `1n` is a BigInt literal representing the integer value 1.
 */
var numSteps = function (s) {
  let num = BigInt("0b" + s);
  let steps = 0;
  while (num > 1n) {
    // n 是一个 BigInt，比较时也要使用 BigInt
    if (num % 2n === 0n) {
      num /= 2n;
    } else {
      num += 1n;
    }
    steps++;
  }
  return steps;
};
/**
 * 执行用时 : 3 ms, 在所有 JavaScript 提交中击败了 52.17% 的用户
 * 内存消耗 : 55.59 MB, 在所有 JavaScript 提交中击败了 30.44% 的用户
 */
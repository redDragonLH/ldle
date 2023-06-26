/**
 * 2485. 找出中枢整数
 *
 * 给你一个正整数 n ，找出满足下述条件的 中枢整数 x ：
 *  * 1 和 x 之间的所有元素之和等于 x 和 n 之间所有元素之和。
 * 返回中枢整数 x 。如果不存在中枢整数，则返回 -1 。题目保证对于给定的输入，至多存在一个中枢整数。
 */

/**
 * 先算出1-n的和,然后从尾往前减
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let prefix = 0;

  for (let i = 0; i <= n; i++) {
    prefix += i;
  }

  let suffer = n;
  if (prefix === suffer) {
    return n;
  }
  while (prefix >= suffer) {
    prefix -= n;
    suffer += n - 1;
    if (prefix === suffer) {
      return n - 1;
    } else {
      n -= 1;
    }
  }
  return -1;
};
/**
 * 执行用时：52 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：41 MB, 在所有 JavaScript 提交中击败了70.18%的用户
 */
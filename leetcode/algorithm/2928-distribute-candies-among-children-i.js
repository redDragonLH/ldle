/**
 * 2928. 给小朋友们分糖果 I
 *
 * 给你两个正整数 n 和 limit 。
 * 请你将 n 颗糖果分给 3 位小朋友，确保没有任何小朋友得到超过 limit 颗糖果，请你返回满足此条件下的 总方案数 。
 */

/**
 * 这应该是个数学问题
 * 三份相加得 n，
 *
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  let result = 0;
  for (let i = 0; i <= limit; i++) {
    for (let j = 0; j <= limit; j++) {
      // 两个小朋友数量定了的情况下，那么怎么得出第三个小朋友的数量
      let tryp = n - i - j;
      if (tryp > -1 && tryp <= limit) {
        result++;
      }
    }
  }
  return result;
};
/**
 * 执行用时：63 ms, 在所有 JavaScript 提交中击败了 80.00 %的用户
 * 内存消耗：49.94 MB, 在所有 JavaScript 提交中击败了73.33%的用户
 */
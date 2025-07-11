/**
 * 2929. 给小朋友们分糖果 II
 *
 * 给你两个正整数 n 和 limit 。
 * 请你将 n 颗糖果分给 3 位小朋友，确保没有任何小朋友得到超过 limit 颗糖果，请你返回满足此条件下的 总方案数 。
 */
/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  // 计算满足 0 <= x, y, z <= limit 且 x + y + z = n 的方案数
  // 容斥原理
  const count = (n) => {
    if (n < 0) return 0;
    // 允许负数，三元组非负整数解
    return ((n + 2) * (n + 1)) / 2;
  };
  let res = count(n);
  res -= 3 * count(n - limit - 1);
  res += 3 * count(n - 2 * (limit + 1));
  res -= count(n - 3 * (limit + 1));
  return res;
};
/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了 100.00 %的用户
 * 内存消耗：55.77 MB, 在所有 JavaScript 提交中击败了75.00%的用户
 */
/**
 * 容斥原理是一种组合数学中的计数方法，用于计算多个集合的并集元素个数时，避免重复计数。
 * 基本思想是：先分别加上每个集合的元素个数，再减去所有两两交集的元素个数，再加上所有三三交集的元素个数，依此类推。
 * 公式为：
 * |A ∪ B ∪ C| = |A| + |B| + |C| - |A ∩ B| - |A ∩ C| - |B ∩ C| + |A ∩ B ∩ C|
 * 在本题中，用于排除每个小朋友分到的糖果超过 limit 的情况。
 */
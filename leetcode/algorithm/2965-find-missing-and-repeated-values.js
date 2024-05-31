/**
 * 2965. 找出缺失和重复的数字
 *
 * 给你一个下标从 0 开始的二维整数矩阵 grid，大小为 n * n ，其中的值在 [1, n2] 范围内。除了 a 出现 两次，b 缺失 之外，每个整数都 恰好出现一次 。
 * 任务是找出重复的数字a 和缺失的数字 b 。
 * 返回一个下标从 0 开始、长度为 2 的整数数组 ans ，其中 ans[0] 等于 a ，ans[1] 等于 b 。
 */

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  let n = grid.length;
  let sum = 0;
  let set = new Array(n * n + 1).fill(0);
  let a, b;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum += grid[i][j];
      if (set[grid[i][j]] === 1) {
        a = grid[i][j];
      } else {
        set[grid[i][j]] = 1;
      }
    }
  }
  return [a, set.indexOf(0, 1)];
};

/**
 * 执行用时：66 ms, 在所有 JavaScript 提交中击败了84.62%的用户
 * 内存消耗：51.38 MB, 在所有 JavaScript 提交中击败了88.46%的用户
 */

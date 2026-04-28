/**
 * 2033. 获取单值网格的最小操作数
 *
 * 给你一个大小为 m x n 的二维整数网格 grid 和一个整数 x 。每一次操作，你可以对 grid 中的任一元素 加 x 或 减 x 。
 * 单值网格 是全部元素都相等的网格。
 * 返回使网格化为单值网格所需的 最小 操作数。如果不能，返回 -1 。
 */
/**
 * 怎么判定能否化为单值网格？如果所有元素对 x 取模的结果不相同，那么就不能化为单值网格。
 * 计算出所有元素对 x 取模的结果，如果不相同，返回 -1。
 * 否则，计算出所有元素除以 x 的结果，找到中位数 mid。
 * 计算出所有元素除以 x 的结果与 mid 的差的绝对值之和，即为最小操作数。
 */
/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
  const m = grid.length;
  const n = grid[0].length;
  const mod = grid[0][0] % x;
  const arr = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        // 如果有一个元素对 x 取模的结果不相同，那么就不能化为单值网格，返回 -1。
      if (grid[i][j] % x !== mod) {
        return -1;
      }
      // 否则，计算出所有元素除以 x 的结果，找到中位数 mid。
      arr.push(Math.floor(grid[i][j] / x));
    }
  }
  arr.sort((a, b) => a - b);
  const mid = arr[Math.floor(arr.length / 2)];
  let res = 0;
  // 计算出所有元素除以 x 的结果与 mid 的差的绝对值之和，即为最小操作数。
  for (const num of arr) {
    res += Math.abs(num - mid);
  }
  return res;
};
/**
 * 使用到的技术: 排序,模运算以及性质,中位数,绝对值
 * 
 * 使用位运算以及绝对值的思路很直接就是业务逻辑,但是不熟悉性质很难想到
 * 
 * 执行用时 : 139 ms, 在所有 JavaScript 提交中击败了 100.00% 的用户
 * 内存消耗 : 83.25 MB, 在所有 JavaScript 提交中击败了 75.00% 的用户
 */
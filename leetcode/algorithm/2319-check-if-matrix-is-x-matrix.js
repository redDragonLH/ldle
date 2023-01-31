/**
 * 2319. 判断矩阵是否是一个 X 矩阵
 *
 * 如果一个正方形矩阵满足下述 全部 条件，则称之为一个 X 矩阵 ：
 *  * 矩阵对角线上的所有元素都 不是 0
 *  * 矩阵中所有其他元素都是 0
 * 给你一个大小为 n x n 的二维整数数组 grid ，表示一个正方形矩阵。如果 grid 是一个 X 矩阵 ，返回 true ；否则，返回 false 。
 */

/**
 * 可以转换为怎么判断是否对角线,好像也不简单
 *
 * 归纳总结
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
  // 找到是否对角线

  //从前往后
  // 第零层第零个
  // 第一层第一个
  // 第n层第n个

  //从后往前
  // 第零层第len个
  // 第一层第len-1个
  // 第二层第len-2个
  // j+i = len
  let len = grid.length - 1;

  for (let i = 0; i <= len; i++) {
    for (let j = 0; j <= len; j++) {
      // 对角线元素肯定是行列相等的,也许是反方向
      if (i === j || j + i === len) {
        if (grid[i][j] === 0) return false;
      } else {
        if (grid[i][j] !== 0) return false;
      }
    }
  }
  return true;
};
/**
 *
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了81.63%的用户
 * 内存消耗：43.3 MB, 在所有 JavaScript 提交中击败了85.71%的用户
 */

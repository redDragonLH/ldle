/**
 * 2500. 删除每行中的最大值
 *
 * 给你一个 m x n 大小的矩阵 grid ，由若干正整数组成。
 * 执行下述操作，直到 grid 变为空矩阵：
 *  * 从每一行删除值最大的元素。如果存在多个这样的值，删除其中任何一个。
 *  * 将删除元素中的最大值与答案相加。
 * 注意 每执行一次操作，矩阵中列的数据就会减 1 。
 * 返回执行上述操作后的答案。
 */

/**
 * 列还会减少,那就是在减为0前获取最大值
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  for (let i = 0; i < m; i++) {
    grid[i].sort((a, b) => a - b);
  }
  let res = 0;
  // 遍历排序之后的数据
  for (let j = 0; j < n; j++) {
    let mx = 0;
    // 没有减少列.题目是不是有问题
    for (let i = 0; i < m; i++) {
      mx = Math.max(mx, grid[i][j]);
    }
    res += mx;
  }
  return res;
};

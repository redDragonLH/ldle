/**
 * 1914. 循环轮转矩阵
 *
 * 给你一个大小为 m x n 的整数矩阵 grid​​​ ，其中 m 和 n 都是 偶数 ；另给你一个整数 k 。
 * 矩阵由若干层组成，如下图所示，每种颜色代表一层：
 *
 * 矩阵的循环轮转是通过分别循环轮转矩阵中的每一层完成的。在对某一层进行一次循环旋转操作时，层中的每一个元素将会取代其 逆时针 方向的相邻元素。轮转示例如下：
 *
 * 返回执行 k 次循环轮转操作后的矩阵。
 */
/**
 * 除了遍历还有啥方法么
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
  let m = grid.length,
    n = grid[0].length;
  let res = new Array(m).fill(0).map(() => new Array(n).fill(0));
  let layers = Math.min(m, n) / 2;
  for (let i = 0; i < layers; i++) {
    let arr = [];
    // 上边
    for (let j = i; j < n - i; j++) {
      arr.push(grid[i][j]);
    }
    // 右边
    for (let j = i + 1; j < m - i - 1; j++) {
      arr.push(grid[j][n - i - 1]);
    }
    // 下边
    for (let j = n - i - 1; j >= i; j--) {
      arr.push(grid[m - i - 1][j]);
    }
    // 左边
    for (let j = m - i - 2; j > i; j--) {
      arr.push(grid[j][i]);
    }
    let len = arr.length;
    let start = k % len;
    // 上边
    for (let j = i; j < n - i; j++) {
      res[i][j] = arr[start];
      start = (start + 1) % len;
    }
    // 右边
    for (let j = i + 1; j < m - i - 1; j++) {
      res[j][n - i - 1] = arr[start];
      start = (start + 1) % len;
    }
    // 下边
    for (let j = n - i - 1; j >= i; j--) {
      res[m - i - 1][j] = arr[start];
      start = (start + 1) % len;
    }
    // 左边
    for (let j = m - i - 2; j > i; j--) {
      res[j][i] = arr[start];
      start = (start + 1) % len;
    }
  }
  return res;
};
/**
 * 执行用时 :19 ms, 在所有 JavaScript 提交中击败了50.00%的用户
 * 内存消耗 :62.89 MB, 在所有 JavaScript 提交中击败了-%的用户
 */
/**
 * 1252. 奇数值单元格的数目
 *
 * 给你一个 m x n 的矩阵，最开始的时候，每个单元格中的值都是 0。
 * 另有一个二维索引数组 indices，indices[i] = [ri, ci] 指向矩阵中的某个位置，其中 ri 和 ci 分别表示指定的行和列（从 0 开始编号）。
 * 对 indices[i] 所指向的每个位置，应同时执行下述增量操作：
 *  * ri 行上的所有单元格，加 1 。
 *  * ci 列上的所有单元格，加 1 。
 *
 * 给你 m、n 和 indices 。请你在执行完所有 indices 指定的增量操作后，返回矩阵中 奇数值单元格 的数目。
 */

var oddCells = function (m, n, indices) {
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);
  for (const index of indices) {
    rows[index[0]]++;
    cols[index[1]]++;
  }
  let oddx = 0,
    oddy = 0;
  for (let i = 0; i < m; i++) {
    if ((rows[i] & 1) !== 0) {
      oddx++;
    }
  }
  for (let i = 0; i < n; i++) {
    if ((cols[i] & 1) !== 0) {
      oddy++;
    }
  }
  return oddx * (n - oddy) + (m - oddx) * oddy;
};

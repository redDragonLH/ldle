/**
 * 3963. 构造恰好一条路径的网格
 *
 * 给你两个整数 m 和 n，分别表示网格的行数和列数。
 * 请你构造 任意 一个只包含字符 '.' 和 '#' 的 m x n 网格，其中：
 *  * '.' 表示空单元格。
 *  * '#' 表示障碍物单元格。
 * 有效路径 是满足以下条件的空单元格序列：
 *  * 从左上角单元格 (0, 0) 开始。
 *  * 在右下角单元格 (m - 1, n - 1) 结束。
 *  * 只能向：
 *  *  * 右移动，从 (i, j) 到 (i, j + 1)，或者
 *  *  * 下移动，从 (i, j) 到 (i + 1, j)。
 * 返回任意一个从左上角到右下角 恰好只有一条有效路径 的网格。
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function (m, n) {
  const grid = Array.from({ length: m }, () => Array(n).fill("#"));
  for (let i = 0; i < m; i++) {
    grid[i][0] = ".";
  }
  for (let j = 0; j < n; j++) {
    grid[m - 1][j] = ".";
  }
  return grid.map((row) => row.join(""));
};
/**
 * 执行用时：5 ms, 在所有 JavaScript 提交中击败了37.50%的用户
 * 内存消耗：58.57 MB, 在所有 JavaScript 提交中击败了62.50%的用户
 */
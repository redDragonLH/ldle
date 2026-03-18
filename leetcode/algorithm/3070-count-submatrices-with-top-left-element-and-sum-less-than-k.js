/**
 * 3070. 元素和小于等于 k 的子矩阵的数目
 *
 * 给你一个下标从 0 开始的整数矩阵 grid 和一个整数 k。
 * 返回包含 grid 左上角元素、元素和小于或等于 k 的 子矩阵的数目。
 */
/**
 * 三个方向扩散,
 * 不算中等题吧
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  let count = 1;
  let sum = grid[0][0];
  for (let i = 1; i < m; i++) {
    sum += grid[i][0];

    if (sum > k) break;
    count++;
  }
  sum = grid[0][0];
  for (let j = 1; j < n; j++) {
    sum += grid[0][j];
    if (sum > k) break;
    count++;
  }

  let len = Math.min(m, n);
  for (let l = 2; l < len; l++) {
    sum = 0;
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < l; j++) {
        sum += grid[i][j];
        if (i == l - 1 && j == l - 1) {
          if (sum > k) break;
          count++;
        }
      }
    }
  }
  return count;
};

/**
 * 官方题解 二维前缀和
 */
var countSubmatrices = function (grid, k) {
    const n = grid.length; // 获取矩阵的行数
    const m = grid[0].length; // 获取矩阵的列数
    const cols = new Array(m).fill(0); // 初始化一个数组，用于存储每列的累加和
    let res = 0; // 结果计数器，初始化为0

    // 遍历每一行
    for (let i = 0; i < n; i++) {
        let rows = 0; // 当前行的累加和，初始化为0
        // 遍历每一列
        for (let j = 0; j < m; j++) {
            cols[j] += grid[i][j]; // 更新当前列的累加和
            rows += cols[j]; // 更新当前行的累加和
            // 如果当前行的累加和小于等于k，增加结果计数
            if (rows <= k) {
                res++;
            }
        }
    }

    return res; // 返回符合条件的子矩阵数量
};

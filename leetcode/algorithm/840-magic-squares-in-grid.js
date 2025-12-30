/**
 * 840. 矩阵中的幻方
 *
 * 3 x 3 的幻方是一个填充有 从 1 到 9  的不同数字的 3 x 3 矩阵，其中每行，每列以及两条对角线上的各数之和都相等。
 * 给定一个由整数组成的row x col 的 grid，其中有多少个 3 × 3 的 “幻方” 子矩阵？
 * 注意：虽然幻方只能包含 1 到 9 的数字，但 grid 可以包含最多15的数字。
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const isMagicSquare = (r, c) => {
    const nums = new Set();
    for (let i = r; i < r + 3; i++) {
      for (let j = c; j < c + 3; j++) {
        const val = grid[i][j];
        if (val < 1 || val > 9 || nums.has(val)) {
          return false;
        }
        nums.add(val);
      }
    }

    const targetSum = grid[r][c] + grid[r][c + 1] + grid[r][c + 2];

    for (let i = 0; i < 3; i++) {
      if (
        grid[r + i][c] + grid[r + i][c + 1] + grid[r + i][c + 2] !==
        targetSum
      ) {
        return false;
      }
      if (
        grid[r][c + i] + grid[r + 1][c + i] + grid[r + 2][c + i] !==
        targetSum
      ) {
        return false;
      }
    }

    if (grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2] !== targetSum) {
      return false;
    }
    if (grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c] !== targetSum) {
      return false;
    }

    return true;
  };
  for (let r = 0; r <= rows - 3; r++) {
    for (let c = 0; c <= cols - 3; c++) {
      if (isMagicSquare(r, c)) {
        count++;
      }
    }
  }
  return count;
};

/**
 *  模拟
 *  执行用时 :0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 *  内存消耗 :54.78 MB, 在所有 JavaScript 提交中击败了37.50%的用户
 */
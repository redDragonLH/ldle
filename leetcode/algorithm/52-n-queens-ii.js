/**
 * 52. N 皇后 II
 *
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。
 */

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let solutions = 0;
  const queens = new Array(n).fill(-1);
  const columns = new Set();
  const diagonal1 = new Set();
  const diagonal2 = new Set();
  const row = new Array(n).fill(".");

  function generateBoard() {
    const board = [];
    for (let i = 0; i < n; i++) {
      row[queens[i]] = "Q";
      board.push(row.join(""));
      row[queens[i]] = ".";
    }
    return board;
  }

  function backtrack(row) {
    if (row === n) {
      const board = generateBoard();
      solutions++;
    } else {
      for (let i = 0; i < n; i++) {
        if (
          columns.has(i) ||
          diagonal1.has(row - i) ||
          diagonal2.has(row + i)
        ) {
          continue;
        }
        queens[row] = i;
        columns.add(i);
        diagonal1.add(row - i);
        diagonal2.add(row + i);
        backtrack(row + 1);
        columns.delete(i);
        diagonal1.delete(row - i);
        diagonal2.delete(row + i);
      }
    }
  }

  backtrack(0);
  return solutions;
};
/**
 * 51题改返回值
 */
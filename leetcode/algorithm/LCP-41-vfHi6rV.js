/**
 * LCP 41. 黑白翻转棋
 *
 * 在 n*m 大小的棋盘中，有黑白两种棋子，黑棋记作字母 "X", 白棋记作字母 "O"，空余位置记作 "."。当落下的棋子与其他相同颜色的棋子在行、
 * 列或对角线完全包围（中间不存在空白位置）另一种颜色的棋子，则可以翻转这些棋子的颜色。
 *
 * 「力扣挑战赛」黑白翻转棋项目中，将提供给选手一个未形成可翻转棋子的棋盘残局，其状态记作 chessboard。若下一步可放置一枚黑棋，请问选手最多能翻转多少枚白棋。
 *
 * 注意：
 *  * 若翻转白棋成黑棋后，棋盘上仍存在可以翻转的白棋，将可以 继续 翻转白棋
 *  * 输入数据保证初始棋盘状态无可以翻转的棋子且存在空余位置
 */

/**
 *
 * 用「广度优先搜索」来解决这个问题，我们对每一个空余位置尝试黑棋放置，用一个队列来存储正在进行「翻转操作」的黑棋位置，若队列非空，我们从队列中取出队首元素，进行行、列和对角线
 * 8 个方向判断是否有可以翻转的白棋——判断沿着方向是否是连续的一段白棋并以另一颗黑棋结尾。若有可以翻转的白棋，则将这些白旗进行翻转，并加入队列中。直至队列为空表示一次放置黑棋结束。
 * @param {string[]} chessboard
 * @return {number}
 */
const dirs = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

function flipChess(chessboard) {
  let res = 0;
  for (let i = 0; i < chessboard.length; ++i) {
    for (let j = 0; j < chessboard[0].length; ++j) {
      if (chessboard[i][j] === ".") {
        res = Math.max(res, bfs(chessboard, i, j));
      }
    }
  }
  return res;
}

function bfs(chessboard, px, py) {
  const board = [];
  for (let i = 0; i < chessboard.length; ++i) {
    board[i] = chessboard[i].split("");
  }
  let cnt = 0;
  const queue = [];
  queue.push([px, py]);
  board[px][py] = "X";
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];
  while (queue.length > 0) {
    const t = queue.shift();
    for (let i = 0; i < 8; ++i) {
      if (judge(board, t[0], t[1], dirs[i][0], dirs[i][1])) {
        let x = t[0] + dirs[i][0],
          y = t[1] + dirs[i][1];
        while (board[x][y] !== "X") {
          queue.push([x, y]);
          board[x][y] = "X";
          x += dirs[i][0];
          y += dirs[i][1];
          ++cnt;
        }
      }
    }
  }
  return cnt;
}

function judge(board, x, y, dx, dy) {
  x += dx;
  y += dy;
  while (0 <= x && x < board.length && 0 <= y && y < board[0].length) {
    if (board[x][y] === "X") {
      return true;
    } else if (board[x][y] === ".") {
      return false;
    }
    x += dx;
    y += dy;
  }
  return false;
}

/**
 * 999. 可以被一步捕获的棋子数
 *
 * 给定一个 8 x 8 的棋盘，只有一个 白色的车，用字符 'R' 表示。棋盘上还可能存在白色的象 'B' 以及黑色的卒 'p'。空方块用字符 '.' 表示。
 * 车可以按水平或竖直方向（上，下，左，右）移动任意个方格直到它遇到另一个棋子或棋盘的边界。如果它能够在一次移动中移动到棋子的方格，则能够 吃掉 棋子。
 * 注意：车不能穿过其它棋子，比如象和卒。这意味着如果有其它棋子挡住了路径，车就不能够吃掉棋子。
 * 返回白车将能 吃掉 的 卒的数量。
 */

/**
 * 四个方向深度遍历了
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let res = 0;
  let x = 0,
    y = 0;
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  // 找到车的位置也就是遍历的起始点
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === "R") {
        x = i;
        y = j;
        break;
      }
    }
  }
  // 四个方向深度遍历
  for (let i = 0; i < 4; i++) {
    for (let step = 0; ; step++) {
      let tx = x + step * dx[i];
      let ty = y + step * dy[i];
      if (tx < 0 || tx >= 8 || ty < 0 || ty >= 8 || board[tx][ty] === "B") {
        break;
      }
      if (board[tx][ty] === "p") {
        res++;
        break;
      }
    }
  }
  return res;
};

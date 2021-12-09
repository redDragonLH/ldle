/**
 * 794. 有效的井字游戏
 *
 * 用字符串数组作为井字游戏的游戏板 board。当且仅当在井字游戏过程中，玩家有可能将字符放置成游戏板所显示的状态时，才返回 true。
 *
 * 该游戏板是一个 3 x 3 数组，由字符 " "，"X" 和 "O" 组成。字符 " " 代表一个空位。
 *
 * 以下是井字游戏的规则：
 *  * 玩家轮流将字符放入空位（" "）中。
 *  * 第一个玩家总是放字符 “X”，且第二个玩家总是放字符 “O”。
 *  * “X” 和 “O” 只允许放置在空位中，不允许对已放有字符的位置进行填充。
 *  * 当有 3 个相同（且非空）的字符填充任何行、列或对角线时，游戏结束。
 *  * 当所有位置非空时，也算为游戏结束。
 *  * 如果游戏结束，玩家不允许再放置字符。
 */

/**
 * 这道题目的问题是判断游戏板是否生效~~~~
 *
 * 也就是按照上方的规则判断游戏板是否能继续走下去
 *
 * 思路
 *  1. 先统计并判断X,O的数量
 *  2. 检查是否有人获胜
 *  3. 检查获胜的非法情况
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (board) {
  let xCount = 0,
    oCount = 0;
  // 计算X,O数量
  for (const row of board) {
    for (const c of row) {
      xCount = c === "X" ? xCount + 1 : xCount;
      oCount = c === "O" ? oCount + 1 : oCount;
    }
  }
  // 思路1
  if (oCount != xCount && oCount !== xCount - 1) {
    return false;
  }
  // 思路2,3
  if (win(board, "X") && oCount !== xCount - 1) {
    return false;
  }
  if (win(board, "O") && oCount !== xCount) {
    return false;
  }
  return true;
};

const win = (board, p) => {
  // 对角线
  for (let i = 0; i < 3; ++i) {
    if (p === board[0][i] && p === board[1][i] && p === board[2][i]) {
      return true;
    }
    if (p === board[i][0] && p === board[i][1] && p === board[i][2]) {
      return true;
    }
  }
  // 横竖
  if (p === board[0][0] && p === board[1][1] && p === board[2][2]) {
    return true;
  }
  if (p === board[0][2] && p === board[1][1] && p === board[2][0]) {
    return true;
  }
  return false;
};

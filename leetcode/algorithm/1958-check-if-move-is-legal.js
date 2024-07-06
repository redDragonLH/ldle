/**
 * 1958. 检查操作是否合法
 *
 * 给你一个下标从 0 开始的 8 x 8 网格 board ，其中 board[r][c] 表示游戏棋盘上的格子 (r, c) 。棋盘上空格用 '.' 表示，白色格子用 'W' 表示，黑色格子用 'B' 表示。
 * 游戏中每次操作步骤为：选择一个空格子，将它变成你正在执行的颜色（要么白色，要么黑色）。但是，合法 操作必须满足：涂色后这个格子是 好线段的一个端点 （好线段可以是水平的，竖直的或者是对角线）。
 * 好线段 指的是一个包含 三个或者更多格子（包含端点格子）的线段，线段两个端点格子为 同一种颜色 ，且中间剩余格子的颜色都为 另一种颜色 （线段上不能有任何空格子）
 */

var checkMove = function (board, rMove, cMove, color) {
  // 判断每个方向是否存在以操作位置为起点的好线段
  const check = (dx, dy) => {
    let x = rMove + dx;
    let y = cMove + dy;
    let step = 1; // 当前遍历到的节点序号
    while (x >= 0 && x < 8 && y >= 0 && y < 8) {
      if (step === 1) {
        // 第一个点必须为相反颜色
        if (board[x][y] === "." || board[x][y] === color) {
          return false;
        }
      } else {
        // 好线段中不应存在空格子
        if (board[x][y] === ".") {
          return false;
        }
        // 遍历到好线段的终点，返回 true
        if (board[x][y] === color) {
          return true;
        }
      }
      ++step;
      x += dx;
      y += dy;
    }
    // 不存在符合要求的好线段
    return false;
  };

  // 从 x 轴正方向开始逆时针枚举 8 个方向
  const dx = [1, 1, 0, -1, -1, -1, 0, 1]; // 行改变量
  const dy = [0, 1, 1, 1, 0, -1, -1, -1]; // 列改变量
  for (let k = 0; k < 8; ++k) {
    if (check(dx[k], dy[k])) {
      return true;
    }
  }
  return false;
};

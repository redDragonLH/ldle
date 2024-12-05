/**
 * 3001. 捕获黑皇后需要的最少移动次数
 *
 * 现有一个下标从 1 开始的 8 x 8 棋盘，上面有 3 枚棋子。
 * 给你 6 个整数 a 、b 、c 、d 、e 和 f ，其中：
 *  * (a, b) 表示白色车的位置。
 *  * (c, d) 表示白色象的位置。
 *  * (e, f) 表示黑皇后的位置。
 * 假定你只能移动白色棋子，返回捕获黑皇后所需的最少移动次数。
 * 请注意：
 *  * 车可以向垂直或水平方向移动任意数量的格子，但不能跳过其他棋子。
 *  * 象可以沿对角线方向移动任意数量的格子，但不能跳过其他棋子。
 *  * 如果车或象能移向皇后所在的格子，则认为它们可以捕获皇后。
 *  * 皇后不能移动。
 */
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 * @param {number} f
 * @return {number}
 */
var minMovesToCaptureTheQueen = function (a, b, c, d, e, f) {
  if (a === e && b === f) return 0; // 如果白色车和黑皇后在同一位置，返回 0
  if (c === e && d === f) return 0; // 如果白色象和黑皇后在同一位置，返回 0
  // 斜对角要判断象和皇后中间是否有车
  for (let i = 1; i < Math.abs(c - e); i++) {
    if (
      (c + i === a && d + i === b) ||
      (c - i === a && d - i === b) ||
      (c + i === a && d - i === b) ||
      (c - i === a && d + i === b)
    ) {
      return 2;
    }
  }

  if (Math.abs(c - e) === Math.abs(d - f)) return 1; //
  if ((a === c && a === e) || (b === d && b === f)) return 2;
  if (a === e || b === f) return 1;
  return 2;
};

/**
 * 官方题解
 */
var minMovesToCaptureTheQueen = function (a, b, c, d, e, f) {
  // 车与皇后处在同一行，且中间没有象
  if (a === e && (c !== a || d <= Math.min(b, f) || d >= Math.max(b, f))) {
    return 1;
  }
  // 车与皇后处在同一列，且中间没有象
  if (b === f && (d !== b || c <= Math.min(a, e) || c >= Math.max(a, e))) {
    return 1;
  }
  // 象、皇后处在同一条对角线，且中间没有车
  if (
    Math.abs(c - e) === Math.abs(d - f) && // 同对角线
    ((c - e) * (b - f) !== (a - e) * (d - f) || // 象和皇后还有车和皇后不在一条对角线上
      a < Math.min(c, e) || // 车不在象和皇后之间
      a > Math.max(c, e))// 车不在象和皇后之间
  ) {
    return 1;
  }
  return 2;
};
/**
 * 
 */
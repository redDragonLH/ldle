/**
 * 1138. 字母板上的路径
 *
 * 我们从一块字母板上的位置 (0, 0) 出发，该坐标对应的字符为 board[0][0]。
 *
 * 在本题里，字母板为board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"]，如下所示。
 *  * a b c d e
 *  * f g h i j
 *  * k l m n o
 *  * p q r s t
 *  * u v w x y
 *  * z
 *
 * 我们可以按下面的指令规则行动：
 *  * 如果方格存在，'U' 意味着将我们的位置上移一行；
 *  * 如果方格存在，'D' 意味着将我们的位置下移一行；
 *  * 如果方格存在，'L' 意味着将我们的位置左移一列；
 *  * 如果方格存在，'R' 意味着将我们的位置右移一列；
 *  * '!' 会把在我们当前位置 (r, c) 的字符 board[r][c] 添加到答案中。
 *
 * （注意，字母板上只存在有字母的位置。）
 *
 * 返回指令序列，用最小的行动次数让答案和目标 target 相同。你可以返回任何达成目标的路径。
 */
/**
 * 没啥好办法，就是模拟
 * 获取上一个元素的位置，计算当前元素的位置，然后计算
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
  let cx = 0,
    cy = 0;
  let res = "";
  for (let i = 0; i < target.length; i++) {
    const c = target[i];
    const nx = Math.floor((c.charCodeAt() - "a".charCodeAt()) / 5);
    const ny = Math.floor((c.charCodeAt() - "a".charCodeAt()) % 5);
    if (nx < cx) {
      for (let j = 0; j < cx - nx; j++) {
        res += "U";
      }
    }
    if (ny < cy) {
      for (let j = 0; j < cy - ny; j++) {
        res += "L";
      }
    }
    if (nx > cx) {
      for (let j = 0; j < nx - cx; j++) {
        res += "D";
      }
    }
    if (ny > cy) {
      for (let j = 0; j < ny - cy; j++) {
        res += "R";
      }
    }
    res += "!";
    cx = nx;
    cy = ny;
  }
  return res;
};

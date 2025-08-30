/**
 * 36. 有效的数独
 *
 * 请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
 * 1. 数字 1-9 在每一行只能出现一次。
 * 2. 数字 1-9 在每一列只能出现一次。
 * 3. 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 *
 * 数独部分空格内已填入了数字，空白格用 '.' 表示。
 *
 * 注意：
 *  * 一个有效的数独（部分已被填充）不一定是可解的。
 *  * 只需要根据以上规则，验证已经填入的数字是否有效即可。
 */

/**
 * 官方题解:一次遍历
 *  有效的数独满足一下三个条件
 *      * 同一数字在每行只能出现一次
 *      * 同一数字在每一列只能出现一次
 *      * 同一个数字在每一个小九宫格只能出现一次
 *  可以使用哈希表记录每一行,每一列和每一个小九宫格中,每一个数字出现的次数.只需要遍历数独一次,在遍历的过程中更新哈希表中的计数,并判断是否满足有效的数独条件即可
 *
 *  对于数独的第 i 行第i列的单元格,其中 0 <= i, j < 9,该单元格所在的行下标和列下标分别为 i 和 j,该单元格所在的小九宫格的行数和列数分表为 i/3和j/3
 * 其中 0 <= i/3,j/3 < 3
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const subboxes = new Array(3)
    .fill(0)
    .map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const c = board[i][j];
      if (c !== ".") {
        const index = c.charCodeAt() - "0".charCodeAt() - 1;
        rows[i][index]++;
        columns[j][index]++;
        subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
        if (
          rows[i][index] > 1 ||
          columns[j][index] > 1 ||
          subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1
        ) {
          return false;
        }
      }
    }
  }
  return true;
};
/**
 * 执行用时：15 ms, 在所有 JavaScript 提交中击败了33.04%的用户
 * 内存消耗：59.57 MB, 在所有 JavaScript 提交中击败了22.33%的用户
 */
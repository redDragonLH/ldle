/**
 * 119. 杨辉三角 II
 *
 * 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 */

var getRow = function (rowIndex) {
  const row = new Array(rowIndex + 1).fill(0);
  row[0] = 1;
  for (let i = 1; i <= rowIndex; ++i) {
    row[i] = (row[i - 1] * (rowIndex - i + 1)) / i;
  }
  return row;
};

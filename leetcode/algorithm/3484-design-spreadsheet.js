/**
 * 3484. 设计电子表格
 *
 * 电子表格是一个网格，它有 26 列（从 'A' 到 'Z'）和指定数量的 rows。每个单元格可以存储一个 0 到 105 之间的整数值。
 * 请你实现一个 Spreadsheet 类：
 *  * Spreadsheet(int rows) 初始化一个具有 26 列（从 'A' 到 'Z'）和指定行数的电子表格。所有单元格最初的值都为 0 。
 *  * void setCell(String cell, int value) 设置指定单元格的值。单元格引用以 "AX" 的格式提供（例如，"A1"，"B10"），其中字母表示列（从 'A' 到 'Z'），数字表示从 1 开始的行号。
 *  * void resetCell(String cell) 重置指定单元格的值为 0 。
 *  * int getValue(String formula) 计算一个公式的值，格式为 "=X+Y"，其中 X 和 Y 要么 是单元格引用，要么非负整数，返回计算的和。
 * 注意： 如果 getValue 引用一个未通过 setCell 明确设置的单元格，则该单元格的值默认为 0 。
 */

/**
 * @param {number} rows
 */
var Spreadsheet = function (rows) {
  this.rows = rows;
  this.cols = 26;
  this.data = Array.from({ length: rows }, () => Array(this.cols).fill(0));
};

/**
 * @param {string} cell
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function (cell, value) {
  const col = cell.charCodeAt(0) - "A".charCodeAt(0);
  const row = parseInt(cell.slice(1)) - 1;
  this.data[row][col] = value;
};

/**
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function (cell) {
  const col = cell.charCodeAt(0) - "A".charCodeAt(0);
  const row = parseInt(cell.slice(1)) - 1;
  this.data[row][col] = 0;
};

/**
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function (formula) {
  const [left, right] = formula.slice(1).split("+");
  const leftValue = isNaN(left)
    ? this.data[parseInt(left.slice(1)) - 1][
        left.charCodeAt(0) - "A".charCodeAt(0)
      ]
    : parseInt(left);
  const rightValue = isNaN(right)
    ? this.data[parseInt(right.slice(1)) - 1][
        right.charCodeAt(0) - "A".charCodeAt(0)
      ]
    : parseInt(right);
  return leftValue + rightValue;
};

/**
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */

/**
 * 执行用时：140 ms, 在所有 JavaScript 提交中击败了14.29%的用户
 * 内存消耗：74.19 MB, 在所有 JavaScript 提交中击败了57.14%的用户
 */
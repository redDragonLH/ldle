/**
 * 3643. 垂直翻转子矩阵
 * 
 * 给你一个 m x n 的整数矩阵 grid，以及三个整数 x、y 和 k。
 * 整数 x 和 y 表示一个 正方形子矩阵 的左上角下标，整数 k 表示该正方形子矩阵的边长。
 * 你的任务是垂直翻转子矩阵的行顺序。
 * 返回更新后的矩阵。
 */
/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function(grid, x, y, k) {
    let top = x, bottom = x + k - 1;
    while (top < bottom) {
        for (let i = 0; i < k; i++) {
            [grid[top][y + i], grid[bottom][y + i]] = [grid[bottom][y + i], grid[top][y + i]];
        }
        top++;
        bottom--;
    }
    return grid;
};
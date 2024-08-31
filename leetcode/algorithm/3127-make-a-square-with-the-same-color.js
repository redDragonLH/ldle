/**
 * 3127. 构造相同颜色的正方形
 *
 * 给你一个二维 3 x 3 的矩阵 grid ，每个格子都是一个字符，要么是 'B' ，要么是 'W' 。字符 'W' 表示白色，字符 'B' 表示黑色。
 * 你的任务是改变 至多一个 格子的颜色，使得矩阵中存在一个 2 x 2 颜色完全相同的正方形。
 * 如果可以得到一个相同颜色的 2 x 2 正方形，那么返回 true ，否则返回 false 。
 */
/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function(grid) {
    for (let i = 0; i <= 1; i++) {
        for (let j = 0; j <= 1; j++) {
            if (check(grid, i, j)) {
                return true;
            }
        }
    }
    return false;
};

var check = function(grid, x, y) {
    let count = 0;
    for (let i = 0; i <= 1; i++) {
        for (let j = 0; j <= 1; j++) {
            if (grid[x + i][y + j] == 'B') {
                count++;
            }
        }
    }
    return count != 2;
};
/**
 * 3242. 设计相邻元素求和服务
 * 
 * 给你一个 n x n 的二维数组 grid，它包含范围 [0, n2 - 1] 内的不重复元素。
 * 实现 neighborSum 类：
 *  * neighborSum(int [][]grid) 初始化对象。
 *  * int adjacentSum(int value) 返回在 grid 中与 value 相邻的元素之和，相邻指的是与 value 在上、左、右或下的元素。
 *  * int diagonalSum(int value) 返回在 grid 中与 value 对角线相邻的元素之和，对角线相邻指的是与 value 在左上、右上、左下或右下的元素。
 */
var NeighborSum = function(grid) {
    this.grid = grid;
    this.pos = {};
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            this.pos[grid[i][j]] = [i, j];
        }
    }
};

const dirs = [
    [[-1, 0], [1, 0], [0, -1], [0, 1]],      
    [[-1, -1], [-1, 1], [1, -1], [1, 1]]
];

NeighborSum.prototype.adjacentSum = function(value) {
    return this.getSum(value, 0);
};

NeighborSum.prototype.diagonalSum = function(value) {
    return this.getSum(value, 1);
};

NeighborSum.prototype.getSum = function(value, idx) {
    const [x, y] = this.pos[value];
    let sum = 0;
    for (const [dx, dy] of dirs[idx]) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < this.grid.length && ny >= 0 && ny < this.grid[0].length) {
            sum += this.grid[nx][ny];
        }
    }
    return sum;
}
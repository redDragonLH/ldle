/**
 * 1020. 飞地的数量
 * 
 * 给你一个大小为 m x n 的二进制矩阵 grid ，其中 0 表示一个海洋单元格、1 表示一个陆地单元格。
 * 
 * 一次 移动 是指从一个陆地单元格走到另一个相邻（上、下、左、右）的陆地单元格或跨过 grid 的边界。
 * 
 * 返回网格中 无法 在任意次数的移动中离开网格边界的陆地单元格的数量。
 */
/**
 * 思路：广度优先遍历四周，把能够到达边界的块置为别的数，然后遍历整个矩阵，获得1的数量
 *      但是遍历四周逻辑上是否过于复杂，是否有更简单的思路
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    let m = grid.length, n = grid[0].length;
    let fourSide = [
        [0, n], [m - 1, n], [0, m], [n - 1, m]
    ]
    fourSide.forEach((item, index) => {
        for (let i = 0; i < item[1]; i++) {
            if (index > 1) {
                if (grid[i][item[0]] === 1) breadth([i, item[0]], grid, m)
            } else {
                if (grid[item[0]][i] === 1) breadth([item[0], i], grid, m)
            }
        }
    })
    let result = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j] === 1 && result++

        }
    }
    return result
};
const breadth = (point, grid, m) => {
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let area = [[point[0], point[1]]]
    while (area.length) {
        let len = area.length
        while (len--) {
            let data = area.shift()
            grid[data[0]][data[1]] = 2
            for (const dir of dirs) {
                if (data[0] + dir[0] > -1 && data[0] + dir[0] < m) {
                    grid[data[0] + dir[0]][data[1] + dir[1]] === 1 && area.push([data[0] + dir[0], data[1] + dir[1]]);

                }
            }
        }
    }
}
/**
 * 超时
 * 哪里还能优化，还是思路就有问题
 */

/**
 * 官方题解 广度优先
 * 思路基本一样，在细节有不一样
 */
 var numEnclaves = function(grid) {
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const m = grid.length, n = grid[0].length;
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
    const queue = [];
    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 1) {
            visited[i][0] = true;
            queue.push([i, 0]);
        }
        if (grid[i][n - 1] === 1) {
            visited[i][n - 1] = true;
            queue.push([i, n - 1]);
        }
    }
    for (let j = 1; j < n - 1; j++) {
        if (grid[0][j] === 1) {
            visited[0][j] = true;
            queue.push([0, j]);
        }
        if (grid[m - 1][j] === 1) {
            visited[m - 1][j] = true;
            queue.push([m - 1, j]);
        }
    }
    while (queue.length) {
        const cell = queue.shift();
        const currRow = cell[0], currCol = cell[1];
        for (const dir of dirs) {
            const nextRow = currRow + dir[0], nextCol = currCol + dir[1];
            if (nextRow >= 0 && nextRow < m && nextCol >= 0 && nextCol < n && grid[nextRow][nextCol] == 1 && !visited[nextRow][nextCol]) {
                visited[nextRow][nextCol] = true;
                queue.push([nextRow, nextCol]);
            }
        }
    }
    let enclaves = 0;
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                enclaves++;
            }
        }
    }
    return enclaves;
};
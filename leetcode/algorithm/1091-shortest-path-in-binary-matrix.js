/**
 * 1091. 二进制矩阵中的最短路径
 *
 * 给你一个 n x n 的二进制矩阵 grid 中，返回矩阵中最短 畅通路径 的长度。如果不存在这样的路径，返回 -1 。
 * 二进制矩阵中的 畅通路径 是一条从 左上角 单元格（即，(0, 0)）到 右下角 单元格（即，(n - 1, n - 1)）的路径，该路径同时满足下述要求：
 *  * 路径途经的所有单元格都的值都是 0 。
 *  * 路径中所有相邻的单元格应当在 8 个方向之一 上连通（即，相邻两单元之间彼此不同且共享一条边或者一个角）。
 *
 * 畅通路径的长度 是该路径途经的单元格总数。
 */

/**
 * 广度优先搜索,但是不太确定中间过渡数据结构是什么
 * 
 * 搜索过程会是一颗树状数据
 * 
 * 也不对,找到最先到终点的就行了呗,记住长度
 * 也还是不行,肯定要记住中间数据要不然最短的那个突然断了就傻眼了
 * 
 * 我这思路不是广度优先搜素,是贪心
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {

    let len = grid.length;
    let box = [grid[0][0]]
    let road = 0
    while(box.length){
        let posi = box.shift()
        if(posi === grid[n-1][n-1]){
            return 1+road
        }
        
        //考虑方向和越界
    }
};

/**
 * 动态规划?还是要保存中间节点,每个元素位置保存的是到起点的最短路径
 * @param {*} grid 
 * @returns 
 */
var shortestPathBinaryMatrix = function(grid) {
    if (grid[0][0] === 1) {
        return -1;
    }
    const n = grid.length;
    const dist = new Array(n).fill(undefined).map(() => new Array(n).fill(Infinity));
    dist[0][0] = 1;
    const queue = [[0, 0]];
    while (queue.length > 0) {
        const [x, y] = queue.shift();
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                if (x == n - 1 && y == n - 1) {
                    return dist[x][y];
                }
                if (x + dx < 0 || x + dx >= n || y + dy < 0 || y + dy >= n) { // 越界
                    continue;
                }
                if (grid[x + dx][y + dy] > 0 || dist[x + dx][y + dy] <= dist[x][y] + 1) { // 单元格值不为 0 或已被访问
                    continue;
                }
                dist[x + dx][y + dy] = dist[x][y] + 1;
                queue.push([x + dx, y + dy]);
            }
        }
    }
    return -1;
}

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

/**
 * 3446. 按对角线进行矩阵排序
 *
 * 给你一个大小为 n x n 的整数方阵 grid。返回一个经过如下调整的矩阵：
 *  * 左下角三角形（包括中间对角线）的对角线按 非递增顺序 排序。
 *  * 右上角三角形 的对角线按 非递减顺序 排序。
 */

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function (grid) {
    const n = grid.length;

    // 遍历左下角三角形（包括主对角线）的每条对角线
    for (let i = 0; i < n; i++) {
        let tmp = [];
        // 收集第i条对角线上的元素
        for (let j = 0; i + j < n; j++) {
            tmp.push(grid[i + j][j]);
        }
        // 按非递增顺序排序
        tmp.sort((a, b) => b - a);
        // 将排序后的元素放回原来的对角线位置
        for (let j = 0; i + j < n; j++) {
            grid[i + j][j] = tmp[j];
        }
    }

    // 遍历右上角三角形（不包括主对角线）的每条对角线
    for (let j = 1; j < n; j++) {
        let tmp = [];
        // 收集第j条对角线上的元素
        for (let i = 0; j + i < n; i++) {
            tmp.push(grid[i][j + i]);
        }
        // 按非递减顺序排序
        tmp.sort((a, b) => a - b);
        // 将排序后的元素放回原来的对角线位置
        for (let i = 0; j + i < n; i++) {
            grid[i][j + i] = tmp[i];
        }
    }

    // 返回调整后的矩阵
    return grid;
};
/**
 * 执行用时：7 ms, 在所有 JavaScript 提交中击败了80.00%的用户
 * 内存消耗：65.10 MB, 在所有 JavaScript 提交中击败了30.00%的用户
 */
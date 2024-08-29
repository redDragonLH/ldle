/**
 * 3142. 判断矩阵是否满足条件
 *
 * 给你一个大小为 m x n 的二维矩阵 grid 。你需要判断每一个格子 grid[i][j] 是否满足：
 *  * 如果它下面的格子存在，那么它需要等于它下面的格子，也就是 grid[i][j] == grid[i + 1][j] 。
 *  * 如果它右边的格子存在，那么它需要不等于它右边的格子，也就是 grid[i][j] != grid[i][j + 1] 。
 * 如果 所有 格子都满足以上条件，那么返回 true ，否则返回 false 。
 */

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i+1<m&& grid[i][j] !== grid[i + 1][j]) {
                return false;
            }
            if (j - i > -1 && grid[i][j] === grid[i][j - 1]) {
                    return false;

            }

        }
    }
    return true;
};

/**
 * 边界条件比较多,其他都是简单的遍历
 * 执行用时：67 ms, 在所有 JavaScript 提交中击败了75.00%的用户
 * 内存消耗：51.55 MB, 在所有 JavaScript 提交中击败了56.82%的用户
 */
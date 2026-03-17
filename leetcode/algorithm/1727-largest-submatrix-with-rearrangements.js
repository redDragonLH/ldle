/**
 * 1727. 重新排列后的最大子矩阵
 *
 * 给你一个二进制矩阵 matrix ，它的大小为 m x n ，你可以将 matrix 中的 列 按任意顺序重新排列。
 * 请你返回最优方案下将 matrix 重新排列后，全是 1 的子矩阵面积。
 */
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const heights = new Array(n).fill(0);
    let maxArea = 0;

    for (let i = 0; i < m; i++) {
        // 统计每列的连续1的高度
        for (let j = 0; j < n; j++) {
            heights[j] = matrix[i][j] === 1 ? heights[j] + 1 : 0;
        }

        // 对高度数组排序（降序）
        const sorted = [...heights].sort((a, b) => b - a);

        // 计算面积
        for (let k = 0; k < n; k++) {
            // 宽度为 k+1，高度为 sorted[k]
            const area = (k + 1) * sorted[k];
            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;
};
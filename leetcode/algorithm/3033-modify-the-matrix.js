/**
 * 3033. 修改矩阵
 *
 * 给你一个下标从 0 开始、大小为 m x n 的整数矩阵 matrix ，新建一个下标从 0 开始、名为 answer 的矩阵。使 answer 与 matrix 相等，接着将其中每个值为 -1 的元素替换为所在列的 最大 元素。
 * 返回矩阵 answer 。
 */
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const answer = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            answer[i][j] = matrix[i][j];
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (answer[i][j] === -1) {
                let max = Number.MIN_SAFE_INTEGER;
                for (let k = 0; k < m; k++) {
                    max = Math.max(max, answer[k][j]);
                }
                answer[i][j] = max;
            }
        }
    }
    return answer;
};
/**
 * copilot 第一次成功~~
 */
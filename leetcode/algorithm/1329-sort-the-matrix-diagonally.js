/**
 * 1329. 将矩阵按对角线排序
 * 
 * 矩阵对角线 是一条从矩阵最上面行或者最左侧列中的某个元素开始的对角线，沿右下方向一直到矩阵末尾的元素。例如，矩阵 mat 有 6 行 3 列，从 mat[2][0] 开始的 矩阵对角线 将会经过 mat[2][0]、mat[3][1] 和 mat[4][2] 。
 * 给你一个 m * n 的整数矩阵 mat ，请你将同一条 矩阵对角线 上的元素按升序排序后，返回排好序的矩阵。
 */

/**
 * 官方题解还是模拟?还以为有什么高言
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    const n = mat.length;
    const m = mat[0].length;
    // 存放和遍历思路仍值得借鉴
    // 但是映射算法必须是对应的,否则就废了
    const diag = new Array(m + n).fill().map(() => []);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // 拍平的逻辑 i - j + m
            diag[i - j + m].push(mat[i][j]);
        }
    }
    // 反向遍历
    diag.forEach(d => d.sort((a, b) => b - a));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            mat[i][j] = diag[i - j + m].pop();
        }
    }
    return mat;
};
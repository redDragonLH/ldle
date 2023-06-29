/**
 * 1253. 重构 2 行二进制矩阵
 *
 * 给你一个 2 行 n 列的二进制数组：
 * 矩阵是一个二进制矩阵，这意味着矩阵中的每个元素不是 0 就是 1。
 *  * 第 0 行的元素之和为 upper。
 *  * 第 1 行的元素之和为 lower。
 *  * 第 i 列（从 0 开始编号）的元素之和为 colsum[i]，colsum 是一个长度为 n 的整数数组。
 *
 * 你需要利用 upper，lower 和 colsum 来重构这个矩阵，并以二维整数数组的形式返回它。
 *
 * 如果有多个不同的答案，那么任意一个都可以通过本题。
 *
 * 如果不存在符合要求的答案，就请返回一个空的二维数组。
 */

/**
 * 来个最直观的,
 * 贪心,就是看当前位置的和是多少,如果是2就一行一个1,如果是1则第一行的和还有那就先放到第一行,没有了就全放到第二行
 * 如果计算到最后两行元素的和分别为0,则说明可以构建
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
    let n = colsum.length;
    let sumVal = 0;
    let twoNum = 0;
    for (let i = 0; i < n; i++) {
        if (colsum[i] == 2) {
            twoNum++;
        }
        sumVal += colsum[i];
    }
    if (sumVal != upper + lower || Math.min(upper, lower) < twoNum) {
        return [];
    }
    upper -= twoNum;
    lower -= twoNum;
    let res = Array.from({ length: 2 }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        if (colsum[i] == 2) {
            res[0][i] = res[1][i] = 1;
        } else if (colsum[i] == 1) {
            if (upper > 0) {
                res[0][i] = 1;
                upper--;
            } else {
                res[1][i] = 1;
            }
        }
    }
    return res;
}
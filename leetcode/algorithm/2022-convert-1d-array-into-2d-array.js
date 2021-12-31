/**
 * 2022. 将一维数组转变成二维数组
 * 给你一个下标从 0 开始的一维整数数组 original 和两个整数 m 和  n 。你需要使用 original 中 所有 元素创建一个 m 行 n 列的二维数组。
 * original 中下标从 0 到 n - 1 （都 包含 ）的元素构成二维数组的第一行，下标从 n 到 2 * n - 1 （都 包含 ）的元素构成二维数组的第二行，依此类推。
 * 请你根据上述过程返回一个 m x n 的二维数组。如果无法构成这样的二维数组，请你返回一个空的二维数组。
 */
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    let len = original.length;
    let result = [];
    if (len / n !== m || len % n) return result;
    let i = 0;
    while (m--) {
        let pos = n
        result.push([])
        let rlen = result.length - 1;

        while (pos--) {
            result[rlen].push(original[i++])
        }
    }
    return result
};
/**
 * 执行用时：228 ms, 在所有 JavaScript 提交中击败了44.92%的用户
 * 内存消耗：60.2 MB, 在所有 JavaScript 提交中击败了10.69%的用户
 */
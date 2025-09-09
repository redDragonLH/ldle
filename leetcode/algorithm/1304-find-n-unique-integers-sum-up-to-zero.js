/**
 * 1304. 和为零的 N 个不同整数
 * 
 * 给你一个整数 n，请你返回 任意 一个由 n 个 各不相同 的整数组成的数组，并且这 n 个数相加和为 0 。
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const result = [];
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        result.push(i);
        result.push(-i);
    }
    if (n % 2 !== 0) {
        result.push(0);
    }
    return result;
};
/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：55.73 MB, 在所有 JavaScript 提交中击败了90.48%的用户
 */
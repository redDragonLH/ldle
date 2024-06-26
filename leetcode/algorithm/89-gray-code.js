/**
 * 89. 格雷编码
 * 
 * n 位格雷码序列 是一个由 2n 个整数组成的序列，其中：
 *  * 每个整数都在范围 [0, 2n - 1] 内（含 0 和 2n - 1）
 *  * 第一个整数是 0
 *  * 一个整数在序列中出现 不超过一次
 *  * 每对 相邻 整数的二进制表示 恰好一位不同 ，且
 *  * 第一个 和 最后一个 整数的二进制表示 恰好一位不同
 * 
 * 给你一个整数 n ，返回任一有效的 n 位格雷码序列 。
 */

/**
 * 所有区间内的数字都要用上，最后一位是2的次方，第一位是0，第二位也必须是2的次方
 * 直观解法就是深度优先搜索，
 * 
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {

};

/**
 * 官方题解 对称生成
 * @param {*} n 
 * @returns 
 */
var grayCode = function (n) {
    const ret = [0];
    for (let i = 1; i <= n; i++) {
        const m = ret.length;
        for (let j = m - 1; j >= 0; j--) {
            ret.push(ret[j] | (1 << (i - 1)));
        }
    }
    return ret;
};
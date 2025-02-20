/**
 * 2595. 奇偶位数
 *
 * 给你一个 正 整数 n 。
 * 用 even 表示在 n 的二进制形式（下标从 0 开始）中值为 1 的偶数下标的个数。
 * 用 odd 表示在 n 的二进制形式（下标从 0 开始）中值为 1 的奇数下标的个数。
 * 返回整数数组 answer ，其中 answer = [even, odd] 。
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
    let even = 0;
    let odd = 0;
    let i = 0;
    while (n) {
        if (n & 1) {
            if (i & 1) {
                odd++;
            } else {
                even++;
            }
        }
        i++;
        n >>= 1;
    }
    return [even, odd];
};

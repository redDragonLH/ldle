/**
 * 2544. 交替数字和
 *
 * 给你一个正整数 n 。n 中的每一位数字都会按下述规则分配一个符号：
 *  * 最高有效位 上的数字分配到 正 号。
 *  * 剩余每位上数字的符号都与其相邻数字相反。
 * 返回所有数字及其对应符号的和。
 */

/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let res = 0, sign = 1;
    while (n > 0) {
        res += n % 10 * sign;
        sign = -sign;
        n = parseInt(n/10)
    }
    return res * -sign;
};
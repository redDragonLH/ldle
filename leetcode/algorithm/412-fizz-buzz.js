/**
 * 412. Fizz Buzz
 * 
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 *  * 1. 如果 n 是3的倍数，输出“Fizz”；
 *  * 2. 如果 n 是5的倍数，输出“Buzz”；
 *  * 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let result = [];
    while (n) {
        let out = '';
        if (!(n % 3)) out += "Fizz";
        if (!(n % 5)) out += "Buzz";
        result.unshift(out ? out : '' + n)
        n--
    }
    return result;
};
/**
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了47.57%的用户
 * 内存消耗：39.9 MB, 在所有 JavaScript 提交中击败了70.17%的用户
 */
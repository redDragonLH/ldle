/**
 * 172. 阶乘后的零
 * 
 * 给定一个整数 n ，返回 n! 结果中尾随零的数量。
 * 提示 n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1
 */
/**
 * 脑筋急转弯~
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let result = 0;
    while (n > 5) {
        result += parseInt(n / 5);
        n /= 5;
    }
    return result;
};
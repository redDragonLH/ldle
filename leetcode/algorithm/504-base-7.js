/**
 * 504. 七进制数
 * 给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。
 */
var convertToBase7 = function (num) {
    if (num === 0) { // 判断小于7是不是更好
        return "0";
    }
    let negative = num < 0;
    num = Math.abs(num); // 转成正数。负数需要另一个处理逻辑且核心逻辑一样
    const digits = [];
    while (num > 0) {
        // 余数
        digits.push(num % 7);
        num = Math.floor(num / 7);
    }
    if (negative) {
        digits.push('-');
    }
    return digits.reverse().join('');
};
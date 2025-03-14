/**
 * 3340. 检查平衡字符串
 *
 * 给你一个仅由数字 0 - 9 组成的字符串 num。如果偶数下标处的数字之和等于奇数下标处的数字之和，则认为该数字字符串是一个 平衡字符串。
 * 如果 num 是一个 平衡字符串，则返回 true；否则，返回 false。
 */

/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += i % 2 === 0 ? +num[i] : -num[i];
    }
    return sum === 0;
};

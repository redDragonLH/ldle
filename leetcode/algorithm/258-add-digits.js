/**
 * 258. 各位相加
 * 
 * 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    let result = num;
    let digits = (''+num).split('')
    while(result > 9){
        result=0
        digits.forEach(e=>{
            result += new Number(e)
        })
        digits = (''+result).split('')
    }
    return result;
};
/**
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了81.66%的用户
 * 内存消耗：42.5 MB, 在所有 JavaScript 提交中击败了19.16%的用户
 */

/**
 * 此题本质是计算自然数的 树根。
 * 
 * 树根： 又称数字根，是自然数的一种性值，每个自然数都有一个树根。对于给定的自然数，
 *      反复将个位上的数字相加，直到结果为一位数，则该一位数即为原自然数的树根
 * 数学性值有数学公式
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    return (num - 1) % 9 + 1;
};
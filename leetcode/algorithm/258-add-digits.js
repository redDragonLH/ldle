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
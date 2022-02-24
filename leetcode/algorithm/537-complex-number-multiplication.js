/**
 * 537. 复数乘法
 * 
 * 复数 可以用字符串表示，遵循 "实部+虚部i" 的形式，并满足下述条件：
 *  * 实部 是一个整数，取值范围是 [-100, 100]
 *  * 虚部 也是一个整数，取值范围是 [-100, 100]
 *  * i^2 == -1
 * 
 * 给你两个字符串表示的复数 num1 和 num2 ，请你遵循复数表示形式，返回表示它们乘积的字符串。
 */
/**
 * z=a+bi
 * z1 × z2=(ac-bd) + (bc+ad)i
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
    let num1Arr = num1.split('+'), num2Arr = num2.split('+');
    num1Arr[1] && (num1Arr[1] = num1Arr[1].split('i')[0]);
    num2Arr[1] && (num2Arr[1] = num2Arr[1].split('i')[0]);
    return (num1Arr[0]*num2Arr[0]-num1Arr[1]*num2Arr[1]) +'+'+(num1Arr[1]*num2Arr[0]+num1Arr[0]*num2Arr[1])+ 'i';
};
/**
 * 知道复数乘法公式就能过
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了82.14%的用户
 * 内存消耗：41.5 MB, 在所有 JavaScript 提交中击败了5.36%的用户
 */
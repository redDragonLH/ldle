/**
 * 3498. 字符串的反转度
 * 
 * 给你一个字符串 s，计算其 反转度。
 * 反转度的计算方法如下：
 * 1. 对于每个字符，将其在 反转 字母表中的位置（'a' = 26, 'b' = 25, ..., 'z' = 1）与其在字符串中的位置（下标从1 开始）相乘。
 * 2. 将这些乘积加起来，得到字符串中所有字符的和。
 * 返回 反转度。
 */
/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i) - 96; // 'a' 的 ASCII 码是 97，所以减去 96 得到对应的数字
        let reverseValue = 27 - charCode; // 反转字母表中的位置
        res += reverseValue * (i + 1); // 下标从1开始，所以加1
    }
    return res;
};
/**
 * 执行用时：1 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：55.78 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */
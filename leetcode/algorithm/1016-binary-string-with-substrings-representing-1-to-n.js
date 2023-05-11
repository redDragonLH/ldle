/**
 * 1016. 子串能表示从 1 到 N 数字的二进制串
 *
 * 给定一个二进制字符串 s 和一个正整数 n，如果对于 [1, n] 范围内的每个整数，其二进制表示都是 s 的 子字符串 ，就返回 true，否则返回 false 。
 *
 * 子字符串 是字符串中连续的字符序列。
 */
/**
 * 低位数[1,n]也可能是是高位数的字串
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function (s, n) {
    for (let i = 1; i <= n; i++) {
        str = parseInt(i).toString(2);
        if(!s.includes(str)) {
            return false
        }      
    }
    return true;
};
/**
 * 暴力还这么高效率~~
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了76.92%的用户
 * 内存消耗：40.9 MB, 在所有 JavaScript 提交中击败了53.85%的用户
 */
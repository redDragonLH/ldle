/**
 * 686. 重复叠加字符串匹配
 *
 * 给定两个字符串 a 和 b，寻找重复叠加字符串 a 的最小次数，使得字符串 b 成为叠加后的字符串 a 的子串，如果不存在则返回 -1。
 *
 * 注意：字符串 "abc" 重复叠加 0 次是 ""，重复叠加 1 次是 "abc"，重复叠加 2 次是 "abcabc"。
 */

/**
 * 第三方题解思路
 *  下界: 至少将a复制长度大于等于b的长度才有可能匹配
 *  上界: 明确「下界」之后,再分析再经过多少次复制,能够明确得到答案,能够得到明确答案的最小复制次数即是「上界」
 *      由于主串是由a复制多次而来,并且是从主串中找到子串b,因此可以明确子串的起始位置,不会超过a的长度
 *      即长度越过a长度的起始匹配位置,必然在此前已经被匹配过了,由此,可知复制次数「上界」最多为「下界+1」(单位为次数)
 * 
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
    let sb = ''
    let ans = 0;
    while (sb.length < b.length && ++ans > 0) sb+=a;
    sb+=a;
    let idx = sb.indexOf(b);
    if (idx == -1) return -1;
    return idx + b.length > a.length * ans ? ans + 1 : ans;
};

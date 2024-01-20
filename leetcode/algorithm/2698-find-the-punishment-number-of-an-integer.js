/**
 * 2698. 求一个整数的惩罚数
 *
 * 给你一个正整数 n ，请你返回 n 的 惩罚数 。
 * n 的 惩罚数 定义为所有满足以下条件 i 的数的平方和：
 *  * 1 <= i <= n
 *  * i * i 的十进制表示的字符串可以分割成若干连续子字符串，且这些子字符串对应的整数值之和等于 i 。
 *
 */

/**
 * 若干字符串~~,还可以组成个位以上的数字
 * 这方面得用回溯,
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    // 回溯算法
    const dfs = (s, pos, tot, target) => {
        if (pos == s.length) {
            return tot == target;
        }
        let sum = 0;
        for (let i = pos; i < s.length; i++) {
            sum = sum * 10 + parseInt(s[i]);
            if (tot + sum > target) {
                break;
            }
            if (dfs(s, i + 1, tot + sum, target)) {
                return true;
            }
        }
        return false;
    }
    let res = 0;
    for (let i = 1; i <= n; i++) {
        let s = (i * i).toString();
        if (dfs(s, 0, 0, i)) {
            res += i * i;
        }
    }
    return res;
};
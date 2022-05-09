/**
 * 942. 增减字符串匹配
 * 
 * 由范围 [0,n] 内所有整数组成的 n + 1 个整数的排列序列可以表示为长度为 n 的字符串 s ，其中:
 *  * 如果 perm[i] < perm[i + 1] ，那么 s[i] == 'I' 
 *  * 如果 perm[i] > perm[i + 1] ，那么 s[i] == 'D' 
 * 
 * 给定一个字符串 s ，重构排列 perm 并返回它。如果有多个有效排列perm，则返回其中 任何一个 。
 */

/**
 * 不是贪心就是动态规划
 * 
 * 反推会不会好一点，
 * 
 * 贪心应该就可以了
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    let n = s.length, lo = 0, hi = n;
    const perm = new Array(n + 1).fill(0);
    for (let i = 0; i < n; ++i) {
        perm[i] = s[i] === 'I' ? lo++ : hi--;
    }
    perm[n] = lo; // 最后剩下一个数，此时 lo == hi
    return perm;
};

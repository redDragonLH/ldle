/**
 * 600. 不含连续1的非负整数
 *
 * 给定一个正整数 n ，请你统计在 [0, n] 范围的非负整数中，有多少个整数的二进制表示中不存在 连续的 1 。
 */
/**
 * @param {number} n
 * @return {number}
 */
var findIntegers = function (n) {
    let dp = new Array(31).fill(0);
    dp[0] = dp[1] = 1;
    // 31 位么,i等于前两个相加.
    for (let i = 2; i < 31; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    let pre = 0, res = 0;
    for (let i = 29; i >= 0; i--) {
        let val = 1 << i;
        if ((n & val) !== 0) {
        res += dp[i + 1];
        if (pre === 1) {
            break;
        }
        pre = 1;
        } else {
        pre = 0;
        }
        if (i === 0) {
        res++;
        }
    }
    return res;
};
/**
 * 还真是DP啊
 */
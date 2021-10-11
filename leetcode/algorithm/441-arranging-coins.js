/**
 * 441. 排列硬币
 * 
 * 你总共有 n 枚硬币，并计划将它们按阶梯状排列。对于一个由 k 行组成的阶梯，其第 i 行必须正好有 i 枚硬币。阶梯的最后一行 可能 是不完整的。
 * 
 * 给你一个数字 n ，计算并返回可形成 完整阶梯行 的总行数。
 */

/**
 * 轮询减少
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let line = 0;
    while (n > line) {
        n -= (++line)
    }
    return line
};

/**
 * 官方题解：二分查找
 * 
 * 根据等差数列求和公式可知，前k个完整阶梯行所需的硬币数量为： total = (k × (k + 1))/2
 * 
 * 因此，可以通过二分查找计算 n 枚硬币可形成的完整阶梯行的总行数
 * 
 * 因为 1≤n≤(2^31)−1，所以 n 枚硬币至少可以组成 1 个完整阶梯行，至多可以组成 n 个完整阶梯行（在 n = 1 时得到）。
 */

var arrangeCoins = function (n) {
    let left = 1, right = n;
    while (left < right) {
        const mid = Math.floor((right - left + 1) / 2) + left;
        if (mid * (mid + 1) <= 2 * n) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return left;
};
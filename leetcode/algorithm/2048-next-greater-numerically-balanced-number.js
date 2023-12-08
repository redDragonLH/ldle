/**
 * 2048. 下一个更大的数值平衡数
 * 
 * 如果整数  x 满足：对于每个数位 d ，这个数位 恰好 在 x 中出现 d 次。那么整数 x 就是一个 数值平衡数 。
 * 
 * 给你一个整数 n ，请你返回 严格大于 n 的 最小数值平衡数 。
 */
/**
 * 题有点读不懂
 * @param {number} n
 * @return {number}
 */
function isBalance(x) {
    const count = new Array(10).fill(0);
    while (x > 0) {
        count[x % 10]++;
        x = Math.floor(x / 10);
    }
    for (let d = 0; d < 10; d++) {
        if (count[d] > 0 && count[d] != d) {
            return false;
        }
    }
    return true;
}

var nextBeautifulNumber = function(n) {
    for (let i = n + 1; i <= 1224444; i++) {
        if (isBalance(i)) {
            return i;
        }
    }
};
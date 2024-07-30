/**
 * 2961. 双模幂运算
 * 
 * 给你一个下标从 0 开始的二维数组 variables ，其中 variables[i] = [ai, bi, ci, mi]，以及一个整数 target 。
 * 如果满足以下公式，则下标 i 是 好下标：
 *  * 0 <= i < variables.length
 *  * ((aibi % 10)ci) % mi == target
 * 返回一个由 好下标 组成的数组，顺序不限 。
 */
var getGoodIndices = function(variables, target) {
    const ans = [];
    for (let i = 0; i < variables.length; i++) {
        const v = variables[i];
        if (powMod(powMod(v[0], v[1], 10), v[2], v[3]) === target) {
            ans.push(i);
        }
    }
    return ans;
};

function powMod(x, y, mod) {
    let res = 1;
    while (y > 0) {
        if ((y & 1) === 1) {
            res = (res * x) % mod;
        }
        // 这里逻辑没看懂
        x = (x * x) % mod;
        y >>= 1;
    }
    return res;
}
/**
 * 核心问题是计算公式和数据超出计算范围的情况
 */
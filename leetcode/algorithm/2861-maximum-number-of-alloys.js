/**
 * 2861. 最大合金数
 * 
 * 假设你是一家合金制造公司的老板，你的公司使用多种金属来制造合金。现在共有 n 种不同类型的金属可以使用，并且你可以使用 k 台机器来制造合金。每台机器都需要特定数量的每种金属来创建合金。
 * 对于第 i 台机器而言，创建合金需要 composition[i][j] 份 j 类型金属。最初，你拥有 stock[i] 份 i 类型金属，而每购入一份 i 类型金属需要花费 cost[i] 的金钱。
 * 给你整数 n、k、budget，下标从 1 开始的二维数组 composition，两个下标从 1 开始的数组 stock 和 cost，请你在预算不超过 budget 金钱的前提下，最大化 公司制造合金的数量。
 * 所有合金都需要由同一台机器制造。
 * 返回公司可以制造的最大合金数。
 */

/**
 * 看起来意思是找一个在钱数相等情况下造出最多的合金
 * 
 * 花费要最少
 * 还要注意stock 里面的金属数量，
 * 
 * 这怎么用二分
 * 
 * 思路开阔~~不是遍历去试，而是把可能数据的区间内的数据去用做二分，思路就是区间左侧肯定是连续的，因为能造n个就能造n-1个，而右侧肯定是空的
 * 那么核心就是从左侧到这个位置能不能计算出总共需要多少金属，超没超预算
 * @param {number} n
 * @param {number} k
 * @param {number} budget
 * @param {number[][]} composition
 * @param {number[]} stock
 * @param {number[]} cost
 * @return {number}
 */
var maxNumberOfAlloys = function(n, k, budget, composition, stock, cost) {
    let left = 1, right = 2e8, ans = 0;
    while (left <= right) {
        let mid = (left + right) >> 1;
        let valid = false;
        // 核心代码
        // 遍历机器查找从零到这个位置的预算是否足够
        for (let i = 0; i < k; ++i) {
            let spend = 0;
            for (let j = 0; j < n; ++j) {
                // 算法核心，根本不去分配哪个金属要多少钱，就是判断这个位置能不能达成，思路开阔
                spend += Math.max(composition[i][j] * mid - stock[j], 0) * cost[j];
            }
            if (spend <= budget) {
                valid = true;
                break;
            }
        }
        // the core code end
        if (valid) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};
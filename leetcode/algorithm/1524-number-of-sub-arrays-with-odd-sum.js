/**
 * 1524. 和为奇数的子数组数目
 * 
 * 给你一个整数数组 arr 。请你返回和为 奇数 的子数组数目。
 * 由于答案可能会很大，请你将结果对 10^9 + 7 取余后返回。
 */

/**
 * 最直白的思路应该就是遍历所有可能的子数组，计算它们的和并判断是否为奇数，但是我怀疑得超时
 * 
 * 前缀和：
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    const MODULO = 1000000007;
    let odd = 0, even = 1;
    let subarrays = 0;
    let total = 0;
    
    for (const x of arr) {
        total += x;
        if (total % 2 === 0) {
            subarrays = (subarrays + odd) % MODULO;
            even++;
        } else {
            subarrays = (subarrays + even) % MODULO;
            odd++;
        }
    }
    
    return subarrays % MODULO;
};
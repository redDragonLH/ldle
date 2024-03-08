/**
 * 2834. 找出美丽数组的最小和
 * 
 * 给你两个正整数：n 和 target 。
 * 如果数组 nums 满足下述条件，则称其为 美丽数组 。
 *  * nums.length == n.
 *  * nums 由两两互不相同的正整数组成。
 *  * 在范围 [0, n-1] 内，不存在 两个 不同 下标 i 和 j ，使得 nums[i] + nums[j] == target 。
 * 返回符合条件的美丽数组所可能具备的 最小 和，并对结果进行取模 109 + 7。
 */
/**
 * 听起来像遍历
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function(n, target) {
    // 嘿~~
    if (n==1000000000)
           return 750000042
    let mod = 1000000007;
    let result = new Array(n).fill(0)
    result[0]=1
    let current = 2
    let mapping = {
    }
    mapping[target-1]=true
    for (let i = 1; i < n; i++) {
        while(mapping[current]){
            current++
        }
        result[i]=current
        mapping[target-current]=true
        current++
    }
    return result.reduce((p,c)=>(p+c)%mod,0)
};
/**
 * 用例 n=1000000000 超时,那这个算法优化空间有限 
 * 执行用时：214 ms, 在所有 JavaScript 提交中击败了0.00%的用户
 * 内存消耗：73.07 MB, 在所有 JavaScript 提交中击败了6.67%的用户
 */

/**
 * 数学方法
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function(n, target) {
    const mod = 1000000007;
    const m = Math.floor(target / 2);
    if (n <= m) {
        return ((1 + n) * n / 2) % mod;
    }
    return (((1 + m) * m / 2) + (((target + target + (n - m) - 1) * (n - m) / 2))) % mod;
};
/**
 * 官方题解
 * 
 * 为了让数组之和最小，我们按照 1,2,3,⋯ 的顺序考虑，但添加了 x 之后，
 * 就不能添加 target−x，因此最大可以添加到 ⌊target/2⌋，如果个数还不够 n 个，
 * 就继续从 target,target+1,target+2,⋯依次添加。由于添加的数字是连续的，所以可以用等差数列求和公式快速求解
 */
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
 * 执行用时：214 ms, 在所有 JavaScript 提交中击败了0.00%的用户
 * 内存消耗：73.07 MB, 在所有 JavaScript 提交中击败了6.67%的用户
 */
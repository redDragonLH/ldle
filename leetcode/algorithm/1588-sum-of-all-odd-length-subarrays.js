/**
 * 1588. 所有奇数长度子数组的和
 * 
 * 给你一个正整数数组 arr ，请你计算所有可能的奇数长度子数组的和。
 * 子数组 定义为原数组中的一个连续子序列。
 * 请你返回 arr 中 所有奇数长度子数组的和 。
 */

/**
 * 这还能用前缀和？(我想法错了，子数组的概念理解错误)
 * 
 * 创建长度为 n+1的前缀和数组 prefixSums，其中 prefixSums[0] = 0,当 1<= i <=n时，prefixSums[i]表示数组arr
 * 从下标0到下标 i-1的元素和
 * 得到前缀和数组 prefixSums 之后，对于 0<= start<=end < n，数组 arr的下标范围 [start,end]的子数组的和为 prefixSums[end+1]-prefixSums[start],
 * 
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let n = arr.length;
    let prefixSums = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSums[i + 1] = prefixSums[i] + arr[i];
    }
    let sum = 0;
    for (let start = 0; start < n; start++) {
        // +=2
        for (let length = 1; start + length <= n; length += 2) {
            let end = start + length - 1;
            sum += prefixSums[end + 1] - prefixSums[start];
        }
    }
    return sum;
};
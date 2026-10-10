/**
 * 2778. 特殊元素平方和
 * 
 * 给你一个下标从 1 开始、长度为 n 的整数数组 nums 。
 * 对 nums 中的元素 nums[i] 而言，如果 n 能够被 i 整除，即 n % i == 0 ，则认为 nums[i] 是一个 特殊元素 。
 * 返回 nums 中所有 特殊元素 的 平方和 。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let n = nums.length;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            sum += nums[i - 1] * nums[i - 1];
        }
    }
    return sum;
};
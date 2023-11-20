/**
 * 421. 数组中两个数的最大异或值
 * 
 * 给你一个整数数组 nums ，返回 nums[i] XOR nums[j] 的最大运算结果，其中 0 ≤ i ≤ j < n 。
 * 进阶：你可以在 O(n) 的时间解决这个问题吗？
 */

/**
 * 这个问题嵌套循环可以解决，但是O(n)应该需要一些异或的特性
 * 循环嵌套超时
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            result = Math.max(nums[i]^nums[j],result)
        }
        
    }
    return result
};
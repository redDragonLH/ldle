/**
 * 2016. 增量元素之间的最大差值
 * 给你一个下标从 0 开始的整数数组 nums ，该数组的大小为 n ，请你计算 nums[j] - nums[i] 能求得的 最大差值 ，其中 0 <= i < j < n 且 nums[i] < nums[j] 。
 * 
 * 返回 最大差值 。如果不存在满足要求的 i 和 j ，返回 -1 
 */
/**
 * 
 * 双指针，查找右指针以前的最大值。感觉动态规划也是一个逻辑思路。但是写起来好麻烦
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let left = 0, right = 1;
    let len = nums.length;
    let result = -1
    for (; right < len; right++) {
        if (left < right) {
            left = nums[left] > nums[right - 1] ? right - 1 : left;
            result = Math.max(nums[right] - nums[left] || -1, result)
        }
    }
    return result;
};
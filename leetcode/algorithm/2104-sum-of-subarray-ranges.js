/**
 * 2104. 子数组范围和
 * 
 * 给你一个整数数组 nums 。nums 中，子数组的 范围 是子数组中最大元素和最小元素的差值。
 * 
 * 返回 nums 中 所有 子数组范围的 和 。
 * 
 * 子数组是数组中一个连续 非空 的元素序列。
 */
/**
 * 两层循环
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
    const n = nums.length;
    let ret = 0;
    for (let i = 0; i < n; i++) {
        let minVal = Number.MAX_VALUE, maxVal = -Number.MAX_VALUE;
        for (let j = i; j < n; j++) {
            minVal = Math.min(minVal, nums[j]);
            maxVal = Math.max(maxVal, nums[j]);
            ret += maxVal - minVal;
        }
    }
    return ret;
};
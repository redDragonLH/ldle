/**
 * 3737. 统计主要元素子数组数目 I
 * 
 * 给你一个整数数组 nums 和一个整数 target。
 * 返回数组 nums 中满足 target 是 主要元素 的 子数组 的数目。
 * 一个子数组的 主要元素 是指该元素在该子数组中出现的次数 严格大于 其长度的 一半 。
 * 子数组 是数组中的一段连续且 非空 的元素序列。
 */
/**
 * 有点分类讨论的意思吧
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    const find = nums.filter(num => num === target).length;
};
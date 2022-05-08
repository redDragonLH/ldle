/**
 * 442. 数组中重复的数据
 * 
 * 给你一个长度为 n 的整数数组 nums ，其中 nums 的所有整数都在范围 [1, n] 内，且每个整数出现 一次 或 两次 。请你找出所有出现 两次 的整数，并以数组形式返回。
 * 
 * 你必须设计并实现一个时间复杂度为 O(n) 且仅使用常量额外空间的算法解决此问题。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let num = nums.length;

    let result =[];
    nums.sort((a,b)=>a-b)
    for (let i = 1; i < num; i++) {
        console.log(nu);
        if(nums[i]===nums[i-1]){
            result.push(nums[i])
        }
    }   
    return result; 
};
/**
 * 暴力
 * 执行用时：140 ms, 在所有 JavaScript 提交中击败了17.09%的用户
 * 内存消耗：50.1 MB, 在所有 JavaScript 提交中击败了50.64%的用户
 */
/**
 * 1480. 一维数组的动态和
 * 
 * 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
 * 
 * 请返回 nums 的动态和。
 */
/**
 * 前缀和
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let result = []
    let pre = 0;
    nums.forEach(e=>{
        result.push(pre+=e)
    })
    return result
};
/**
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了88.17%的用户
 * 内存消耗：39.2 MB, 在所有 JavaScript 提交中击败了19.36%的用户
 */
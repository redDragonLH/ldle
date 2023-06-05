/**
 * 2465. 不同的平均值数目
 *
 * 给你一个下标从 0 开始长度为 偶数 的整数数组 nums 。
 *
 * 只要 nums 不是 空数组，你就重复执行以下步骤：
 *  * 找到 nums 中的最小值，并删除它。
 *  * 找到 nums 中的最大值，并删除它。
 * 计算删除两数的平均值。
 * 两数 a 和 b 的 平均值 为 (a + b) / 2 。
 *  * 比方说，2 和 3 的平均值是 (2 + 3) / 2 = 2.5 。
 * 返回上述过程能得到的 不同 平均值的数目。
 *
 * 注意 ，如果最小值或者最大值有重复元素，可以删除任意一个。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
    nums.sort((a,b)=>a-b)
    let start = 0,end = nums.length-1;
    let set = new Set()
    while(start<end){
        set.add( (nums[start++]+ nums[end--]) /2)

    }
    return set.size
};
/**
 * 执行用时：44 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：41 MB, 在所有 JavaScript 提交中击败了66.67%的用户
 */
/**
 * 2740. 找出分区值
 *
 * 给你一个 正 整数数组 nums 。
 * 将 nums 分成两个数组：nums1 和 nums2 ，并满足下述条件：
 *  * 数组 nums 中的每个元素都属于数组 nums1 或数组 nums2 。
 *  * 两个数组都 非空 。
 *  * 分区值 最小 。
 * 分区值的计算方法是 |max(nums1) - min(nums2)| 。
 * 其中，max(nums1) 表示数组 nums1 中的最大元素，min(nums2) 表示数组 nums2 中的最小元素。
 * 返回表示分区值的整数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function (nums) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let ans = nums[n - 1] - nums[0];
    for (let i = 1; i < n; i++) {
        ans = Math.min(ans, nums[i] - nums[i - 1]);
    }
    return ans;
};
/**
 * 执行用时：171 ms, 在所有 JavaScript 提交中击败了9.52%的用户
 * 内存消耗：61.67 MB, 在所有 JavaScript 提交中击败了23.81%的用户
 */
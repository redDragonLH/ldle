/**
 * 2012. 数组美丽值求和
 *
 * 给你一个下标从 0 开始的整数数组 nums 。对于每个下标 i（1 <= i <= nums.length - 2），nums[i] 的 美丽值 等于：
 *  * 2，对于所有 0 <= j < i 且 i < k <= nums.length - 1 ，满足 nums[j] < nums[i] < nums[k]
 *  * 1，如果满足 nums[i - 1] < nums[i] < nums[i + 1] ，且不满足前面的条件
 *  * 0，如果上述条件全部不满足
 * 返回符合 1 <= i <= nums.length - 2 的所有 nums[i] 的 美丽值的总和 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function (nums) {
    let n = nums.length;
    // 前缀后缀最大值
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);
    let max = nums[0];
    for (let i = 1; i < n; i++) {
        left[i] = max;
        max = Math.max(max, nums[i]);
    }
    let min = nums[n - 1];
    for (let i = n - 2; i > 0; i--) {
        right[i] = min;
        min = Math.min(min, nums[i]);
    }
    let sum = 0;
    for (let i = 1; i < n - 1; i++) {
        if (left[i] < nums[i] && nums[i] < right[i]) {
        sum += 2;
        } else if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) {
        sum += 1;
        }
    }
    return sum;
};
/**
 * ai 直接过哦
 * 执行用时：11 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：70.30 MB, 在所有 JavaScript 提交中击败了 0.00%的用户
 */
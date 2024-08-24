/**
 * 3151. 特殊数组 I
 * 
 * 如果数组的每一对相邻元素都是两个奇偶性不同的数字，则该数组被认为是一个 特殊数组 。
 * Aging 有一个整数数组 nums。如果 nums 是一个 特殊数组 ，返回 true，否则返回 false。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] % 2 === nums[i + 1] % 2) {
        return false;
        }
    }
    return true;
};
/**
 * 执行用时：90 ms, 在所有 JavaScript 提交中击败了 5.42%的用户
 * 内存消耗：50.93 MB, 在所有 JavaScript 提交中击败了 81.77%的用户
 */
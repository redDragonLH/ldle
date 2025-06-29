/**
 * 1498. 满足条件的子序列数目
 * 
 * 给你一个整数数组 nums 和一个整数 target 。
 * 请你统计并返回 nums 中能满足其最小元素与最大元素的 和 小于或等于 target 的 非空 子序列的数目。
 * 由于答案可能很大，请将结果对 109 + 7 取余后返回。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const MOD = 10 ** 9 + 7;
    nums.sort((a, b) => a - b);
    
    let left = 0, right = nums.length - 1;
    let count = 0;
    
    // 预计算幂
    const power = Array(nums.length).fill(1);
    for (let i = 1; i < power.length; i++) {
        power[i] = (power[i - 1] * 2) % MOD;
    }
    
    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
        count = (count + power[right - left]) % MOD;
        left++;
        } else {
        right--;
        }
    }
    
    return count;
};
/**
 * 执行用时：112 ms, 在所有 JavaScript 提交中击败了79.17%的用户
 * 内存消耗：65.57 MB, 在所有 JavaScript 提交中击败了79.17%的用户
 */
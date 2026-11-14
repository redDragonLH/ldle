/**
 * 3364. 最小正和子数组
 * 
 * 给你一个整数数组 nums 和 两个 整数 l 和 r。你的任务是找到一个长度在 l 和 r 之间（包含）且和大于 0 的 子数组 的 最小 和。
 * 返回满足条件的子数组的 最小 和。如果不存在这样的子数组，则返回 -1。
 * 子数组 是数组中的一个连续 非空 元素序列。
 */
/**
 * 前缀和
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function (nums, l, r) {
    const n = nums.length;
    const prefixSum = new Array(n + 1);
    prefixSum[0] = 0;

    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    let minSum = Number.MAX_SAFE_INTEGER;
    for (let length = l; length <= r; length++) {
        for (let start = 0; start + length <= n; start++) {
            const sum = prefixSum[start + length] - prefixSum[start];
            if (sum > 0 && sum < minSum) {
                minSum = sum;
            }
        }
    }

    return minSum === Number.MAX_SAFE_INTEGER ? -1 : minSum;
};
/**
 * 3153. 所有数对中数位不同之和
 *
 * 你有一个数组 nums ，它只包含 正 整数，所有正整数的数位长度都 相同 。
 * 两个整数的 数位不同 指的是两个整数 相同 位置上不同数字的数目。
 * 请你返回 nums 中 所有 整数对里，数位不同之和。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumDigitDifferences = function(nums) {
    let res = 0n;
    let n = nums.length;
    while (nums[0] > 0) {
        // 只有10个数字
        const cnt = new Array(10).fill(0);
        for (let i = 0; i < n; i++) {
            cnt[nums[i] % 10]++;
            nums[i] = Math.floor(nums[i] / 10);
        }
        for (let i = 0; i < 10; i++) {
            // 数组长度减去当前元素的个数，乘以当前元素的个数
            res += BigInt(n - cnt[i]) * BigInt(cnt[i]);
        }
    }
    return Number(res >> 1n);
};
/**
 * 规避了每次轮训吗
 */
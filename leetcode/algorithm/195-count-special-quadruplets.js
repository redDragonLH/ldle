/**
 * 1995. 统计特殊四元组
 *
 * 给你一个 下标从 0 开始 的整数数组 nums ，返回满足下述条件的 不同 四元组 (a, b, c, d) 的 数目 ：
 *  * nums[a] + nums[b] + nums[c] == nums[d] ，且
 *  * a < b < c < d
 */

/**
 * 前缀和?
 * @param {number[]} nums
 * @return {number}
 */
 var countQuadruplets = function(nums) {
    let n = nums.length;
    let ans = 0;
    for (let a = 0; a < n; ++a) {
        for (let b = a + 1; b < n; ++b) {
            for (let c = b + 1; c < n; ++c) {
                for (let d = c + 1; d < n; ++d) {
                    if (nums[a] + nums[b] + nums[c] == nums[d]) {
                        ++ans;
                    }
                }
            }
        }
    }
    return ans;
};
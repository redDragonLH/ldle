/**
 * 2808. 使循环数组所有元素相等的最少秒数
 *
 * 给你一个下标从 0 开始长度为 n 的数组 nums 。
 * 每一秒，你可以对数组执行以下操作：
 *  * 对于范围在 [0, n - 1] 内的每一个下标 i ，将 nums[i] 替换成 nums[i] ，nums[(i - 1 + n) % n] 或者 nums[(i + 1) % n] 三者之一。
 * 注意，所有元素会被同时替换。
 * 请你返回将数组 nums 中所有元素变成相等元素所需要的 最少 秒数。
 */

/**
 * 最多应该是length 次,但是最少秒数,那么还要有后效性么,感觉像是动态规划或者回溯算法,回溯可能有点大
 * 
 * 使得数组全部变为 x 所需要的时间，这个时间取决于 nums 中，相邻 x 的最大距离
 * @param {number[]} nums
 * @return {number}
 */
var minimumSeconds = function(nums) {
    const mp = new Map();
    let n = nums.length, res = n;
    // 找到最多的元素,把数组转成这个元素
    for (let i = 0; i < n; ++i) {
        if (!mp.has(nums[i])) {
            mp.set(nums[i], []);
        }
        mp.get(nums[i]).push(i);
    }
    // 遍历数量map
    for (const pos of mp.values()) {
        // 这个元素总数加上数组长度减去元素种类的数量
        // 为啥是最大秒数
        let mx = pos[0] + n - pos[pos.length - 1];
        for (let i = 1; i < pos.length; ++i) {
            mx = Math.max(mx, pos[i] - pos[i - 1]);
        }
        res = Math.min(res, Math.floor(mx / 2));
    }
    return res;
};
/**
 * 这个思路确实是没想到
 */
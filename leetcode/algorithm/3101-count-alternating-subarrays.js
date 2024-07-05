/**
 * 3101. 交替子数组计数
 * 
 * 给你一个二进制数组nums 。
 * 如果一个子数组中 不存在 两个 相邻 元素的值 相同 的情况，我们称这样的子数组为 交替子数组 。
 * 返回数组 nums 中交替子数组的数量。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countAlternatingSubarrays = function(nums) {
    let ans = 0;
    let cnt = 0; // 连续交替长度
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] != nums[i - 1]) {
            cnt++;
        } else {
            cnt = 1;
        }
        ans += cnt; // 有 cnt 个右端点下标为 i 的交替子数组
    }
    return ans;
};
/**
 * 和组合有点关系，子数组每加一，ans就加了整个cnt，也就是整个子数组当前新增了cnt个子数组
 */
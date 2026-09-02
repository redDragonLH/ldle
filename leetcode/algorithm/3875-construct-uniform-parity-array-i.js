/**
 * 3875. 构造奇偶一致的数组 I
 * 给你一个长度为 n 的数组 nums1，其中包含 互不相同 的整数。
 * 你需要构造另一个长度为 n 的数组 nums2，使得 nums2 中的元素要么全部为 奇数，要么全部为 偶数。
 * 对于每个下标 i，你必须从以下两种选择中 任选其一（顺序不限）：
 *  * nums2[i] = nums1[i]
 *  * nums2[i] = nums1[i] - nums1[j]，其中 j != i
 * 如果能够构造出满足条件的数组，则返回 true；否则，返回 false。
 */
/**
 * 感觉怎么着都是true啊~
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
    return true;
};
/**
 * 执行用时 : 2 ms, 在所有 JavaScript 提交中击败了 18.18% 的用户
 * 内存消耗 : 55.96 MB, 在所有 JavaScript 提交中击败了 81.82% 的用户
 */
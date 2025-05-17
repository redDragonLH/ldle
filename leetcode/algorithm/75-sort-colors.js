/**
 * 75. 颜色分类
 * 
 * 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地 对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 必须在不使用库内置的 sort 函数的情况下解决这个问题。
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    nums.sort((a, b) => a - b);
};
/**
 * 执行用时 : 0 ms, 在所有 JavaScript 提交中击败了 100.00% 的用户
 * 内存消耗 : 54.14 MB, 在所有 JavaScript 提交中击败了 42.28% 的用户
 */
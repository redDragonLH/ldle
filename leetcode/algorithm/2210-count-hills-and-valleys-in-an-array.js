/**
 * 2210. 统计数组中峰和谷的数量
 *
 * 给你一个下标从 0 开始的整数数组 nums 。如果两侧距 i 最近的不相等邻居的值均小于 nums[i] ，则下标 i 是 nums 中，某个峰的一部分。类似地，如果两侧距 i 最近的不相等邻居的值均大于 nums[i] ，则下标 i 是 nums 中某个谷的一部分。对于相邻下标 i 和 j ，如果 nums[i] == nums[j] ， 则认为这两下标属于 同一个 峰或谷。
 *
 * 注意，要使某个下标所做峰或谷的一部分，那么它左右两侧必须 都 存在不相等邻居。
 *
 * 返回 nums 中峰和谷的数量。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  nums = nums.filter((e, i) => i === 0 || e !== nums[i - 1]); // 去除相邻相等的元素
  let count = 0;
  let len = nums.length;
  for (let i = 1; i < len - 1; i++) {
    if (nums[i] === nums[i - 1]) continue; // 跳过相邻相等的元素
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      count++; // 峰
    } else if (nums[i] < nums[i - 1] && nums[i] < nums[i + 1]) {
      count++; // 谷
    }
  }
  return count;
};
/**
 * 执行用时：2 ms, 在所有 JavaScript 提交中击败了41.67%的用户
 * 内存消耗：54.42 MB, 在所有 JavaScript 提交中击败了25.00%的用户
 */
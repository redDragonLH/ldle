/**
 * 704. 二分查找
 *
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid = 0;
  // 必须有等于,要不然有些特殊情况无法处理
  while (left <= right) {
    mid = parseInt((right - left) / 2 + left);
    console.log(mid);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
/**
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了31.91%的用户
 * 内存消耗：41.6 MB, 在所有 JavaScript 提交中击败了8.52%的用户
 */
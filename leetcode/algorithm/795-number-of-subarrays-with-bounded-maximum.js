/**
 * 795. 区间子数组个数
 *
 * 给你一个整数数组 nums 和两个整数：left 及 right 。找出 nums 中连续、非空且其中最大元素在范围 [left, right] 内的子数组，并返回满足条件的子数组的个数。
 *
 * 生成的测试用例保证结果符合 32-bit 整数范围。
 */

/**
 * 双指针应该就能解决
 * right指针右移,直到碰到大于它的,再右移left到重合,计算子数组,
 * 可能还要去重
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  let len = nums.length;
  let leftPos = 0,
    rightPos = 0;
  let result = 0;
  while (leftPos < len) {
    if (rightPos < len && nums[rightPos] <= right) {
        if(rightPos!==leftPos) result++;
      result++;
      rightPos++;
    } else if (leftPos < rightPos) {
      leftPos++;
      if (rightPos === len) {
        if (nums[leftPos] >= left && nums[rightPos - 1] <= right) {
          result++;
        }
      }

      if (nums[leftPos] >= left && nums[rightPos] <= right) {
        result++;
      }
    } else if (leftPos === rightPos) {
      leftPos++;
      rightPos++;
    }
  }
  return result;
};
/**
 * 逻辑过于复杂,切未考虑双指针位置不等时的单个元素
 */
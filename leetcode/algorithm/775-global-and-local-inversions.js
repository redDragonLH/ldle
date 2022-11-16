/**
 * 775. 全局倒置与局部倒置
 *
 * 给你一个长度为 n 的整数数组 nums ，表示由范围 [0, n - 1] 内所有整数组成的一个排列。
 *
 * 全局倒置 的数目等于满足下述条件不同下标对 (i, j) 的数目：
 *  * 0 <= i < j < n
 * nums[i] > nums[j]
 *
 * 局部倒置 的数目等于满足下述条件的下标 i 的数目：
 *  * 0 <= i < n - 1
 * nums[i] > nums[i + 1]
 *
 * 当数组 nums 中 全局倒置 的数量等于 局部倒置 的数量时，返回 true ；否则，返回 false 。
 */

/**
 * 局部倒置逻辑较为简单,全局倒置需要的双层遍历,或者其他算法优化,否则可能超时
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function (nums) {
  let len = nums.length;
  let localCount = 0;
  let globalCount = 0;
  for (let i = 0; i < len; i++) {
    if (i < len - 1) {
      if (nums[i] > nums[i + 1]) {
        localCount++;
      }
    }
    for (let j = i + 1; j < len; j++) {
      if (nums[i] > nums[j]) {
        globalCount++;
      }
    }
  }
  return localCount === globalCount;
};
/**
 * 超时,双层遍历果然不行
 */
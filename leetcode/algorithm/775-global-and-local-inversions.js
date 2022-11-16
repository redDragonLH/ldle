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

/**
 * 不需要算出全部的数量,因为局部倒置肯定是一个全局倒置,只要找到一个非局部倒置的全局倒置,那么就可以返回
 *
 * 不过这玩意最差还是n的2次方~~
 */
var isIdealPermutation = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] > nums[j] && j > i + 1) {
        return false;
      }
    }
  }
  return ture;
};


/**
 * 归纳证明
 * 
 * nums 是一个由 0~n-1组成的排列,设不存在非局部倒置的排列为「理想排列」.由于非局部倒置表示存在一个j>i+1 使得 nums[i] > nums[j]成立,所以对于最小的元素0来说,它的下标不能够大于等于2
 *  1.  若 nums[0]=0,那么问题转换为[1,n-1]区间的一个字问题
 *  2.  若nums[1]=0,那么 nums[0只能为1,因为如果是大于1的任何元素,都将会与后面的1构成非局部倒置,此时问题转换为了[2,n-1] 区间的一个字问题
 * 
 * 根据上述讨论,不难归纳出「理想排列」的充分必要条件为对于每个元素 nums[i]都满足 |nums[i] -i| <=1
 */
 var isIdealPermutation = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(nums[i] - i) > 1) {
            return false;
        }
    }
    return true;
};
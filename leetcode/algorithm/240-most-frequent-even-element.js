/**
 * 2404. 出现最频繁的偶数元素
 *
 * 给你一个整数数组 nums ，返回出现最频繁的偶数元素。
 * 如果存在多个满足条件的元素，只需要返回 最小 的一个。如果不存在这样的元素，返回 -1 。
 */
/**
 * 排序遍历 
 * 边界条件死了人了~
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  nums.sort((a, b) => a - b);
  let len = nums.length;
  if (len === 1 && !(nums[0] % 2)) return nums[0];
  let max = 0;
  let result = -1;
  for (let i = 0; i < len; i++) {
    if (nums[i] % 2) continue;
    if (result === -1) result = nums[i];
    let count = 1;
    console.log(i, nums[i + 1], max);
    if (isNaN(nums[i + 1])) return result;
    while (nums[i + 1] === nums[i]) {
      count++;
      i++;
    }
    if (count > max) {
      result = nums[i];
      max = count;
    }
  }

  return result;
};

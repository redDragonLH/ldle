/**
 * 2563. 统计公平数对的数目
 *
 * 给你一个下标从 0 开始、长度为 n 的整数数组 nums ，和两个整数 lower 和 upper ，返回 公平数对的数目 。
 * 如果 (i, j) 数对满足以下情况，则认为它是一个 公平数对 ：
 *  * 0 <= i < j < n，且
 *  * lower <= nums[i] + nums[j] <= upper
 */
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  let count = 0;
  let len = nums.length;
  // 2. 双指针
  for (let i = 0; i < len; i++) {
    let j = i + 1;
    while (j < len) {
      let sum = nums[i] + nums[j];
      if (sum >= lower && sum <= upper) {
        count++;
      }
      j++;
    }
  }
  return count;
};
/**
 * 双层遍历 超时
 */
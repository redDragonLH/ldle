/**
 * 1814. 统计一个数组中好对子的数目
 *
 * 给你一个数组 nums ，数组中只包含非负整数。定义 rev(x) 的值为将整数 x 各个数字位反转得到的结果。
 * 比方说 rev(123) = 321 ， rev(120) = 21 。我们称满足下面条件的下标对 (i, j) 是 好的 ：
 *  * 0 <= i < j < nums.length
 *  * nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
 *
 * 请你返回好下标对的数目。由于结果可能会很大，请将结果对 109 + 7 取余 后返回。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  const MOD = 1000000007;
  let len = nums.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])) {
        result = (result % MOD) + 1;
      }
    }
  }
  return result;
};

let rev = (temp) => {
  let j = 0;
  while (temp > 0) {
    j = j * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return j;
};
/**
 * 双循环超时
 */
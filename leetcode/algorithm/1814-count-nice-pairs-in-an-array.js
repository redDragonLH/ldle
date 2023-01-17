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

/**
 * 双循环逻辑上没有问题,但是性能上问题太大
 * 优化就要考虑数据是否可以保存,保存的数据是否准确,可以使用
 *
 * 思路: 根据交换律  nums[i] + rev(nums[j]) == nums[j] + rev(nums[i]) => nums[i] - rev(nums[i]) == nums[j] -rev(nums[j])
 * 所以只有两个数的这个数和它的相反数的相减结果是一样的,那么这两个数就是好对子数
 * 
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  // 双循环优化->缓存
  const MOD = 1000000007;
  let res = 0;
  const h = new Map();
  for (const i of nums) {
    let temp = i,
      j = 0; // j 就是i rev后的数字
    while (temp > 0) {
      j = j * 10 + (temp % 10);
      temp = Math.floor(temp / 10);
    }
    // 这个i-j就是思路中根据交换律得到的结果,如果有这个数与它的相反数相减相等的数,那么说明这些数与这个数都是好对子
    // 必须是按顺序遍历并且累加,因为只要是结果相等的数字就是好对子,而且是按顺序,后边的是前边所有相等结果的数字的好对子数
    res = (res + (h.get(i - j) || 0)) % MOD;
    h.set(i - j, (h.get(i - j) || 0) + 1);
  }
  return res;
};

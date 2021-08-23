/**
 * 1646. 获取生成数组中的最大值
 *
 * 给你一个整数 n 。按下述规则生成一个长度为 n + 1 的数组 nums ：
 *  * nums[0] = 0
 *  * nums[1] = 1
 *  * 当 2 <= 2 * i <= n 时，nums[2 * i] = nums[i]
 *  * 当 2 <= 2 * i + 1 <= n 时，nums[2 * i + 1] = nums[i] + nums[i + 1]
 *
 * 返回生成数组 nums 中的 最大 值。
 */

/**
 * 简化题目中的递推式:
 *  若i为偶数,有 nums[i] = nums[i/2]
 *  若i为奇数,有 nums[i] = nums[i/2]+nums[i/2+1]
 * 这两种情况可以合并为:
 *      nums[i] = nums[i/2] + (i mod 2) * nums[i/2 + 1]
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n === 0) {
    return 0;
  }
  const nums = new Array(n + 1).fill(0);
  nums[1] = 1;
  for (let i = 2; i <= n; ++i) {
    nums[i] = nums[Math.floor(i / 2)] + (i % 2) * nums[Math.floor(i / 2) + 1];
  }
  return Math.max(...nums);
};
/**
 * 此题最重要的是得到递推公式
 */
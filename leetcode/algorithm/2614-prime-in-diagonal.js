/**
 * 2614. 对角线上的质数
 *
 * 给你一个下标从 0 开始的二维整数数组 nums 。
 * 返回位于 nums 至少一条 对角线 上的最大 质数 。如果任一对角线上均不存在质数，返回 0 。
 * 注意：
 *  * 如果某个整数大于 1 ，且不存在除 1 和自身之外的正整数因子，则认为该整数是一个质数。
 *  * 如果存在整数 i ，使得 nums[i][i] = val 或者 nums[i][nums.length - i - 1]= val ，则认为整数 val 位于 nums 的一条对角线上。
 */

/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i][i])) {
      res = Math.max(res, nums[i][i]);
    }
    if (isPrime(nums[i][nums.length - i - 1])) {
      res = Math.max(res, nums[i][nums.length - i - 1]);
    }
  }
  return res;
};
/**
 * 5 ms, 在所有 JavaScript 提交中击败了75.00%的用户
 * 内存消耗：61.29 MB, 在所有 JavaScript 提交中击败了29.17%的用户
 */

/**
 * 396. 旋转函数
 *
 * 给定一个长度为 n 的整数数组 nums 。
 *
 * 假设 arrk 是数组 nums 顺时针旋转 k 个位置后的数组，我们定义 nums 的 旋转函数  F 为：
 *
 * F(k) = 0 * arrk[0] + 1 * arrk[1] + ... + (n - 1) * arrk[n - 1]
 * 返回 F(0), F(1), ..., F(n-1)中的最大值 。
 *
 * 生成的测试用例让答案符合 32 位 整数。
 */

/**
 * 官方题解: 迭代
 *  记数组 nums 的元素之和为 numSum. 根据公式,可得
 *      * F(0) = 0 ✖️ nums[0] + 1 ✖️ nums[1] + ... + (n-1) ✖️ nums[n-1]
 *      * F(1) = 1 ✖️ nums[0] + 2 ✖️ nums[1] + ... + 0 ✖️ nums[n - 1] = F(0) + numSum - n ✖️ nums[n - 1]
 *  更一般的,当 1 ≤ k < n 时,F(k) = F(k-1) + numSum - n ✖️ nums[n - k]. 就可以不停迭代计算出不同的 F(k),并求出最大值
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  let f = 0,
    n = nums.length,
    numSum = _.sum(nums);
    // 初始和
  for (let i = 0; i < n; i++) {
    f += i * nums[i];
  }
  let res = f;
  for (let i = n - 1; i > 0; i--) {
    f += numSum - n * nums[i];
    res = Math.max(res, f);
  }
  return res;
};

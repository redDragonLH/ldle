/**
 * 413. 等差数列划分
 *
 * 如果一个数列 至少有三个元素 ，并且任意两个相邻元素之差相同，则称该数列为等差数列。
 *
 * 例如，[1,3,5,7,9]、[7,7,7,7] 和 [3,-1,-5,-9] 都是等差数列。
 *
 * 给你一个整数数组 nums ，返回数组 nums 中所有为等差数组的 子数组 个数。
 *
 * 子数组 是数组中的一个连续序列。
 */
/**
 * 不太像动态规划,倒是很像贪心,只需要考虑局部最优
 * 
 * 思路不难,但是得先了解此题中等差数列的计算公式
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  const dp = new Array(nums.length).fill(0);
  let sum = 0;
  for (let i = 1; i < nums.length - 1; i++) {
      // 只要是三个相邻的元素是等差的,那就可以+1,前面的数据无需考虑,不管是0还是任何数字,在sum计算的时候可以得到正确结果
    if (nums[i] - nums[i - 1] === nums[i + 1] - nums[i]) {
      dp[i + 1] = dp[i] + 1;
      //  顺序只有从小到大,且每多一个元素就多阶乘级的种类
      // 核心,从元素数量计算子数组种类
      sum += dp[i + 1];
    }
  }
  return sum;
};

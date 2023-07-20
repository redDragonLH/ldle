/**
 * 918. 环形子数组的最大和
 *
 * 给定一个长度为 n 的环形整数数组 nums ，返回 nums 的非空 子数组 的最大可能和 。
 *
 * 环形数组 意味着数组的末端将会与开头相连呈环状。形式上， nums[i] 的下一个元素是 nums[(i + 1) % n] ， nums[i] 的前一个元素是 nums[(i - 1 + n) % n] 。
 *
 * 子数组 最多只能包含固定缓冲区 nums 中的每个元素一次。形式上，对于子数组 nums[i], nums[i + 1], ..., nums[j] ，不存在 i <= k1, k2 <= j 其中 k1 % n == k2 % n 。
 */

/**
 * 最大子数组要跨界~~
 * 最大子数组不管是双层遍历还是动态规划都可以解决
 *
 * 跨界怎么办
 *  跨界问题可以分为两部分, nums[0 : i]为数组的某一前缀,nums[j : n]为数组的某一后缀.求解时,可以枚举 j,
 * 固定 sum(nums[j:n])的值,然后找到右端点坐标范围内再 [0,j-1]的最大前缀和,将他们相加更新答案
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let n = nums.length;
  // 左后缀
  const leftMax = new Array(n).fill(0);
  // 对坐标为 0 处的元素单独处理，避免考虑子数组为空的情况
  leftMax[0] = nums[0];
  let leftSum = nums[0];
  let pre = nums[0];
  let res = nums[0];
  for (let i = 1; i < n; i++) {
    // 检查以前的数值加上当前元素与当前元素谁大
    pre = Math.max(pre + nums[i], nums[i]);
    res = Math.max(res, pre);
    leftSum += nums[i];
    // 计算越界子数组
    leftMax[i] = Math.max(leftMax[i - 1], leftSum);
  }

  // 从右到左枚举后缀，固定后缀，选择最大前缀
  let rightSum = 0;
  for (let i = n - 1; i > 0; i--) {
    rightSum += nums[i];
    res = Math.max(res, rightSum + leftMax[i - 1]);
  }
  return res;
};

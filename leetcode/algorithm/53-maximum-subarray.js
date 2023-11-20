/**
 * 53.最大子序和
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */

/**
 * 动态规划法
 * 求出当前所在数组位置对应的最大和，然后返回这个最大和数组中的最大值即可
 *
 * 思考：
 *     动态规划转移方程： 是从题目中递推出来的获取答案的公式，递递推出方程需要对问题进行分解，找到题目中隐藏的规律，
 *         此题中的规律就是：从第一个元素开始递推最大子序列和，而第一个元素的最大子序和肯定就是它自身，然后计算第二个，判断当前最大子序和与 当前子序和与当前元素的和那个大
 */
let maxSubArray = (nums) => {
  let maxAns = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let pre = 0;

    for (let j = i; j < nums.length; j++) {
      pre = Math.max(pre + nums[j], nums[j]);
      maxAns = Math.max(pre, maxAns);
    }
  }

  return maxAns;
};
/**
 * 暴力法逻辑倒是对,就是超时
 */

let maxSubArray_two = (nums) => {
  let len = nums.length;
  // dp[i] 表示：以 nums[i] 结尾的连续子数组的最大和
  let dp = new Array(len);
  dp[0] = nums[0];

  for (let i = 1; i < len; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = dp[i - 1] + nums[i];
    } else {
      dp[i] = nums[i];
    }
  }

  // 也可以在上面遍历的同时求出 res 的最大值，这里我们为了语义清晰分开写，大家可以自行选择
  let res = dp[0];
  for (let i = 1; i < len; i++) {
    res = Math.max(res, dp[i]);
  }
  return res;
};
/**
 *  记录下动态规划概念
 * 
 * 1. 确认数组含义
 * 2. 找到起始数据
 * 3. 找到转移方程
 * 
 * https://leetcode.cn/problems/maximum-subarray/solutions/9058/dong-tai-gui-hua-fen-zhi-fa-python-dai-ma-java-dai/?envType=daily-question&envId=2023-11-20
 */
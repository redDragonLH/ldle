/**
 * 2369. 检查数组是否存在有效划分
 *
 * 给你一个下标从 0 开始的整数数组 nums ，你必须将数组划分为一个或多个 连续 子数组。
 * 如果获得的这些子数组中每个都能满足下述条件 之一 ，则可以称其为数组的一种 有效 划分：
 *  * 子数组 恰 由 2 个相等元素组成，例如，子数组 [2,2] 。
 *  * 子数组 恰 由 3 个相等元素组成，例如，子数组 [4,4,4] 。
 *  * 子数组 恰 由 3 个连续递增元素组成，并且相邻元素之间的差值为 1 。例如，子数组 [3,4,5] ，但是子数组 [1,3,5] 不符合要求。
 *  * 如果数组 至少 存在一种有效划分，返回 true ，否则，返回 false 。
 */

/**
 *  子数组:需要在原数组里面连续 (和字串一样)
 *  子序列不要求连续
 *
 * 回溯算法吗
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function (nums) {
    let len = nums.length;
let subNum = [nums[0]]
    for (let i = 1; i < len; i++) {
      subNum.push(nums[i])
      if(subNum.length ===2 || subNum.length ===3){
        isVaild(subNum)
      }else {

      }
    }
};
const isVaild = (subNum) => {
  let len = subNum.length;
  if (len === 2) {
    return subNum[0] === subNum[1];
  } else if (len === 3) {
    if (subNum[0] === subNum[1] && subNum[1] === subNum[2]) {
      return subNum[0] === subNum[1] && subNum[1] === subNum[2];
    } else {
      return subNum[0] + 1 === subNum[1] && subNum[1] + 1 === subNum[2];
    }
  }
  return false;
};

/**
 * 应该使用动态规划
 * 这样前面只有两个状态,就是两个元素是否合格,三个元素是否合格
 */
var validPartition = function(nums) {
  const n = nums.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;
  // 这种打乱顺序的方式有些抽象
  for (let i = 1; i <= n; i++) {
      if (i >= 2) {
        // 不管前面么,奇怪
        // 只管当前两个元素,
        // 不对.i-2就已经处理了
          dp[i] = dp[i - 2] && validTwo(nums[i - 2], nums[i - 1]);
      }
      if (i >= 3) {
        // 当前两个元素是否ok,不可以就判断一下三个的
          dp[i] = dp[i] || (dp[i - 3] && validThree(nums[i - 3], nums[i - 2], nums[i - 1]));
      }
  }
  return dp[n];
};

function validTwo(num1, num2) {
  return num1 === num2;
}

function validThree(num1, num2, num3) {
  return (num1 === num2 && num1 === num3) || (num1 + 1 === num2 && num2 + 1 === num3);
}
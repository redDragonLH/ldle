/**
 * 2708. 一个小组的最大实力值
 *
 * 给你一个下标从 0 开始的整数数组 nums ，它表示一个班级中所有学生在一次考试中的成绩。老师想选出一部分同学组成一个 非空 小组，
 * 且这个小组的 实力值 最大，如果这个小组里的学生下标为 i0, i1, i2, ... , ik ，那么这个小组的实力值定义为 nums[i0] * nums[i1] * nums[i2] * ... * nums[ik​] 。
 *
 * 请你返回老师创建的小组能得到的最大实力值为多少。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxStrength = function (nums) {
  let len = nums.length;
  if (len === 1) return nums[0];
  nums.sort((a, b) => a - b);
  let negativeLen = nums.reduce((acc, cur) => acc + (cur < 0 ? 1 : 0), 0);
  let result = 0; // 理论上应该选个初始值,但是没有思路
  for (let i = 0; i < negativeLen; i++) {
    if (i === negativeLen - 1) {
      let temp = (result || 1) * nums[i]; // 没有初始值的代价就是要多一点判断
      if (temp > 0) {
        result = temp;
      }
    } else {
      result = (result || 1) * nums[i];
    }
  }
  let start = nums.length - 1;
  while (nums[start] > 0) {
    result = (result || 1) * nums[start];
    start--;
  }
  return result;
};
/**
 * 执行用时：103 ms, 在所有 JavaScript 提交中击败了26.92%的用户
 * 内存消耗：53.76 MB, 在所有 JavaScript 提交中击败了19.23%的用户
 */
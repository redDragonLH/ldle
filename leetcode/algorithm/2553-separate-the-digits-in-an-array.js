/**
 * 2553. 分割数组中数字的数位
 *
 * 给你一个正整数数组 nums ，请你返回一个数组 answer ，你需要将 nums 中每个整数进行数位分割后，按照 nums 中出现的 相同顺序 放入答案数组中。
 * 对一个整数进行数位分割，指的是将整数各个数位按原本出现的顺序排列成数组。
 *  * 比方说，整数 10921 ，分割它的各个数位得到 [1,0,9,2,1] 。
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let str = nums[i].toString();
    for (let j = 0; j < str.length; j++) {
      res.push(Number(str[j]));
    }
  }
  return res;
};
/**
 * 执行用时 :3 ms, 在所有 JavaScript 提交中击败了77.78%的用户
 * 内存消耗 :57.86 MB, 在所有 JavaScript 提交中击败了88.89%的用户
 */
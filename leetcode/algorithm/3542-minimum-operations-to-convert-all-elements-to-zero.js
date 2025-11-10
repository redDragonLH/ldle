/**
 * 3542. 将所有元素变为 0 的最少操作次数
 *
 * 给你一个大小为 n 的 非负 整数数组 nums 。你的任务是对该数组执行若干次（可能为 0 次）操作，使得 所有 元素都变为 0。
 * 在一次操作中，你可以选择一个子数组 [i, j]（其中 0 <= i <= j < n），将该子数组中所有 最小的非负整数 的设为 0。
 * 返回使整个数组变为 0 所需的最少操作次数。
 * 一个 子数组 是数组中的一段连续元素。
 */
/**
 * 题目还挺简单，不过需要注意子数组里面不能有0，也就是说每次操作只能覆盖没有0的连续段，每处理一次连续段，操作数加1
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let handleSequence = new Set([...nums].sort((a, b) => a - b));
  let minOperations = 0;
  for (let num of handleSequence) {
    if (num === 0) continue;
    let isPlus = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        isPlus && minOperations++;
        isPlus = false;
      } else if (nums[i] === num) {
        nums[i] = 0;
        isPlus = true;
      }
    }
    isPlus && minOperations++;
  }
  return minOperations;
};
/**
 * 模拟超时
 */
/**
 * 单调栈
 * @param {*} nums 
 * @returns 
 */
var minOperations = function (nums) {
  const s = [];
  let res = 0;
  for (const a of nums) {
    while (s.length && s[s.length - 1] > a) {
      s.pop();
    }
    if (a === 0) continue;
    if (!s.length || s[s.length - 1] < a) {
      res++;
      s.push(a);
    }
  }
  return res;
};
/**
 * 栈顶比a大，那么肯定不会和a同时操作，那么栈顶元素非常可能单独处理，因为前后可能是0
 */
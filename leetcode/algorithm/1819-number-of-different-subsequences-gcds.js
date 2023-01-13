/**
 * 1819. 序列中不同最大公约数的数目
 *
 * 给你一个由正整数组成的数组 nums 。
 * 数字序列的 最大公约数 定义为序列中所有整数的共有约数中的最大整数。
 *  * 例如，序列 [4,6,16] 的最大公约数是 2 。
 *
 * 数组的一个 子序列 本质是一个序列，可以通过删除数组中的某些元素（或者不删除）得到。
 *  * 例如，[2,5,10] 是 [1,2,1,2,4,1,5,10] 的一个子序列。
 *
 * 计算并返回 nums 的所有 非空 子序列中 不同 最大公约数的 数目 。
 */

/**
 * 核心在于子序列遍历以及获取最大公约数的算法
 * 遍历的话就是回溯算法了吧
 * @param {number[]} nums
 * @return {number}
 */
var countDifferentSubsequenceGCDs = function (nums) {
  let len = nums.length;
  let result = [];
  deep(nums, -1, len, [], result);
  console.log(result);
  return result.values();
};
function deep(nums, index, len, curr, result) {
  console.log(result, index);

  for (let i = index + 1; i < len; i++) {
    curr.push(nums[i]);
    let g = fn2(...curr);
    console.log("g", g);
    result.push(g);
    deep(nums, i, len, curr, result);
    curr.pop();
    deep(nums, i, len, curr, result);
  }
}
function fn2() {
  let arr = Array.from(arguments);
  if (arr.length < 1) return;
  while (arr.length > 1) arr.splice(0, 2, fn4(arr[0], arr[1]));
  return arr[0];
}
function fn4() {
  let arr = Array.from(arguments);
  while (arr.length > 1) arr.splice(0, 2, fn4(arr[0], arr[1]));
  return arr[0];
}

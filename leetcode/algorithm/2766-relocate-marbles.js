/**
 * 2766. 重新放置石块
 *
 * 给你一个下标从 0 开始的整数数组 nums ，表示一些石块的初始位置。再给你两个长度 相等 下标从 0 开始的整数数组 moveFrom 和 moveTo 。
 * 在 moveFrom.length 次操作内，你可以改变石块的位置。在第 i 次操作中，你将位置在 moveFrom[i] 的所有石块移到位置 moveTo[i] 。
 * 完成这些操作后，请你按升序返回所有 有 石块的位置。
 * 注意：
 *  * 如果一个位置至少有一个石块，我们称这个位置 有 石块。
 *  * 一个位置可能会有多个石块。
 */
/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function (nums, moveFrom, moveTo) {
  moveFrom.forEach((from, i) => {
    let start = 0;
    while (nums.indexOf(from, start) !== -1) {
      const index = nums.indexOf(from, start);
      nums[index] = moveTo[i];
      start = index + 1;
    }
  });

  let result = Array.from(new Set(nums));
  return result.sort((a, b) => a - b);
};
/**
 * 超时
 */

/**
 * 官方题解
 */
var relocateMarbles = function (nums, moveFrom, moveTo) {
  let mp = new Map();
  let ans = [];

  nums.forEach((num) => mp.set(num, true));
  for (let i = 0; i < moveFrom.length; i++) {
    mp.delete(moveFrom[i]);
    mp.set(moveTo[i], true);
  }
  mp.forEach((_, key) => ans.push(key));
  ans.sort((a, b) => a - b);
  return ans;
};

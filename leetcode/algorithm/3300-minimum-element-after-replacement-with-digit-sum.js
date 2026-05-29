/**
 * 3300. 替换为数位和以后的最小元素
 *
 * 给你一个整数数组 nums 。
 * 请你将 nums 中每一个元素都替换为它的各个数位之 和 。
 * 请你返回替换所有元素以后 nums 中的 最小 元素。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
  let min = Infinity;
  for (let num of nums) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    min = Math.min(min, sum);
  }
  return min;
};
/**
 * 执行用时 :3 ms, 在所有 JavaScript 提交中击败了45.45%的用户
 * 内存消耗 :56.13 MB, 在所有 JavaScript 提交中击败了54.55%的用户
 */

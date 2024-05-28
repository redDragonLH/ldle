/**
 * 2951. 找出峰值
 *
 * 给你一个下标从 0 开始的数组 mountain 。你的任务是找出数组 mountain 中的所有 峰值。
 * 以数组形式返回给定数组中 峰值 的下标，顺序不限 。
 *
 * 注意：
 *  * 峰值 是指一个严格大于其相邻元素的元素。
 *  * 数组的第一个和最后一个元素 不 是峰值。
 */

/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
  let peaks = [];
  let len = mountain.length - 1;

  if (len === 1) return peaks;
  for (let i = 1; i < len; i++) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
      peaks.push(i);
    }
  }
  return peaks;
};
/**
 * 执行用时：67 ms, 在所有 JavaScript 提交中击败了 70.83 %的用户
 * 内存消耗：52.29 MB, 在所有 JavaScript 提交中击败了5.55%的用户
 */

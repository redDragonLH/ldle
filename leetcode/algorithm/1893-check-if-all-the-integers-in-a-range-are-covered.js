/**
 * 1893. 检查是否区域内所有整数都被覆盖
 *
 * 给你一个二维整数数组 ranges 和两个整数 left 和 right 。每个 ranges[i] = [starti, endi] 表示一个从 starti 到 endi 的 闭区间 。
 *
 * 如果闭区间 [left, right] 内每个整数都被 ranges 中 至少一个 区间覆盖，那么请你返回 true ，否则返回 false 。
 *
 * 已知区间 ranges[i] = [starti, endi] ，如果整数 x 满足 starti <= x <= endi ，那么我们称整数x 被覆盖了。
 */

/**
 * 失败,题意理解有问题
 *
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  ranges.sort((a, b) => a[0] - b[0]);
  let len = ranges.length;
  if (ranges[0][1] < left) return false;
  if (ranges[len-1][0] < right) return false;
  return true;
};

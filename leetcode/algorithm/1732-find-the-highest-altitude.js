/**
 * 1732. 找到最高海拔
 *
 * 有一个自行车手打算进行一场公路骑行，这条路线总共由 n + 1 个不同海拔的点组成。自行车手从海拔为 0 的点 0 开始骑行。
 *
 * 给你一个长度为 n 的整数数组 gain ，其中 gain[i] 是点 i 和点 i + 1 的 净海拔高度差（0 <= i < n）。请你返回 最高点的海拔 。
 */

/**
 * 净海拔高度差
 * 数组零点就是点零，还以为要找
 *
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let len = gain.length;
  let max = 0;
  let current = 0;

  for (let i = 0; i < len; i++) {
    current += gain[i];
    max = Math.max(current, max);
    console.log(max);
  }
  return max;
};
/**
 * 执行用时：100 ms, 在所有 JavaScript 提交中击败了11.1%的用户
 * 内存消耗：44.9 MB, 在所有 JavaScript 提交中击败了5.51%的用户
 */
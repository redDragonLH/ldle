/**
 * 2580. 统计将重叠区间合并成组的方案数
 *
 * 给你一个二维整数数组 ranges ，其中 ranges[i] = [starti, endi] 表示 starti 到 endi 之间（包括二者）的所有整数都包含在第 i 个区间中。
 * 你需要将 ranges 分成 两个 组（可以为空），满足：
 *  * 每个区间只属于一个组。
 *  * 两个有 交集 的区间必须在 同一个 组内。
 *
 * 如果两个区间有至少 一个 公共整数，那么这两个区间是 有交集 的。
 *  * 比方说，区间 [1, 3] 和 [2, 5] 有交集，因为 2 和 3 在两个区间中都被包含。
 * 请你返回将 ranges 划分成两个组的 总方案数 。由于答案可能很大，将它对 10^9 + 7 取余 后返回。
 */

/**
 * 获得不交集的区间
 * @param {number[][]} ranges
 * @return {number}
 */
var countWays = function (ranges) {
  let mod = 1e9 + 7;
  ranges.sort((a, b) => a[0] - b[0]);
  let rangesWithoutCross = [ranges[0]];
  for (const item of ranges) {
    let last = rangesWithoutCross[rangesWithoutCross.length - 1];
    if (last[1] < item[0]) {
      rangesWithoutCross.push(item);
    } else if (last[1] < item[1]) {
      last[1] = item[1];
    }
  }
  let len = rangesWithoutCross.length;
  let result = 1;
  // 求的是全排列?
  while (len--) {
    result = (result * 2) % mod;
  }
  return result;
};
/**
 * 执行用时：116 ms, 在所有 JavaScript 提交中击败了66.67%的用户
 * 内存消耗：78.79 MB, 在所有 JavaScript 提交中击败了16.67%的用户
 */
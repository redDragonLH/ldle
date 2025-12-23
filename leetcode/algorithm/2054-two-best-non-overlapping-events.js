/**
 * 2054. 两个最好的不重叠活动
 * 给你一个下标从 0 开始的二维整数数组 events ，其中 events[i] = [startTimei, endTimei, valuei] 。第 i 个活动开始于 startTimei
 * ，结束于 endTimei ，如果你参加这个活动，那么你可以得到价值 valuei 。你 最多 可以参加 两个时间不重叠 活动，使得它们的价值之和 最大 。
 *
 * 请你返回价值之和的 最大值 。
 *
 * 注意，活动的开始时间和结束时间是 包括 在活动时间内的，也就是说，你不能参加两个活动且它们之一的开始时间等于另一个活动的结束时间。
 * 更具体的，如果你参加一个活动，且结束时间为 t ，那么下一个活动必须在 t + 1 或之后的时间开始。
 */
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
  events.sort((a, b) => a[0] - b[0]);
  let n = events.length;
  let maxValue = 0;

  // 预处理：按开始时间排序后，记录每个位置后面最大 value
  let maxAfter = new Array(n + 1).fill(0);
  for (let i = n - 1; i >= 0; --i) {
    maxAfter[i] = Math.max(maxAfter[i + 1], events[i][2]);
  }

  for (let i = 0; i < n; ++i) {
    // 二分查找第一个开始时间 > 当前活动结束时间的活动
    let l = i + 1,
      r = n;
    while (l < r) {
      let m = Math.floor((l + r) / 2);
      if (events[m][0] > events[i][1]) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    // 选当前活动和后面不重叠的最大 value 活动
    let sum = events[i][2] + (l < n ? maxAfter[l] : 0);
    maxValue = Math.max(maxValue, sum);
    // 只选当前活动
    maxValue = Math.max(maxValue, events[i][2]);
  }
  return maxValue;
};
/**
 * 执行用时 :89 ms, 在所有 JavaScript 提交中击败了96.43%的用户
 * 内存消耗 :91.60 MB, 在所有 JavaScript 提交中击败了96.43%的用户
 */
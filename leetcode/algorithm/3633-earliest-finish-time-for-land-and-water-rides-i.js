/**
 * 3633. 最早完成陆地和水上游乐设施的时间 I
 *
 * 给你两种类别的游乐园项目：陆地游乐设施 和 水上游乐设施。
 *  * 陆地游乐设施
 *  *  * landStartTime[i] – 第 i 个陆地游乐设施最早可以开始的时间。
 *  *  * landDuration[i] – 第 i 个陆地游乐设施持续的时间。
 *  * 水上游乐设施
 *  *  * waterStartTime[j] – 第 j 个水上游乐设施最早可以开始的时间。
 *  *  * waterDuration[j] – 第 j 个水上游乐设施持续的时间。
 * 一位游客必须从 每个 类别中体验 恰好一个 游乐设施，顺序 不限 。
 *
 *  * 游乐设施可以在其开放时间开始，或 之后任意时间 开始。
 *  * 如果一个游乐设施在时间 t 开始，它将在时间 t + duration 结束。
 *  * 完成一个游乐设施后，游客可以立即乘坐另一个（如果它已经开放），或者等待它开放。
 * 返回游客完成这两个游乐设施的 最早可能时间 。
 */
/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function (
  landStartTime,
  landDuration,
  waterStartTime,
  waterDuration,
) {
  let n = landStartTime.length;
  let m = waterStartTime.length;
  let res = Infinity;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let land = landStartTime[i] + landDuration[i];
      let land_water = Math.max(land, waterStartTime[j]) + waterDuration[j];
      res = Math.min(res, land_water);

      let water = waterStartTime[j] + waterDuration[j];
      let water_land = Math.max(water, landStartTime[i]) + landDuration[i];
      res = Math.min(res, water_land);
    }
  }
  return res;
};
/**
 * 执行用时 : 7 ms, 在所有 JavaScript 提交中击败了 57.14% 的用户
 * 内存消耗 : 56.38 MB, 在所有 JavaScript 提交中击败了 85.71% 的用户
 */
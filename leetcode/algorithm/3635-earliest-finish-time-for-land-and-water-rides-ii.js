/**
 * 3635. 最早完成陆地和水上游乐设施的时间 II
 *
 * 给你两种类别的游乐园项目：陆地游乐设施 和 水上游乐设施。
 *  * 陆地游乐设施
 *  *  * landStartTime[i] – 第 i 个陆地游乐设施最早可以开始的时间。
 *  *  * landDuration[i] – 第 i 个陆地游乐设施持续的时间。
 *  * 水上游乐设施
 *  *  * waterStartTime[j] – 第 j 个水上游乐设施最早可以开始的时间。
 *  *  * waterDuration[j] – 第 j 个水上游乐设施持续的时间。
 * 一位游客必须从 每个 类别中体验 恰好一个 游乐设施，顺序 不限 。
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
  function solve(start1, duration1, start2, duration2) {
    let finish1 = Infinity;
    for (let i = 0; i < start1.length; i++) {
      finish1 = Math.min(finish1, start1[i] + duration1[i]);
    }
    let finish2 = Infinity;
    for (let i = 0; i < start2.length; i++) {
      finish2 = Math.min(finish2, Math.max(start2[i], finish1) + duration2[i]);
    }
    return finish2;
  }

  let land_water = solve(
    landStartTime,
    landDuration,
    waterStartTime,
    waterDuration,
  );
  let water_land = solve(
    waterStartTime,
    waterDuration,
    landStartTime,
    landDuration,
  );
  return Math.min(land_water, water_land);
};

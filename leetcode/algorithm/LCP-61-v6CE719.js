/**
 * LCP 61. 气温变化趋势
 *
 * 力扣城计划在两地设立「力扣嘉年华」的分会场，气象小组正在分析两地区的气温变化趋势，对于第 i ~ (i+1) 天的气温变化趋势，将根据以下规则判断：
 *  * 若第 i+1 天的气温 高于 第 i 天，为 上升 趋势
 *  * 若第 i+1 天的气温 等于 第 i 天，为 平稳 趋势
 *  * 若第 i+1 天的气温 低于 第 i 天，为 下降 趋势
 * 已知 temperatureA[i] 和 temperatureB[i] 分别表示第 i 天两地区的气温。 组委会希望找到一段天数尽可能多，且两地气温变化趋势相同的时间举办嘉年华活动。请分析并返回两地气温变化趋势相同的最大连续天数。
 * 即最大的 n，使得第 i~i+n 天之间，两地气温变化趋势相同
 */

/**
 * @param {number[]} temperatureA
 * @param {number[]} temperatureB
 * @return {number}
 */
var temperatureTrend = function (temperatureA, temperatureB) {
  let len = temperatureA.length;
  let result = 0;
  let currentMax = 0;
  for (let i = 1; i < len; i++) {
    let diffA = temperatureA[i] - temperatureA[i - 1];
    let diffB = temperatureB[i] - temperatureB[i - 1];
    if (
      (diffA > 0 && diffB > 0) ||
      (diffA < 0 && diffB < 0) ||
      (diffA === 0 && diffB === 0)
    ) {
      currentMax++;
    } else {
      result = Math.max(result, currentMax);
      currentMax = 0;
    }
  }
  return Math.max(result, currentMax);
};
/**
 * 执行用时：65 ms, 在所有 JavaScript 提交中击败了30.00%的用户
 * 内存消耗：49.92 MB, 在所有 JavaScript 提交中击败了65.00%的用户
 */

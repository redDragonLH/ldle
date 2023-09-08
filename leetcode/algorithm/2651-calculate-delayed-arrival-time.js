/**
 * 2651. 计算列车到站时间
 * 给你一个正整数 arrivalTime 表示列车正点到站的时间（单位：小时），另给你一个正整数 delayedTime 表示列车延误的小时数。
 * 返回列车实际到站的时间。
 * 注意，该问题中的时间采用 24 小时制。
 */
/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
    return (arrivalTime + delayedTime) % 24;
  };
  /**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了54.81%的用户
 * 内存消耗：40.33 MB, 在所有 JavaScript 提交中击败了43.70%的用户
 */
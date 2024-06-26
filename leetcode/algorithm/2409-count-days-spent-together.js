/**
 * 2409. 统计共同度过的日子数
 *
 * Alice 和 Bob 计划分别去罗马开会。
 *
 * 给你四个字符串 arriveAlice ，leaveAlice ，arriveBob 和 leaveBob 。Alice 会在日期 arriveAlice 到 leaveAlice 之间在城市里（日期为闭区间），而 Bob 在日期 arriveBob 到 leaveBob 之间在城市里（日期为闭区间）。每个字符串都包含 5 个字符，格式为 "MM-DD" ，对应着一个日期的月和日。
 *
 * 请你返回 Alice和 Bob 同时在罗马的天数。
 *
 * 你可以假设所有日期都在 同一个 自然年，而且 不是 闰年。每个月份的天数分别为：[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] 。
 */

/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (
  arriveAlice,
  leaveAlice,
  arriveBob,
  leaveBob
) {
  let datesOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let prefixSum = [0];
  for (let i = 0; i < datesOfMonths.length; i++) {
    prefixSum.push(prefixSum[i] + datesOfMonths[i]);
  }

  let arriveAliceDay = calculateDayOfYear(arriveAlice, prefixSum);
  let leaveAliceDay = calculateDayOfYear(leaveAlice, prefixSum);
  let arriveBobDay = calculateDayOfYear(arriveBob, prefixSum);
  let leaveBobDay = calculateDayOfYear(leaveBob, prefixSum);

  return Math.max(
    0,
    Math.min(leaveAliceDay, leaveBobDay) -
      Math.max(arriveAliceDay, arriveBobDay) +
      1
  );
};

function calculateDayOfYear(day, prefixSum) {
  let month = parseInt(day.substring(0, 2));
  let date = parseInt(day.substring(3));
  return prefixSum[month - 1] + date;
}

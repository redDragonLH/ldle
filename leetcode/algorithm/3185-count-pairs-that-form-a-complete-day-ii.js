/**
 * 3185. 构成整天的下标对数目 II
 *
 * 给你一个整数数组 hours，表示以 小时 为单位的时间，返回一个整数，表示满足 i < j 且 hours[i] + hours[j] 构成 整天 的下标对 i, j 的数目。
 * 整天 定义为时间持续时间是 24 小时的 整数倍 。
 * 例如，1 天是 24 小时，2 天是 48 小时，3 天是 72 小时，以此类推。
 */

/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
  let ans = 0;
  let cnt = new Array(24).fill(0);
  for (let hour of hours) {
    ans += cnt[(24 - (hour % 24)) % 24];
    cnt[hour % 24]++;
  }
  return ans;
};
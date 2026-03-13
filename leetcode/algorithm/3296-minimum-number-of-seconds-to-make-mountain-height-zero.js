/**
 * 3296. 移山所需的最少秒数
 *
 * 给你一个整数 mountainHeight 表示山的高度。
 * 同时给你一个整数数组 workerTimes，表示工人们的工作时间（单位：秒）。
 * 工人们需要 同时 进行工作以 降低 山的高度。对于工人 i :
 *  * 山的高度降低 x，需要花费 workerTimes[i] + workerTimes[i] * 2 + ... + workerTimes[i] * x 秒。例如：
 *  *  * 山的高度降低 1，需要 workerTimes[i] 秒。
 *  *  * 山的高度降低 2，需要 workerTimes[i] + workerTimes[i] * 2 秒，依此类推。
 * 返回一个整数，表示工人们使山的高度降低到 0 所需的 最少 秒数。
 */

/**
 * @param {number} mountainHeight
 * @param {number[]} workerTimes
 * @return {number}
 */
var minNumberOfSeconds = function (mountainHeight, workerTimes) {
  let left = 0,
    right = 1e18;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    let total = 0;
    for (const time of workerTimes) {
      total += Math.floor((-1 + Math.sqrt(1 + (8 * mid) / time)) / 2);
    }
    if (total >= mountainHeight) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

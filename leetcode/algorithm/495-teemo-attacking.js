/**
 * 495. 提莫攻击
 *
 * 在《英雄联盟》的世界中，有一个叫 “提莫” 的英雄。他的攻击可以让敌方英雄艾希（编者注：寒冰射手）进入中毒状态。
 *
 * 当提莫攻击艾希，艾希的中毒状态正好持续 duration 秒。
 *
 * 正式地讲，提莫在 t 发起发起攻击意味着艾希在时间区间 [t, t + duration - 1]（含 t 和 t + duration - 1）处于中毒状态。如果提莫在中毒影响结束 前 再次攻击，中毒状态计时器将会 重置 ，在新的攻击之后，中毒影响将会在 duration 秒后结束。
 *
 * 给你一个 非递减 的整数数组 timeSeries ，其中 timeSeries[i] 表示提莫在 timeSeries[i] 秒时对艾希发起攻击，以及一个表示中毒持续时间的整数 duration 。
 *
 * 返回艾希处于中毒状态的 总 秒数。
 */

/**
 * 获取存在状态的时间,问题就是时间段之内看看是否超出
 * 也就是判断时间段和duration 谁最小
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let result = 0;

  for (let i = 1; i < timeSeries.length; i++) {
    result += Math.min(duration, timeSeries[i] - timeSeries[i - 1]);
  }
  return result;
};
/**
 * 一次遍历效率这么低么
 * 执行用时：92 ms, 在所有 JavaScript 提交中击败了16.67%的用户
 * 内存消耗：41.7 MB, 在所有 JavaScript 提交中击败了73.93%的用户
 */

/**
 * 官方题解 一次遍历
 */
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let ans = 0;
  // 用了额外的变量存放当前时间段的长度,以便判断,使用这个变量可以使逻辑操作超出当前循环的节点,并不会出错,因为就算数据多了下一个节点还会减回来
  let expired = 0;
  for (let i = 0; i < timeSeries.length; ++i) {
    if (timeSeries[i] >= expired) {
      ans += duration;
    } else {
      ans += timeSeries[i] + duration - expired;
    }
    expired = timeSeries[i] + duration;
  }
  return ans;
};
/**
 * 为什么要比我的要快,min速度慢么
 */
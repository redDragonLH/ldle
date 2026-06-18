/**
 * 1344. 时钟指针的夹角
 *
 * 给你两个数 hour 和 minutes 。请你返回在时钟上，由给定时间的时针和分针组成的较小角的角度（60 单位制）。
 */
/**
 * 听起来很简单,但是,得有基础数据输入,有初始算法或数据,或者找个初始点,然后相加或相减,最后得出结果,然后再进行判断,如果大于180度,就用360减去这个角度,得到较小的角度
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  // 计算分针的角度
  const minuteAngle = minutes * 6;
  // 计算时针的角度
  const hourAngle = (hour % 12) * 30 + minutes * 0.5;
  // 计算两针的夹角
  let angle = Math.abs(hourAngle - minuteAngle);
  // 返回较小的角度
  return Math.min(angle, 360 - angle);
};
/**
 * 执行用时 :1 ms, 在所有 JavaScript 提交中击败了16.67%的用户
 * 内存消耗 :54.15 MB, 在所有 JavaScript 提交中击败了41.67%的用户
 */
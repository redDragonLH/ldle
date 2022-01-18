/**
 * 539. 最小时间差
 *
 * 给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。
 */

/**
 * 思路:转成数字然后排序,顺序获取绝对值
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  let len = timePoints.length;
  let numArr = timePoints.map((e) => {
    let arr = e.split(":");
    return arr[0] * 60 + parseInt(arr[1]);
  });
  numArr.sort((a, b) => a - b);
  let maxTime = 1440;
  let result = maxTime;
  for (let i = 1; i < len; i++) {
    result = Math.min(result, numArr[i] - numArr[i - 1]);
  }
  result = Math.min(result, maxTime - numArr[len - 1] + numArr[0]);
  return result;
};
/**
 * 速度较慢,排序增加了不少时间
 * 
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了39.62%的用户
 * 内存消耗：40.6 MB, 在所有 JavaScript 提交中击败了51.89%的用户
 */
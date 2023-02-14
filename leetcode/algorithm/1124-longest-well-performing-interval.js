/**
 * 1124. 表现良好的最长时间段
 *
 * 给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。
 *
 * 我们认为当员工一天中的工作小时数大于 8 小时的时候，那么这一天就是「劳累的一天」。
 *
 * 所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。
 *
 * 请你返回「表现良好时间段」的最大长度。
 */

/**
 * 经典滑动窗口了,应该可以用二维前缀和优化
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  let left = 0;
  let right = 0;

  let len = hours.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (isGood(hours, j, i)) {
        result = Math.max(result, i - j);
      }
    }
  }
  return result;
};

let isGood = (hours, left, right) => {
  let good = 0;
  let bad = 0;
  while (left < right) {
    if (hours[left] > 8) {
      good++;
    } else {
      bad++;
    }
  }
  return good > bad;
};
/**
 * 直接超时
 * 
 * 必须优化,滑动窗口可以解决么,
 * 那要怎么滑动可以不错过所有情况
 */
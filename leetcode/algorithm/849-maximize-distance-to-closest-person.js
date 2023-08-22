/**
 * 849. 到最近的人的最大距离
 *
 * 给你一个数组 seats 表示一排座位，其中 seats[i] = 1 代表有人坐在第 i 个座位上，seats[i] = 0 代表座位 i 上是空的（下标从 0 开始）。
 *
 * 至少有一个空座位，且至少有一人已经坐在座位上。
 *
 * 亚历克斯希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。
 *
 * 返回他到离他最近的人的最大距离。
 */

/**
 * 最直观的方案,遍历
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  let len = seats.length;
  let max_distance = 0;
  for (let i = 0; i < len; i++) {
    if (!seats[i]) {
      max_distance = Math.max(max_distance, stepSearch(i, seats));
    }
  }
  return max_distance;
};

let stepSearch = (i, arr) => {
  let left = i - 1,
    right = i + 1;
  while (true) {
    if (arr[left]) return i - left;
    if (arr[right]) return right - i;
    left--;
    right++;
  }
};
/**
 * 执行用时：56 ms, 在所有 JavaScript 提交中击败了100%的用户
 * 内存消耗：41.13 MB, 在所有 JavaScript 提交中击败了29.03%的用户
 */

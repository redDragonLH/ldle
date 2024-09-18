/**
 * 2332. 坐上公交的最晚时间
 *
 * 给你一个下标从 0 开始长度为 n 的整数数组 buses ，其中 buses[i] 表示第 i 辆公交车的出发时间。同时给你一个下标从 0 开始长度为 m 的整数数组 passengers ，其中 passengers[j] 表示第 j 位乘客的到达时间。所有公交车出发的时间互不相同，所有乘客到达的时间也互不相同。
 * 给你一个整数 capacity ，表示每辆公交车 最多 能容纳的乘客数目。
 * 每位乘客都会搭乘下一辆有座位的公交车。如果你在 y 时刻到达，公交在 x 时刻出发，满足 y <= x  且公交没有满，那么你可以搭乘这一辆公交。最早 到达的乘客优先上车。
 * 返回你可以搭乘公交车的最晚到达公交站时间。你 不能 跟别的乘客同时刻到达。
 * 注意：数组 buses 和 passengers 不一定是有序的。
 */

/**
 * 由于最早到达的乘客优先上车，为了方便模拟，我们将公交车到达的时间和乘客到达的时间按照先后顺序进行排序。
 * 设第 i 班公交车到达的时间为 buses[i]，此时未上车且在 buses[i] 时刻之前到达的乘客按照时间先后顺序依次上车，
 * 直到车辆载客人数达到上限 capacity 为止，则继续模拟第 i+1 班公交车乘客上车，直到所有的车辆均模拟完毕
 * @param {number[]} buses
 * @param {number[]} passengers
 * @param {number} capacity
 * @return {number}
 */
var latestTimeCatchTheBus = function (buses, passengers, capacity) {
    // 不排序不好弄
  buses.sort((a, b) => a - b);
  passengers.sort((a, b) => a - b);
  let pos = 0;
  let space = 0;

  for (const arrive of buses) {
    space = capacity;
    while (space > 0 && pos < passengers.length && passengers[pos] <= arrive) {
      space--;
      pos++;
    }
  }

  pos--;
  let lastCatchTime = space > 0 ? buses[buses.length - 1] : passengers[pos];
  while (pos >= 0 && passengers[pos] === lastCatchTime) {
    pos--;
    lastCatchTime--;
  }

  return lastCatchTime;
};

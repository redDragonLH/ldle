/**
 * 2594. 修车的最少时间
 *
 * 给你一个整数数组 ranks ，表示一些机械工的 能力值 。ranksi 是第 i 位机械工的能力值。能力值为 r 的机械工可以在 r * n2 分钟内修好 n 辆车。
 *
 * 同时给你一个整数 cars ，表示总共需要修理的汽车数目。
 *
 * 请你返回修理所有汽车 最少 需要多少时间。
 *
 * 注意：所有机械工可以同时修理汽车。
 */

/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
  let left = 0;
  let right = Math.min(...ranks) * cars * cars;
  while (left + 1 < right) {
    // 开区间
    const mid = Math.floor((left + right) / 2);
    let s = 0;
    for (const r of ranks) {
      s += Math.floor(Math.sqrt(mid / r));
    }
    if (s >= cars) {
      right = mid; // 满足要求
    } else {
      left = mid;
    }
  }
  return right; // 最小的满足要求的值
};

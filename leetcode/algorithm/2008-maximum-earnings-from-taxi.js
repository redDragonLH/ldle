/**
 * 2008. 出租车的最大盈利
 *
 * 你驾驶出租车行驶在一条有 n 个地点的路上。这 n 个地点从近到远编号为 1 到 n ，你想要从 1 开到 n ，通过接乘客订单盈利。你只能沿着编号递增的方向前进，不能改变方向。
 * 乘客信息用一个下标从 0 开始的二维数组 rides 表示，其中 rides[i] = [starti, endi, tipi] 表示第 i 位乘客需要从地点 starti 前往 endi ，愿意支付 tipi 元的小费。
 * 每一位 你选择接单的乘客 i ，你可以 盈利 endi - starti + tipi 元。你同时 最多 只能接一个订单。
 * 给你 n 和 rides ，请你返回在最优接单方案下，你能盈利 最多 多少元。
 * 注意：你可以在一个地点放下一位乘客，并在同一个地点接上另一位乘客。
 */

/**
 * 直观思路就是遍历,从头到尾双层遍历,检查不重叠就加上
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
var maxTaxiEarnings = function (n, rides) {
  rides.sort((a, b) => a[0] - b[0]);

  let profit = rides.map((a) => a[1] - a[0] + a[2]);
  let len = rides.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    let data = rides[i][1] - rides[i][0] + rides[i][2];
    let prev = rides[i];
    let d = [rides[i]];
    for (let j = i + 1; j < len; j++) {
      if (prev[1] <= rides[j][0]) {
        data += profit[j];
        prev = rides[j];
        d.push(rides[j]);
      }
    }
    console.log(d);
    result = Math.max(data, result);
  }
  return result;
};
/**
 * 失败,这个无法解决重叠数据选取最大值的逻辑,那就得无数层循环嵌套了.
 *
 * 现在属于贪心逻辑无法满足,得用动态规划了,或者广度优先遍历
 */

/**
 * 官方题解 动态规划
 * 
 * 确认初始数据结构
 * 确认初始数据
 * 确认转换方程
 *  这步比较麻烦,尤其是这题无法直接得出转换方程
 */
var maxTaxiEarnings = function (n, rides) {
  const dp = new Array(n + 1).fill(0);
  const rideMap = new Map();
  for (const ride of rides) {
    // 以结束时间为元素组织数据
    if (rideMap.has(ride[1])) {
      rideMap.set(ride[1], [...rideMap.get(ride[1]), ride]);
    } else {
      rideMap.set(ride[1], [ride]);
    }
  }

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1];
    // 结束点有数据
    if (rideMap.has(i)) {
        // 遍历所有这点相关的数据
        // 这就解决了我逻辑中贪心无法解决的问题
        // 但是以End 点为组织是否可以完全处理问题,以start是否也是可以的?
      for (const ride of rideMap.get(i)) {
        dp[i] = Math.max(dp[i], dp[ride[0]] + ride[1] - ride[0] + ride[2]);
      }
    }
  }
  return dp[n];
};

/**
 * 1109. 航班预订统计
 *
 * 这里有 n 个航班，它们分别从 1 到 n 进行编号。
 *
 * 有一份航班预订表 bookings ，表中第 i 条预订记录 bookings[i] = [firsti, lasti, seatsi] 意味着在从 firsti 到 lasti （包含 firsti 和 lasti ）的 每个航班 上预订了 seatsi 个座位。
 *
 * 请你返回一个长度为 n 的数组 answer，其中 answer[i] 是航班 i 上预订的座位总数。
 */
/**
 * 奇怪的题意,隐含的条件多还是翻译的问题~~
 * 暴力解法,轮询所有节点,把通过的点的数量加到一起,其中包含越过的节点(航线是一条线,只有一架飞机,飞机每个站都停,这哪是飞机,这是公交车)
 * 轮询比较麻烦,因为不仅要判断开始,还要判断结束(你这预定的座位没人下去么~~~),而且还要确定开始和结束的中间站点
 */

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {};

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
 * 官方题解: 差分
 *
 * 差分: 下一个数值,减去上一个数值
 *
 * 思路: 预定记录实际上代表了一个区间的增量,
 *  差分数组对应的概念是前缀和数组,对于数组[1,2,2,4],其差分数组为 [1,1,0,2],差分数组的第i个数即为原数组的第 i-1个元素和第i个元素的差值,也就是说我们对差分数组求前缀和即可得到原数组
 *
 *  差分数组的性质: 当希望对原数组的某一个区间[l,r]施加一个增量 inc 时,差分数组d对应的改变是: d[l]增加 inc,d[r + 1]减少 inc.这样对于区间的修改就变为了对于两个位置的修改.并且这种修改是
 * 可以叠加的,即当多次对原数组的不同区间施加不同的增量,只要按规则修改差分数组即可
 * 
 * 代码不是很理解
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const nums = new Array(n).fill(0);
  for (const booking of bookings) {
    // num是保存的当前点的预约座位数量
    //  起始点在整条线上一个的点 的数量 + 这个点的预约座位
    nums[booking[0] - 1] += booking[2];
    if (booking[1] < n) {
      nums[booking[1]] -= booking[2];
    }
  }
  for (let i = 1; i < n; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};

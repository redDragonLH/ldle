/**
 * 1845. 座位预约管理系统
 *
 * 请你设计一个管理 n 个座位预约的系统，座位编号从 1 到 n 。
 * 请你实现 SeatManager 类：
 *  * SeatManager(int n) 初始化一个 SeatManager 对象，它管理从 1 到 n 编号的 n 个座位。所有座位初始都是可预约的。
 *  * int reserve() 返回可以预约座位的 最小编号 ，此座位变为不可预约。
 *  * void unreserve(int seatNumber) 将给定编号 seatNumber 对应的座位变成可以预约。
 */

/**
 * @param {number} n
 */
var SeatManager = function (n) {
  this.mapping = new Array(n).fill(0);
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
    let i = this.mapping.indexOf(0);
    this.mapping[i] = 1;
    return i + 1;
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
    this.mapping[seatNumber - 1] = 0;
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */

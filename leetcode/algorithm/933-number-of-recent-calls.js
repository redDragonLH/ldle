/**
 * 933. 最近的请求次数
 *
 * 写一个 RecentCounter 类来计算特定时间范围内最近的请求。
 *
 * 请你实现 RecentCounter 类：
 *  * RecentCounter() 初始化计数器，请求数为 0 。
 *  * int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
 *
 * 保证 每次对 ping 的调用都使用比之前更大的 t 值。
 */

var RecentCounter = function () {
  this.count = 0;
  this.pingList = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  if (this.pingList.length) {
    this.pingList.push(t);

    let time = t - 3000;
    for (const [index, item] of this.pingList.entries()) {
      if (item >= time) {
        this.count = this.pingList.length - index;
        break;
      }
    }
  } else {
    this.count = 1;
    this.pingList.push(t);
  }
  return this.count;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
/**
 * 应该能映射为map或者其他结构优化边界查找,或者双指针应该可以优化
 * 执行用时：2032 ms, 在所有 JavaScript 提交中击败了5.13%的用户
 * 内存消耗：59.2 MB, 在所有 JavaScript 提交中击败了5.04%的用户
 */

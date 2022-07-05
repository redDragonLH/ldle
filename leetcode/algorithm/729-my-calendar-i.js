/**
 * 729. 我的日程安排表 I
 *
 * 实现一个 MyCalendar 类来存放你的日程安排。如果要添加的日程安排不会造成 重复预订 ，则可以存储这个新的日程安排。
 *
 * 当两个日程安排有一些时间上的交叉时（例如两个日程安排都在同一时间内），就会产生 重复预订 。
 *
 * 日程可以用一对整数 start 和 end 表示，这里的时间是半开区间，即 [start, end), 实数 x 的范围为，  start <= x < end 。
 *
 * 实现 MyCalendar 类：
 *  * MyCalendar() 初始化日历对象。
 *  * boolean book(int start, int end) 如果可以将日程安排成功添加到日历中而不会导致重复预订，返回 true 。否则，返回 false 并且不要将该日程安排添加到日历中。
 */

var MyCalendar = function () {
  this.tree = new Set();
  this.lazy = new Set();
};
/**
 * 算法:线段树
 *  使用线段树,假设开辟了数组 arr[0,...,10^9],初始时每个元素的值都为0,对于每次行程预定的区间 [start,end),则将区间中的元素arr[start,..,end-1]中的每个元素
 * 都标记为1,每次调用 book 时,只需检测 arr[start,...end-1]区间是否有元素被标记为1.
 *  实际上不必开辟数组 arr,可采用动态线段树,懒标记 lazy 标记区间 [l,r] 已经被预定,tree 记录区间 [l,r]的是否存在标记为1的元素
 *
 *  * 每次进行 book 操作时,首先判断区间 [start,...,end-1] 是否存在元素被标记,如果存在被标记为1的元素,则表明该区间不可预定; 否则,则将可以预订.
 * 预定完成后,将 arr[start,...,end-1]进行标记为1,并同时更新线段树
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  if (this.query(start, end - 1, 0, 1000000000, 1)) {
    return false;
  }
  this.update(start, end - 1, 0, 1000000000, 1);
  return true;
};
/**
 * 核心逻辑上用的是二分和递归,但是这idx是干啥的就有点懵
 * @param {*} start 
 * @param {*} end 
 * @param {*} l 
 * @param {*} r 
 * @param {*} idx 
 * @returns 
 */
MyCalendar.prototype.query = function (start, end, l, r, idx) {
  if (start > r || end < l) {
    return false;
  }
  /* 如果该区间已被预订，则直接返回 */
  if (this.lazy.has(idx)) {
    return true;
  }
  if (start <= l && r <= end) {
    return this.tree.has(idx);
  } else {
    const mid = (l + r) >> 1;
    if (end <= mid) {
      return this.query(start, end, l, mid, 2 * idx);
    } else if (start > mid) {
      return this.query(start, end, mid + 1, r, 2 * idx + 1);
    } else {
      return (
        this.query(start, end, l, mid, 2 * idx) |
        this.query(start, end, mid + 1, r, 2 * idx + 1)
      );
    }
  }
};

MyCalendar.prototype.update = function (start, end, l, r, idx) {
  if (r < start || end < l) {
    return;
  }
  if (start <= l && r <= end) {
    this.tree.add(idx);
    this.lazy.add(idx);
  } else {
    const mid = (l + r) >> 1;
    this.update(start, end, l, mid, 2 * idx);
    this.update(start, end, mid + 1, r, 2 * idx + 1);
    this.tree.add(idx);
  }
};
/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
